import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Next.js Personalized Content Showcase
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Explore different approaches to personalized content rendering
        </p>

        <div className="space-y-6">
          <Link
            href="/default"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Default Approach
            </h2>
            <p className="text-gray-600">
              Server-side rendering with standard data fetching.
            </p>
          </Link>

          <Link
            href="/with-use-cache"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              With useCache Hook
            </h2>
            <p className="text-gray-600">
              Optimized server-side rendering using React&apos;s cache feature.
            </p>
          </Link>

          <Link
            href="/client-side"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Client-Side Rendering
            </h2>
            <p className="text-gray-600">
              Client-side data fetching after initial page render.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
