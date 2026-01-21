import { Banner } from '@/app/components/Banner';
import { RecommendedForYouClient } from '@/app/components/RecommendedForYouClient';

export default function HomePage() {
  console.log('Hello from Homepage app/page.tsx');
  return (
    <div className="min-h-screen bg-gray-50">
      <RecommendedForYouClient
        title="Recommended for you"
        subtitle="Products selected based on your preferences"
        limit={8}
      />
      <Banner />
    </div>
  );
}
