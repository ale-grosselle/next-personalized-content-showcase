import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '../../lib/api';
import { formatPrice } from '../../lib/format-price';
import { SaveFavorite } from './SaveFavorite';

interface ProductCardProps {
  product: Product;
  userId?: string;
}

export function ProductCard({ product, userId }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden relative">
      <div className="absolute top-3 right-3 z-10 bg-white rounded-lg shadow-md">
        <SaveFavorite
          productId={product.id}
          productTitle={product.title}
          userId={userId}
        />
      </div>

      <Link
        href={`/product/${product.id}`}
        className="block group"
        prefetch={false}
      >
        <div className="relative aspect-[4/3] bg-gray-200">
          {product.images[0] && (
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 mb-2 min-h-[3.5rem]">
            {product.title}
          </h3>
          <p className="text-2xl font-bold text-blue-600 mb-3">
            {formatPrice(product.price, product.currency)}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {product.location.city}
            </span>
            <span className="text-gray-500">{product.category}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
