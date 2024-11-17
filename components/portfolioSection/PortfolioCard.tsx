'use client';

import ArrowRight from '@/ui/design/ArrowRight';
import { CldImage } from 'next-cloudinary';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function PortfolioCard({
    project,
}: {
    project: {
        id: string;
        projectName: string;
        mainImage: string;
    };
}) {
    const t = useTranslations('HomePage.PortfolioSection');
    return (
        <div className="space-y-4 text-base leading-normal sm:text-lg sm:leading-[27px]">
            <CldImage
                alt={project.projectName}
                src={project.mainImage}
                width={328}
                height={328}
                crop="fill"
                tint="40:black"
                sizes="100vw"
                quality={100}
            />
            <p className="text-light-primary font-bold ">{project.projectName}</p>
            <div>
                {/* TODO: add href to details page */}
                <Link href="#" className="text-green-primary font-medium flex gap-2 items-center">
                    <span>{t('LinkText')}</span>
                    <ArrowRight className="fill-green-primary" />
                </Link>
            </div>
        </div>
    );
}