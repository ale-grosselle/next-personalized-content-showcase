export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse">
      <div className="aspect-[4/3] bg-gray-300" />
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded mb-2" />
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-3" />
        <div className="h-8 bg-gray-300 rounded w-1/2 mb-3" />
        <div className="flex justify-between">
          <div className="h-4 bg-gray-300 rounded w-1/3" />
          <div className="h-4 bg-gray-300 rounded w-1/4" />
        </div>
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
