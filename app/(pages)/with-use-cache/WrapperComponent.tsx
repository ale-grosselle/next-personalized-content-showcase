import { RecommendedForYou } from '@/app/components/RecommendedForYou';

export const WrapperComponent = () => {
  return (
    <RecommendedForYou
      title="Consigliati per te"
      subtitle="Prodotti selezionati in base alle tue preferenze"
      limit={8}
    />
  );
};

export default WrapperComponent;
