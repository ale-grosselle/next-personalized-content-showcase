import type { Product } from '../../lib/api';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  timestamp?: string;
}

export function ProductGrid(
  { products, timestamp }: ProductGridProps,
  userId?: string,
) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Nessun prodotto disponibile</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <ul>
        <li>Timestamp From API: {timestamp}</li>
      </ul>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} userId={userId} />
      ))}
    </div>
  );
}
