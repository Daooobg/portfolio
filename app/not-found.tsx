import Image from 'next/image';
import { useTranslations } from 'next-intl';

import RocketSvg from '/public/svgs/rocket-outline.svg';
import Link from 'next/link';

export default function NotFound() {
    const t = useTranslations('NotFound');
    return (
        <main>
            <section className="flex flex-col items-center my-10 mx-4 gap-10">
                <div>
                    <Image src={RocketSvg} alt="Rocket icon" />
                </div>
                <h1 className="text-light-primary text-xl leading-6 text-center sm:text-[32px] font-bold sm:leading-[48px]">
                    {t('Header')}
                </h1>
                <h2 className="text-light-primary text-md leading-6 text-center sm:text-lg font-normal sm:leading-[27px]">
                    {t('Body')}
                </h2>
                <Link href="/" className="primaryBtn max-w-[360px] text-center">
                    {t('LinkText')}
                </Link>
            </section>
        </main>
    );
}
