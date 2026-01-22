'use client';

import useSWR from 'swr';
import { RecommendationsResponse } from '../lib/api';
import { ProductGrid } from '@/app/components/ProductGrid/ProductGrid';
import { ProductGridSkeleton } from '@/app/components/ProductGrid/ProductCardSkeleton';

interface RecommendedForYouClientProps {
  title: string;
  subtitle?: string;
  limit?: number;
}

const fetcher = async (url: string): Promise<RecommendationsResponse> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch recommendations');
  }
  return res.json();
};

function getCookie(name: string): string | undefined {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift();
  }
  return undefined;
}

export function RecommendedForYouClient({
  title,
  subtitle,
  limit = 8,
}: RecommendedForYouClientProps) {
  const userId = getCookie('userId') || 'guest';

  const { data, error, isLoading } = useSWR<RecommendationsResponse>(
    `api/recommendations?userId=${userId}&limit=${limit}`,
    fetcher
  );

  return (
    <section className="mb-12">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        </div>
        {subtitle && <p className="text-gray-600">{subtitle}</p>}
      </div>

      {error && (
        <div className="text-red-600 p-4 bg-red-50 rounded-lg">
          Failed to load recommendations. Please try again later.
        </div>
      )}

      {isLoading && (
        <div>
          <ProductGridSkeleton count={5} />
        </div>
      )}

      {data && <ProductGrid products={data.recommendations} />}
    </section>
  );
}
