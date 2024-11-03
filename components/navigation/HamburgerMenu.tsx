'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';

import ArrowRight from '@/ui/design/ArrowRight';
import ArrowBottom from '@/ui/design/ArrowBottom';
import LanguageSwitcher from './LanguageSwitcher';

export default function HamburgerMenu() {
    const [isHamburgerActive, setIsHamburgerActive] = useState(false);
    const t = useTranslations('Navigation');

    const handleHamburger = useCallback(() => {
        setIsHamburgerActive((prevState) => !prevState);
    }, []);

    return (
        <div className='lg:hidden'>
            {/* Hamburger Icon */}
            <div
                className={`flex flex-col gap-1.5 items-end my-2.5 mx-1 md:gap-2 md:mx-1.5 md:my-3 ${
                    isHamburgerActive ? 'hidden' : ''
                }`}
                onClick={handleHamburger}
            >
                <div className="w-8 h-0.5 bg-light-primary rounded-md md:w-9 md:h-[2.5px]"></div>
                <div className="w-8 h-0.5 bg-light-primary rounded-md md:w-9 md:h-[2.5px]"></div>
                <div className="w-4 h-0.5 bg-light-primary rounded-md md:w-[18px] md:h-[2.5px]"></div>
            </div>

            {/* Overlay and Menu */}
            <div
                className={`fixed inset-0 z-40 bg-dark-black transition-opacity duration-300 ${
                    isHamburgerActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={handleHamburger}
            ></div>
            <div
                className={`fixed top-0 right-0 z-50 w-[272px] p-6 h-screen bg-dark-darkGray flex flex-col gap-10 lg:hidden transform transition-transform duration-300 ${
                    isHamburgerActive ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Close Button */}
                <div className="flex justify-end">
                    <button className="bg-light-primary w-6 h-6 relative" onClick={handleHamburger}>
                        <div className="w-4 h-0.5 bg-dark-black rounded-md rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="w-4 h-0.5 bg-dark-black rounded-md -rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    </button>
                </div>

                {/* Menu Items */}
                <div className="text-[26px] font-semibold space-x-1">
                    <span className="text-light-primary">{t('FirstName')}</span>
                    <span className="text-green-primary">{t('SecondName')}</span>
                </div>
                <div className="space-y-4">
                    <LanguageSwitcher />
                    <ul className="space-y-4">
                        <li>
                            <Link href="#" className="secondaryBtn">
                                <ArrowRight />
                                <p>{t('ContactMe')}</p>
                            </Link>
                        </li>
                        <li>
                            <button className="tertiaryBtn flex items-center gap-1">
                                <ArrowBottom />
                                {t('DownloadCV')}
                            </button>
                        </li>
                        <li>
                            <Link href="#" className="tertiaryBtn">
                                {t('Portfolio')}
                            </Link>
                        </li>
                        <li>
                            <Link href="#skillsSection" className="tertiaryBtn" onClick={handleHamburger}>
                                {t('Skills')}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
