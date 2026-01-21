import { NextResponse } from 'next/server';
import { generateMockProduct } from '../../lib/mock-data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId') || '1';
  const limit = parseInt(searchParams.get('limit') || '10');

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  // Generate personalized recommendations based on userId
  const seed = parseInt(userId) * 100;
  const recommendations = Array.from({ length: limit }, (_, i) => {
    const id = seed + i + 1;
    return generateMockProduct(id.toString());
  });

  return NextResponse.json({
    recommendations,
    userId,
    timestamp: new Date().toISOString(),
  });
}
