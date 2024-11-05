'use client';

import { useTranslations } from 'next-intl';
import { useFormStatus } from 'react-dom';

import ArrowRight from '@/ui/design/ArrowRight';

export default function FormSubmit() {
    const status = useFormStatus();
    const t = useTranslations('HomePage.ContactSection');

    if (status.pending) {
        // TODO handle pending status
        // return <p className="text-green-primary mt-6 h-[58px]">Sending email...</p>;
    }

    return (
        <>
            <div className="flex justify-center">
                <button type="submit" className="primaryBtn w-full sm:w-auto">
                    {t('FormSubmit')}
                    <ArrowRight className="fill-dark-black" />
                </button>
            </div>
        </>
    );
}
