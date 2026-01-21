import {BannerWithUseCache} from './staticComponent/Banner.static';
import {RecommendedForYou} from "@/app/components/RecommendedForYou";

export default async function HomePage() {
    console.log('Hello from Homepage app/page-with-use-cache/page.tsx');
    return (
        <>
            <RecommendedForYou
                title="Recommended for you"
                subtitle="Products selected based on your preferences"
                limit={8}
            />
            <BannerWithUseCache/>
        </>
    );
}
