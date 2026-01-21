'use cache';
import { Banner } from '@/app/components/Banner';

export const BannerWithUseCache = async () => {
  console.log(
    'Hello from BannerWithUseCache component: staticComponent/Banner.static.tsx',
  );
  return <Banner />;
};
