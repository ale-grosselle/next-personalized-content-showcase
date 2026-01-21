import { Banner } from '@/app/components/Banner';
import { RecommendedForYouClient } from '@/app/components/RecommendedForYouClient';

export default function HomePage() {
  console.log('Hello from Homepage app/page.tsx');
  return (
    <div className="min-h-screen bg-gray-50">
      <RecommendedForYouClient
        title="Consigliati per te"
        subtitle="Prodotti selezionati in base alle tue preferenze"
        limit={8}
      />
      <Banner />
    </div>
  );
}
