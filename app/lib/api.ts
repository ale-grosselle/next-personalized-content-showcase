import { cache } from 'react';
import { generateMockProduct, type Product } from './mock-data';

export interface RecommendationsResponse {
  recommendations: Product[];
  userId: string;
  timestamp: string;
}

/**
 * Fetch personalized recommendations for a user
 * Uses React cache to deduplicate requests
 */
export const fetchRecommendations = cache(
  async (userId: string, limit = 10): Promise<RecommendationsResponse> => {
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
  },
);

export type { Product };
