import type { Metadata } from 'next';

import '../../globals.css';
import Footer from '@components/footer/Footer';
import Link from 'next/link';
import { verifyAuth } from '@/lib/luciaSessions';
import { redirect } from 'next/navigation';
import { logout } from '@actions/authAction';

export const metadata: Metadata = {
    title: 'Ivaylo Ivanov Portfolio',
    description: 'Dashboard',
};

export default async function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const result = await verifyAuth();

    if (!result.user) {
        redirect('/');
    }

    return (
        <div className="bg-dark-black">
            <nav className="flex justify-end gap-6 p-4 items-center md:px-20 md:py-10 max-w-[1240px] mx-auto">
                <Link href="/dashboard/addPortfolio" className="secondaryBtn">
                    Add Portfolio
                </Link>
                <Link href="/dashboard/settings" className="secondaryBtn">
                    Settings
                </Link>
                <form action={logout}>
                    <button type="submit" className="secondaryBtn">
                        Logout
                    </button>
                </form>
            </nav>
            <main className="max-w-[1240px] mx-auto">{children}</main>
            <Footer />
        </div>
    );
}
