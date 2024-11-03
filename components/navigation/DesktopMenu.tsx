import { useTranslations } from 'next-intl';
import Link from 'next/link';

import ArrowBottom from '@/ui/design/ArrowBottom';
import ArrowRight from '@/ui/design/ArrowRight';
import LanguageSwitcher from './LanguageSwitcher';

export default function DesktopMenu() {
    const t = useTranslations('Navigation');
    return (
        <div className="hidden lg:flex gap-9">
            {/* Menu Items */}
            <ul className="flex gap-9 items-center">
                <li>
                    <Link href="#" className="tertiaryBtn">
                        {t('Portfolio')}
                    </Link>
                </li>
                <li>
                    <Link href="#skillsSection" className="tertiaryBtn">
                        {t('Skills')}
                    </Link>
                </li>
                <li>
                    <button className="tertiaryBtn flex items-center gap-1 group">
                        <ArrowBottom className="fill-light-primary group-hover:fill-green-primary group-hover:transform group-hover:duration-200 group-hover:transition group-hover:ease-out" />
                        {t('DownloadCV')}
                    </button>
                </li>
                <li>
                    <Link href="#" className="secondaryBtn group">
                        <ArrowRight className="fill-green-primary group-hover:fill-dark-black group-hover:transform group-hover:duration-200 group-hover:transition group-hover:ease-out" />
                        <p>{t('ContactMe')}</p>
                    </Link>
                </li>
            </ul>
            <LanguageSwitcher />
        </div>
    );
}
