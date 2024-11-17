import sendEmail from '@actions/sendEmail';
import ContactSection from '@components/contactSection/ContactSection';
import HeroSection from '@components/heroSection/HeroSection';
import PortfolioSection from '@components/portfolioSection/PortfolioSection';
import SkillsSection from '@components/skillsSection/SkillsSection';

export default function Home() {
    return (
        <>
            <main className="max-w-[1240px] mx-auto">
                <HeroSection />
                <PortfolioSection />
                <SkillsSection />
                <ContactSection action={sendEmail} />
            </main>
        </>
    );
}
