'use client';

import { useLocale } from 'next-intl';

import setLanguage from '@/actions/setLanguages';

export default function LanguageSwitcher() {
    const locale = useLocale();

    return (
        <div className="flex gap-1.5 items-center">
            <button
                className={`${locale === 'en' ? 'unActiveLanguageBtn' : 'activeLanguageBtn'} `}
                disabled={locale === 'en'}
                onClick={() => setLanguage('en')}
            >
                EN
            </button>
            <button
                className={`${locale === 'bg' ? 'unActiveLanguageBtn' : 'activeLanguageBtn'} `}
                disabled={locale === 'bg'}
                onClick={() => setLanguage('bg')}
            >
                BG
            </button>
        </div>
    );
}
