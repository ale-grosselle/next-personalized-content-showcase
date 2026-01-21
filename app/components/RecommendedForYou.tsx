import { fetchRecommendations, RecommendationsResponse } from '../lib/api';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { ProductGridLazy } from '@/app/components/ProductGridLazy';
import { ProductGridSkeleton } from '@/app/components/ProductGrid/ProductCardSkeleton';

interface RecommendedForYouProps {
  title: string;
  subtitle?: string;
  limit?: number;
}

export async function RecommendedForYou({
  title,
  subtitle,
  limit = 8,
}: RecommendedForYouProps) {
  const promiseWithResolvers: PromiseWithResolvers<RecommendationsResponse> =
    Promise.withResolvers();
  const cookiesPromise = cookies();
  cookiesPromise.then(async (cookies) => {
    const userId = cookies.get('userId')?.value || 'guest';
    console.log('Fetching recommendations for user:', userId);
    const data = await fetchRecommendations(userId, limit);
    promiseWithResolvers.resolve(data);
  });

  return (
    <section className="mb-12">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        </div>
        {subtitle && <p className="text-gray-600">{subtitle}</p>}
      </div>
      <Suspense
        fallback={
          <div>
            <ProductGridSkeleton count={5} />
          </div>
        }
      >
        <ProductGridLazy response={promiseWithResolvers.promise} />
      </Suspense>
    </section>
  );
}
