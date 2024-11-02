import { useTranslations } from 'next-intl';

export default function Name() {
    const t = useTranslations('Navigation');
    return (
        <div className="text-base my-[7px] font-semibold flex gap-1 md:text-[26px]">
            <p className="text-light-primary">{t('FirstName')}</p>
            <p className="text-green-primary">{t('SecondName')}</p>
        </div>
    );
}
