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
                    <Link href="#" className="tertiaryBtn">
                        {t('Skills')}
                    </Link>
                </li>
                <li>
                    <button className="tertiaryBtn flex items-center gap-1">
                        <ArrowBottom />
                        {t('DownloadCV')}
                    </button>
                </li>
                <li>
                    <Link href="#" className="secondaryBtn">
                        <ArrowRight />
                        <p>{t('ContactMe')}</p>
                    </Link>
                </li>
            </ul>
            <LanguageSwitcher />
        </div>
    );
}
