#!/usr/bin/env node

import { exec } from 'child_process';
import { promisify } from 'util';
import { mkdtempSync, writeFileSync, rmSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';

const execAsync = promisify(exec);

const ENDPOINTS = [
  { name: 'with-use-cache', path: '/with-use-cache', description: 'Server-side with use cache' },
  { name: 'default', path: '/default', description: 'Standard Server-side' },
  { name: 'client-side', path: '/client-side', description: '100% Client-side with SWR' }
];

const TEMP_DIR = mkdtempSync(join(tmpdir(), 'benchmark-'));

async function runBenchmark(endpoint) {
  const url = `http://localhost:3000${endpoint.path}`;
  const outputFile = join(TEMP_DIR, `${endpoint.name}.json`);

  console.log(`🔥 Running benchmark for ${endpoint.path}...`);

  try {
    const { stdout } = await execAsync(
      `npx autocannon -c 5 -d 10 --json ${url}`,
      { maxBuffer: 10 * 1024 * 1024 }
    );

    writeFileSync(outputFile, stdout);
    const result = JSON.parse(stdout);

    console.log(`   ✓ Completed: ${result.requests.total} requests, ${result.latency.mean.toFixed(2)} ms avg latency\n`);

    return { endpoint, result, outputFile };
  } catch (error) {
    console.error(`   ✗ Failed: ${error.message}\n`);
    throw error;
  }
}

function formatMetrics(result) {
  return {
    latency: `${result.latency.mean.toFixed(2)} ms`,
    reqSec: `${result.requests.mean.toFixed(2)} req/s`,
    throughput: `${(result.throughput.mean / 1024 / 1024).toFixed(2)} MB/s`,
    totalRequests: result.requests.total,
    totalData: `${(result.throughput.total / 1024 / 1024).toFixed(2)} MB`
  };
}

function generateMarkdown(benchmarkResults) {
  const date = new Date().toISOString().replace('T', ' ').substring(0, 19);

  const metrics = benchmarkResults.map(br => ({
    name: br.endpoint.name,
    ...formatMetrics(br.result)
  }));

  const [uc, def, cs] = metrics;

  return `# Next.js Benchmark Results Comparison

## Test Configuration
- **Tool**: autocannon
- **Connections**: 5 concurrent connections
- **Duration**: 10 seconds per test
- **Date**: ${date}

---

## Summary Table

| Metric | /with-use-cache | /default | /client-side |
|--------|----------------|----------|--------------|
| **Avg Latency** | ${uc.latency} | ${def.latency} | ${cs.latency} |
| **Requests/sec** | ${uc.reqSec} | ${def.reqSec} | ${cs.reqSec} |
| **Throughput** | ${uc.throughput} | ${def.throughput} | ${cs.throughput} |
| **Total Requests** | ${uc.totalRequests} | ${def.totalRequests} | ${cs.totalRequests} |
| **Data Transferred** | ${uc.totalData} | ${def.totalData} | ${cs.totalData} |

---

## Detailed Results

${benchmarkResults.map(br => `
### ${ENDPOINTS.findIndex(e => e.name === br.endpoint.name) + 1}. ${br.endpoint.path} (${br.endpoint.description})

\`\`\`json
${JSON.stringify(br.result, null, 2)}
\`\`\`
`).join('\n---\n')}

*Report generated on ${date}*
`;
}

async function main() {
  console.log('');
  console.log('📊 Running benchmarks...');
  console.log('========================\n');

  try {
    // Run benchmarks
    const benchmarkResults = [];
    for (const endpoint of ENDPOINTS) {
      const result = await runBenchmark(endpoint);
      benchmarkResults.push(result);
    }

    // Generate report
    console.log('📝 Generating comparison report...\n');
    const markdown = generateMarkdown(benchmarkResults);

    const reportFile = 'benchmark-results.md';
    writeFileSync(reportFile, markdown);

    console.log('✅ Benchmark complete!');
    console.log(`📄 Results saved to: ${reportFile}\n`);

    // Print summary
    console.log('Summary:');
    console.log('--------');
    benchmarkResults.forEach(br => {
      const metrics = formatMetrics(br.result);
      console.log(`  ${br.endpoint.path.padEnd(20)} ${metrics.reqSec}, ${metrics.latency}`);
    });
    console.log('');

    // Cleanup
    rmSync(TEMP_DIR, { recursive: true });

    console.log('🎉 Done!');
  } catch (error) {
    console.error('❌ Error:', error.message);
    rmSync(TEMP_DIR, { recursive: true, force: true });
    process.exit(1);
  }
}

main();
