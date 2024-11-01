import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('HomePage');
    return (
        <>
            <main>
                <h1>{t('HeroSection.hello')}</h1>
            </main>
            <footer></footer>
        </>
    );
}
