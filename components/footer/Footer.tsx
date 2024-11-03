import Image from 'next/image';
import { useTranslations } from 'next-intl';

import CallSvg from '/public/svgs/call_log.svg';
import MailSvg from '/public/svgs/mail.svg';
import DistanceSvg from '/public/svgs/distance.svg';
import LinkedinSvg from '/public/svgs/linkedin.svg';
import GithubSvg from '/public/svgs/github.svg';

export default function Footer() {
    const now = new Date();
    const year = now.getFullYear();
    const t = useTranslations('Footer');
    return (
        <footer className="py-10 px-4 sm:px-6 lg:px-10">
            <div className='max-w-[1280px] space-y-10 mx-auto'>
                <div className="h-px bg-divider"></div>
                <section className="flex flex-col gap-10 text-light-primary sm:grid sm:grid-cols-3 sm:mx-2 lg:mx-6 lg:gap-12">
                    <div className="space-y-4">
                        <h2 className="text-base font-medium sm:text-lg">{t('PersonalPortfolio')}</h2>
                        <p className="text-sm font-normal capitalize text-footerText">{t('PortfolioText')}</p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-base font-medium sm:text-lg">{t('Contacts')}</h2>
                        <address className="space-y-4">
                            <div className="text-sm font-normal text-footerText flex items-center gap-1">
                                <Image src={CallSvg} alt="Call image" />
                                <span itemProp="telephone">
                                    <a href="tel:+447403020223">+44-74-0302-0223</a>
                                </span>
                            </div>
                            <div className="text-sm font-normal text-footerText flex items-center gap-1">
                                <Image src={MailSvg} alt="Email image" />
                                <span itemProp="telephone">
                                    <a href="mailto:+info@ivaylo-ivanov.dev">info@ivaylo-ivanov.dev</a>
                                </span>
                            </div>
                            <div className="text-sm font-normal text-footerText flex items-center gap-1">
                                <Image src={DistanceSvg} alt="Distance image" />
                                <p>{t('Address')}</p>
                            </div>
                        </address>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-base font-medium sm:text-lg">{t('LetsConnect')}</h2>
                        <ul className="flex items-center gap-2">
                            <li>
                                <a href="https://www.linkedin.com/in/ivaylo-ivanov-4907baa8/" target="_blank">
                                    <Image src={LinkedinSvg} alt="Linkedin" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Daooobg" target="_blank">
                                    <Image src={GithubSvg} alt="Github" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <div className="h-px bg-divider"></div>
                <p className="text-footerText text-sm font-normal leading-tight text-center">
                    {`Personal Portfolio - Ivaylo Ivanov ${year}. All rights reserved.`}
                </p>
            </div>
        </footer>
    );
}
