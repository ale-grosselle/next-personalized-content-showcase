import { RecommendedForYou } from '../../components/RecommendedForYou';
import { Banner } from '@/app/components/Banner';

export default function HomePage() {
  console.log('Hello from Homepage app/page.tsx');
  return (
    <div className="min-h-screen bg-gray-50">
      <RecommendedForYou
        title="Consigliati per te"
        subtitle="Prodotti selezionati in base alle tue preferenze"
        limit={8}
      />
      <Banner />
    </div>
  );
}
