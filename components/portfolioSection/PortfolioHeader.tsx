import { useTranslations } from 'next-intl';

export default function PortfolioHeader() {
    const t = useTranslations('HomePage.PortfolioSection');
    return (
        <div>
            <h2 className="text-green-primary text-base font-medium leading-normal text-center sm:text-[32px] sm:leading-[48px]">
                {t('Header')}
            </h2>
            <p className="text-light-primary text-base font-normal leading-normal text-center sm:text-lg sm:leading-[27px] mb-12">
                {t('Text')}
            </p>
        </div>
    );
}
