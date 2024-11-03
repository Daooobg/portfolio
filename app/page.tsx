import HeroSection from '@components/heroSection/HeroSection';
import SkillsSection from '@components/skillsSection/SkillsSection';

export default function Home() {
    return (
        <>
            <main className='max-w-[1240px] mx-auto'>
                <HeroSection />
                <SkillsSection />
            </main>
        </>
    );
}
