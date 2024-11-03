import { useTranslations } from 'next-intl';
import HeroImageLoader from './HeroImageLoader';
import CodeIcon from '@/ui/design/CodeIcon';
import Link from 'next/link';
import ArrowRight from '@/ui/design/ArrowRight';

export default function HeroSection() {
    const t = useTranslations('HomePage.HeroSection');
    return (
        <section className="py-10 space-y-10 lg:grid lg:grid-cols-[400px_auto] xl:gap-10 xl:justify-center xl:items-center">
            <div className="w-[328px] h-[490px] sm:w-[395px] sm:h-[592px] relative mx-auto">
                <HeroImageLoader />
            </div>
            <div className="space-y-2 px-4 sm:mx-5 sm:space-y-4  xl:max-w-[784px]">
                <p className="text-lg font-medium leading-[27px] text-green-primary sm:text-[32px] sm:leading-[48px]">
                    {t('Hello')}
                </p>
                <p className="text-[40px] font-semibold leading-[44px] tracking-wide text-light-primary sm:text-[80px] sm:leading-[114px] lg:text-[60px] xl:text-[80px]">
                    {t('Name')}
                </p>
                <p className="text-green-primary text-lg font-medium leading-[27px] flex items-center gap-2 sm:text-[32px] sm:leading-[48px]">
                    {t('Header')}
                    <CodeIcon width="24" height="24" />
                </p>
                <p className="text-dark-lightGray text-lg font-normal leading-[27px]">{t('Text')}</p>
                <div className='pt-8 sm:pt-0'>
                    <Link href="#" className="primaryBtn w-full  sm:w-auto">
                        <ArrowRight className='fill-dark-black' />
                        {t('ButtonContent')}
                    </Link>
                </div>
            </div>
        </section>
    );
}
