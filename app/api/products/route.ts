import { NextResponse } from 'next/server';
import { generateMockProduct } from '../../lib/mock-data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '20');

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  // Generate mock products
  const startId = (page - 1) * limit + 1;
  const products = Array.from({ length: limit }, (_, i) => {
    const id = startId + i;
    return generateMockProduct(id.toString());
  });

  return NextResponse.json({
    products,
    page,
    limit,
    total: 1000,
    hasMore: page * limit < 1000,
  });
}
