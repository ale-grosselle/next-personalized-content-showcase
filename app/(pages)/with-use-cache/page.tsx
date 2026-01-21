import {BannerWithUseCache} from './staticComponent/Banner.static';
import {RecommendedForYou} from "@/app/components/RecommendedForYou";

export default async function HomePage() {
    console.log('Hello from Homepage app/page-with-use-cache/page.tsx');
    return (
        <>
            <RecommendedForYou
                title="Consigliati per te"
                subtitle="Prodotti selezionati in base alle tue preferenze"
                limit={8}
            />
            <BannerWithUseCache/>
        </>
    );
}
