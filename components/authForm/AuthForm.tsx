'use client';

import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

export default function AuthForm() {
    const t = useTranslations('AuthForm');
    const params = useSearchParams();
    const mode = params.get('mode') || 'login';

    return (
        <section id="contactSection" className="py-10 px-4 sm:py-20">
            <h2 className="text-green-primary text-base font-medium leading-normal text-center sm:text-[32px] sm:leading-[48px]">
                {mode === 'register' ? t('Register') : t('Login')}
            </h2>

            <form className="max-w-[560px] m-auto mt-6 space-y-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-dark-lightGray text-sm font-normal leading-[18px]">
                        {t('Email')}
                    </label>
                    <input
                        type="text"
                        name="email"
                        className="h-11 bg-inherit text-dark-gray border border-dark-lightGray rounded px-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-dark-lightGray text-sm font-normal leading-[18px]">
                        {t('Password')}
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="h-11 bg-inherit text-dark-gray border border-dark-lightGray rounded px-2"
                    />
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="primaryBtn w-full sm:w-auto">
                        {mode === 'register' ? t('Register') : t('Login')}
                    </button>
                </div>
            </form>
        </section>
    );
}
