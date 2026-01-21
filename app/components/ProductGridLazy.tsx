import { RecommendationsResponse } from '@/app/lib/api';
import { use } from 'react';
import { ProductGrid } from '@/app/components/ProductGrid/ProductGrid';

interface ProductGridLazyProps {
  response: Promise<RecommendationsResponse>;
}
export const ProductGridLazy = ({ response }: ProductGridLazyProps) => {
  const data = use(response);
  return <ProductGrid products={data.recommendations} />;
};
