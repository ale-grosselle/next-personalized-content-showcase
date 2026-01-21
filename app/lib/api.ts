import { cache } from 'react';
import { generateMockProduct, type Product } from './mock-data';

export interface ProductsResponse {
  products: Product[];
  page: number;
  limit: number;
  total: number;
  hasMore: boolean;
}

export interface RecommendationsResponse {
  recommendations: Product[];
  userId: string;
  timestamp: string;
}

/**
 * Fetch products with pagination
 * Uses React cache to deduplicate requests within a single render
 */
export const fetchProducts = cache(async (page = 1, limit = 20): Promise<ProductsResponse> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  const startId = (page - 1) * limit + 1;
  const products = Array.from({ length: limit }, (_, i) => {
    const id = startId + i;
    return generateMockProduct(id.toString());
  });

  return {
    products,
    page,
    limit,
    total: 1000,
    hasMore: page * limit < 1000,
  };
});

/**
 * Fetch personalized recommendations for a user
 * Uses React cache to deduplicate requests
 */
export const fetchRecommendations = cache(async (userId: string, limit = 10): Promise<RecommendationsResponse> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  // Generate personalized recommendations based on userId
  const seed = parseInt(userId) * 100;
  const recommendations = Array.from({ length: limit }, (_, i) => {
    const id = seed + i + 1;
    return generateMockProduct(id.toString());
  });

  return {
    recommendations,
    userId,
    timestamp: new Date().toISOString(),
  };
});

/**
 * Fetch a single product by ID
 * Uses React cache to deduplicate requests
 */
export const fetchProductDetails = cache(async (id: string): Promise<Product> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 150));

  return generateMockProduct(id);
});

export type { Product };
