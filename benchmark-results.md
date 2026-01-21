# Next.js Benchmark Results Comparison

## Test Configuration
- **Tool**: autocannon
- **Connections**: 5 concurrent connections
- **Duration**: 10 seconds per test
- **Date**: 2026-01-21 08:00:13

---

## Summary Table

| Metric | /with-use-cache | /default | /client-side |
|--------|----------------|----------|--------------|
| **Avg Latency** | 222.26 ms | 218.11 ms | 2.67 ms |
| **Requests/sec** | 13.30 req/s | 13.50 req/s | 937.82 req/s |
| **Throughput** | 0.70 MB/s | 0.71 MB/s | 9.85 MB/s |
| **Total Requests** | 133 | 135 | 10316 |
| **Data Transferred** | 7.03 MB | 7.13 MB | 108.40 MB |

---

## Detailed Results


### 1. /with-use-cache (Server-side with use cache)

```json
{
  "url": "http://localhost:3000/with-use-cache",
  "connections": 3,
  "sampleInt": 1000,
  "pipelining": 1,
  "workers": 0,
  "duration": 10.02,
  "samples": 10,
  "start": "2026-01-21T07:59:40.322Z",
  "finish": "2026-01-21T07:59:50.339Z",
  "errors": 0,
  "timeouts": 0,
  "mismatches": 0,
  "non2xx": 0,
  "resets": 0,
  "1xx": 0,
  "2xx": 133,
  "3xx": 0,
  "4xx": 0,
  "5xx": 0,
  "statusCodeStats": {
    "200": {
      "count": 133
    }
  },
  "latency": {
    "average": 222.26,
    "mean": 222.26,
    "stddev": 31.08,
    "min": 206,
    "max": 413,
    "p0_001": 206,
    "p0_01": 206,
    "p0_1": 206,
    "p1": 208,
    "p2_5": 208,
    "p10": 210,
    "p25": 213,
    "p50": 215,
    "p75": 219,
    "p90": 228,
    "p97_5": 293,
    "p99": 413,
    "p99_9": 413,
    "p99_99": 413,
    "p99_999": 413,
    "totalCount": 133
  },
  "requests": {
    "average": 13.3,
    "mean": 13.3,
    "stddev": 1.74,
    "min": 9,
    "max": 15,
    "total": 133,
    "p0_001": 9,
    "p0_01": 9,
    "p0_1": 9,
    "p1": 9,
    "p2_5": 9,
    "p10": 9,
    "p25": 13,
    "p50": 13,
    "p75": 15,
    "p90": 15,
    "p97_5": 15,
    "p99": 15,
    "p99_9": 15,
    "p99_99": 15,
    "p99_999": 15,
    "sent": 136
  },
  "throughput": {
    "average": 737164.8,
    "mean": 737164.8,
    "stddev": 96093.66,
    "min": 498825,
    "max": 831375,
    "total": 7371525,
    "p0_001": 498943,
    "p0_01": 498943,
    "p0_1": 498943,
    "p1": 498943,
    "p2_5": 498943,
    "p10": 498943,
    "p25": 720895,
    "p50": 720895,
    "p75": 831487,
    "p90": 831487,
    "p97_5": 831487,
    "p99": 831487,
    "p99_9": 831487,
    "p99_99": 831487,
    "p99_999": 831487
  }
}
```

---

### 2. /default (Standard Server-side)

```json
{
  "url": "http://localhost:3000/default",
  "connections": 3,
  "sampleInt": 1000,
  "pipelining": 1,
  "workers": 0,
  "duration": 10.02,
  "samples": 10,
  "start": "2026-01-21T07:59:51.173Z",
  "finish": "2026-01-21T08:00:01.191Z",
  "errors": 0,
  "timeouts": 0,
  "mismatches": 0,
  "non2xx": 0,
  "resets": 0,
  "1xx": 0,
  "2xx": 135,
  "3xx": 0,
  "4xx": 0,
  "5xx": 0,
  "statusCodeStats": {
    "200": {
      "count": 135
    }
  },
  "latency": {
    "average": 218.11,
    "mean": 218.11,
    "stddev": 10.62,
    "min": 206,
    "max": 311,
    "p0_001": 206,
    "p0_01": 206,
    "p0_1": 206,
    "p1": 207,
    "p2_5": 208,
    "p10": 211,
    "p25": 213,
    "p50": 217,
    "p75": 219,
    "p90": 223,
    "p97_5": 244,
    "p99": 245,
    "p99_9": 311,
    "p99_99": 311,
    "p99_999": 311,
    "totalCount": 135
  },
  "requests": {
    "average": 13.5,
    "mean": 13.5,
    "stddev": 1.37,
    "min": 12,
    "max": 15,
    "total": 135,
    "p0_001": 12,
    "p0_01": 12,
    "p0_1": 12,
    "p1": 12,
    "p2_5": 12,
    "p10": 12,
    "p25": 12,
    "p50": 13,
    "p75": 15,
    "p90": 15,
    "p97_5": 15,
    "p99": 15,
    "p99_9": 15,
    "p99_99": 15,
    "p99_999": 15,
    "sent": 138
  },
  "throughput": {
    "average": 747468.8,
    "mean": 747468.8,
    "stddev": 75436.63,
    "min": 664428,
    "max": 830535,
    "total": 7474815,
    "p0_001": 664575,
    "p0_01": 664575,
    "p0_1": 664575,
    "p1": 664575,
    "p2_5": 664575,
    "p10": 664575,
    "p25": 664575,
    "p50": 719871,
    "p75": 830975,
    "p90": 830975,
    "p97_5": 830975,
    "p99": 830975,
    "p99_9": 830975,
    "p99_99": 830975,
    "p99_999": 830975
  }
}
```

---

### 3. /client-side (100% Client-side with SWR)

```json
{
  "url": "http://localhost:3000/client-side",
  "connections": 3,
  "sampleInt": 1000,
  "pipelining": 1,
  "workers": 0,
  "duration": 11.01,
  "samples": 11,
  "start": "2026-01-21T08:00:02.020Z",
  "finish": "2026-01-21T08:00:13.032Z",
  "errors": 0,
  "timeouts": 0,
  "mismatches": 0,
  "non2xx": 0,
  "resets": 0,
  "1xx": 0,
  "2xx": 10316,
  "3xx": 0,
  "4xx": 0,
  "5xx": 0,
  "statusCodeStats": {
    "200": {
      "count": 10316
    }
  },
  "latency": {
    "average": 2.67,
    "mean": 2.67,
    "stddev": 11.02,
    "min": 1,
    "max": 99,
    "p0_001": 0,
    "p0_01": 0,
    "p0_1": 0,
    "p1": 0,
    "p2_5": 0,
    "p10": 0,
    "p25": 0,
    "p50": 1,
    "p75": 1,
    "p90": 2,
    "p97_5": 54,
    "p99": 65,
    "p99_9": 88,
    "p99_99": 98,
    "p99_999": 99,
    "totalCount": 10316
  },
  "requests": {
    "average": 937.82,
    "mean": 937.82,
    "stddev": 212.41,
    "min": 483,
    "max": 1196,
    "total": 10316,
    "p0_001": 483,
    "p0_01": 483,
    "p0_1": 483,
    "p1": 483,
    "p2_5": 483,
    "p10": 730,
    "p25": 782,
    "p50": 960,
    "p75": 1155,
    "p90": 1178,
    "p97_5": 1196,
    "p99": 1196,
    "p99_9": 1196,
    "p99_99": 1196,
    "p99_999": 1196,
    "sent": 10319
  },
  "throughput": {
    "average": 10333090.91,
    "mean": 10333090.91,
    "stddev": 2340767.88,
    "min": 5321694,
    "max": 13177528,
    "total": 113661688,
    "p0_001": 5324799,
    "p0_01": 5324799,
    "p0_1": 5324799,
    "p1": 5324799,
    "p2_5": 5324799,
    "p10": 8044543,
    "p25": 8617983,
    "p50": 10584063,
    "p75": 12730367,
    "p90": 12984319,
    "p97_5": 13180927,
    "p99": 13180927,
    "p99_9": 13180927,
    "p99_99": 13180927,
    "p99_999": 13180927
  }
}
```


*Report generated on 2026-01-21 08:00:13*
