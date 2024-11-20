import ArrowRight from '@/ui/design/ArrowRight';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

import PortfolioCarousel from './PortfolioCarousel';

type ProjectType = {
    project: {
        messages: {
            enHeader: string;
            enText: string;
            bgHeader: string;
            bgText: string;
        } | null;
        links: {
            liveProject: string;
            github: string;
        } | null;
        mainImage: string;
        otherImages: string[];
    };
};

export default function PortfolioDetails({ project }: ProjectType) {
    // useLocale hook to get the current locale (language)
    const locale = useLocale();
    // translations hook
    const t = useTranslations('PortfolioDetails');

    return (
        <section className="flex flex-col items-center gap-10 mx-4 my-10">
            {/* PortfolioCarousel component */}
            <PortfolioCarousel slides={[project.mainImage, ...project.otherImages]} />
            <div className="text-light-primary max-w-[704px]">
                <h1 className="text-[32px] font-bold leading-[48px] mb-2">
                    {locale === 'bg' ? project.messages?.bgHeader : project.messages?.enHeader}
                </h1>
                <h2 className="text-lg font-normal leading-[27px]">
                    {locale === 'bg' ? project.messages?.bgText : project.messages?.enText}
                </h2>
            </div>
            {/* Links */}
            <div className="grid grid-cols-1 gap-6 w-full sm:grid-cols-2 lg:grid-cols-[290px_300px_auto] justify-center">
                <Link
                    href="/#contactSection"
                    className="primaryBtn sm:w-[290px] sm:justify-self-end lg:justify-self-center"
                >
                    <ArrowRight className="fill-dark-black" />
                    {t('Contact')}
                </Link>
                {project.links?.github && (
                    <a
                        target="_blank"
                        href={project.links.github}
                        className="text-green-primary  sm:text-[22px] sm:h-[58px] relative text-base font-medium sm:max-w-[300px] px-[22px] lg:justify-self-center h-11 rounded-xl border-2 border-green-primary justify-center items-center gap-2.5 inline-flex hover:text-dark-black hover:bg-green-primary transform duration-200 transition ease-out"
                    >
                        {t('Git')}
                    </a>
                )}
                {project.links?.liveProject && (
                    <a
                        target="_blank"
                        href={project.links.liveProject}
                        className="text-green-primary text-base font-medium sm:max-w-[300px] sm:text-[22px] sm:h-[58px] sm:justify-self-end lg:justify-self-center px-[22px] h-11 rounded-xl border-2 border-green-primary justify-center items-center gap-2.5 inline-flex hover:text-dark-black hover:bg-green-primary transform duration-200 transition ease-out"
                    >
                        {t('Live')}
                    </a>
                )}
            </div>
        </section>
    );
}
