import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { getLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

import Name from '@components/navigation/Name';
import HamburgerMenu from '@components/navigation/HamburgerMenu';
import DesktopMenu from '@components/navigation/DesktopMenu';

import './globals.css';
import Footer from '@components/footer/Footer';

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
        <html lang={locale} className='!scroll-smooth'>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <body className={poppins.className}>
                    <nav className="bg-dark-black flex justify-between p-4 items-center md:px-20 md:py-10">
                        <Name />
                        <HamburgerMenu />
                        <DesktopMenu />
                    </nav>
                    {children}
                    <Footer />
                </body>
            </NextIntlClientProvider>
        </html>
    );
}
