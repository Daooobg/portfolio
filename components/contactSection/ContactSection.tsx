'use client';

import { useActionState } from 'react';
import { useTranslations } from 'next-intl';

import FormSubmit from './FormSubmit';

export default function ContactSection({
    action,
}: {
    action: (
        formState: {
            errors: string[];
        },
        formData: FormData
    ) => Promise<{
        errors: string[];
        success?: boolean;
    }>;
}) {
    const t = useTranslations('HomePage.ContactSection');

    const [formState, formAction] = useActionState(action, { errors: [] });

    console.log(formState);
    // TODO handle server errors and form validation

    return (
        <section className="py-10 px-4 sm:py-20">
            <h2 className="text-green-primary text-base font-medium leading-normal text-center sm:text-[32px] sm:leading-[48px]">
                {t('ContactMe')}
            </h2>

            <form action={formAction} className="max-w-[560px] m-auto mt-6 space-y-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-dark-lightGray text-sm font-normal leading-[18px]">
                        {t('FullName')}
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="h-11 bg-inherit text-dark-gray border border-dark-lightGray rounded px-2"
                    />
                </div>
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
                    <label htmlFor="message" className="text-dark-lightGray text-sm font-normal leading-[18px]">
                        {t('Message')}
                    </label>
                    <textarea
                        name="message"
                        className="h-[122px] bg-inherit text-dark-gray border border-dark-lightGray rounded px-2"
                    />
                </div>
                <FormSubmit />
            </form>
        </section>
    );
}
