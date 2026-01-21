'use client';

import { useState } from 'react';

interface SaveFavoriteProps {
  productId: string;
  productTitle: string;
  userId?: string;
}

export function SaveFavorite({ productTitle, userId }: SaveFavoriteProps) {
  const [isSaved, setIsSaved] = useState(false);

  const handleClick = () => {
    setIsSaved(!isSaved);
    alert(
      isSaved
        ? `Removed from favorites: ${productTitle}`
        : `Added to favorites: ${productTitle}`,
    );
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
      title={isSaved ? 'Remove from favorites' : 'Add to favorites'}
    >
      <svg
        className={`w-6 h-6 transition-colors ${
          isSaved ? 'fill-red-500 text-red-500' : 'fill-none text-gray-600'
        }`}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
}
