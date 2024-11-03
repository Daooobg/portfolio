import { useTranslations } from 'next-intl';
import JavaScriptSvg from '/public/svgs/javaScript.svg';
import TypeScriptSvg from '/public/svgs/typeScript.svg';
import HTMLSvg from '/public/svgs/html5-plain.svg';
import CSSSvg from '/public/svgs/css3-plain.svg';
import SASSSvg from '/public/svgs/sass-original.svg';
import MantineSvg from '/public/svgs/brand-mantine.svg';
import TailwindSvg from '/public/svgs/tailwindcss-plain.svg';
import ReactSvg from '/public/svgs/react.svg';
import AngularSvg from '/public/svgs/angularjs-plain.svg';
import VueSvg from '/public/svgs/vuejs-plain.svg';
import NextSvg from '/public/svgs/nextjs-icon-svgrepo-com.svg';
import ExpressSvg from '/public/svgs/express-original.svg';
import MongoSvg from '/public/svgs/mongodb-plain.svg';
import MySQLSvg from '/public/svgs/mysql-plain.svg';
import ReduxSvg from '/public/svgs/redux-original.svg';
import ReactQuerySvg from '/public/svgs/react-query-seeklogo.svg';
import Image from 'next/image';

export default function SkillsSection() {
    const t = useTranslations('HomePage.SkillsSection');
    return (
        <section id="skillsSection" className="py-10 space-y-10 px-4 sm:space-y-12 sm:py-20">
            <div className="text-center max-w-[700px] mx-auto">
                <p className="text-green-primary text-base font-medium leading-normal mb-1 sm:text-[32px] sm:leading-[48px] sm:mb-2">
                    {t('Header')}
                </p>
                <p className="text-light-primary text-base font-normal leading-normal sm:text-lg sm:leading-[27px]">
                    {t('Body')}
                </p>
            </div>
            <div className="overflow-x-scroll grid grid-cols-[215px_300px] gap-y-10 gap-x-4 sm:justify-center sm:grid-cols-[245px_auto] sm:overflow-hidden">
                {/* Programming Languages */}
                <p className="text-green-primary text-base font-bold leading-normal sm:text-lg sm:leading-[27px]">
                    {t('ProgrammingLanguages')}
                </p>
                <div className="text-light-primary text-base font-bold leading-normal grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 sm:text-lg sm:font-medium sm:leading-[27px]">
                    <div className="flex items-center gap-1 w-36">
                        <Image src={JavaScriptSvg} alt="JavaScript icon" />
                        <span>JavaScript</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src={TypeScriptSvg} alt="TypeScript icon" />
                        <span>TypeScript</span>
                    </div>
                </div>
                {/* Web Technologies */}
                <p className="text-green-primary text-base font-bold leading-normal sm:text-lg sm:leading-[27px]">
                    {t('WebTechnologies')}
                </p>
                <div className="text-light-primary text-base font-bold leading-normal grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 sm:text-lg sm:font-medium sm:leading-[27px]">
                    <div className="flex items-center gap-1">
                        <Image src={HTMLSvg} alt="HTML icon" />
                        <span>HTML</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src={CSSSvg} alt="CSS icon" />
                        <span>CSS</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src={SASSSvg} alt="SASS icon" />
                        <span>SASS</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src={MantineSvg} alt="Mantine icon" />
                        <span>Mantine</span>
                    </div>
                    <div className="flex items-center gap-1 col-span-2 lg:col-span-1">
                        <Image src={TailwindSvg} alt="Tailwind icon" />
                        <span>Tailwindcss</span>
                    </div>
                </div>
                <p className="text-green-primary text-base font-bold leading-normal sm:text-lg sm:leading-[27px]">
                    {t('FrontEnd')}
                </p>
                <div className="text-light-primary text-base font-bold leading-normal grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 sm:text-lg sm:font-medium sm:leading-[27px]">
                    <div className="flex items-center gap-1">
                        <Image src={ReactSvg} alt="React icon" />
                        <span>React</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src={NextSvg} alt="VueJs icon" />
                        <span>NextJs</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src={VueSvg} alt="VueJs icon" />
                        <span>Vue</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src={AngularSvg} alt="Angular icon" />
                        <span>Angular</span>
                    </div>
                </div>
                <p className="text-green-primary text-base font-bold leading-normal sm:text-lg sm:leading-[27px]">
                    {t('BackEnd')}
                </p>
                <div className="text-light-primary text-base font-bold leading-normal grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 sm:text-lg sm:font-medium sm:leading-[27px]">
                    <div className="flex items-center gap-1">
                        <Image src={ExpressSvg} alt="ExpressJs icon" />
                        <span>ExpressJs</span>
                    </div>
                </div>
                <p className="text-green-primary text-base font-bold leading-normal sm:text-lg sm:leading-[27px]">
                    {t('Database')}
                </p>
                <div className="text-light-primary text-base font-bold leading-normal grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 sm:text-lg sm:font-medium sm:leading-[27px]">
                    <div className="flex items-center gap-1">
                        <Image src={MongoSvg} alt="MongoDB icon" />
                        <span>MongoDB</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src={MySQLSvg} alt="MySQL icon" />
                        <span>MySQL</span>
                    </div>
                </div>
                <p className="text-green-primary text-base font-bold leading-normal sm:text-lg sm:leading-[27px]">
                    {t('StateManagement')}
                </p>
                <div className="text-light-primary text-base font-bold leading-normal grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 sm:text-lg sm:font-medium sm:leading-[27px]">
                    <div className="flex items-center gap-1">
                        <Image src={ReduxSvg} alt="Redux icon" />
                        <span>Redux</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src={ReactQuerySvg} alt="React query icon" />
                        <span>React Query</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src={ReduxSvg} alt="Redux icon" />
                        <span>RTK</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
