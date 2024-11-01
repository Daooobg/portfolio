import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { getLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import LanguageSwitcher from '@components/navigation/LanguageSwitcher';
import './globals.css';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
    title: 'Ivaylo Ivanov Portfolio',
    description: 'This is Ivaylo Ivanov portfolio website',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();

    const messages = await getMessages();
    return (
        <html lang={locale}>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <body className={poppins.className}>
                    <LanguageSwitcher />
                    {children}
                </body>
            </NextIntlClientProvider>
        </html>
    );
}
