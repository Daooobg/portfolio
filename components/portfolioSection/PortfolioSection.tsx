import { getProjectList } from '@/lib/projects';
import PortfolioHeader from './PortfolioHeader';
import PortfolioCard from './PortfolioCard';

export default async function PortfolioSection() {
    const projectList = await getProjectList();

    return (
        <section id="portfolioSection" className="py-10 space-y-10 px-4 sm:space-y-12 sm:py-20 md:mx-20">
            <PortfolioHeader />
            {projectList ? (
                <div className='grid grid-cols-1 gap-y-12 justify-items-center md:grid-cols-2 md:gap-x-10 md:gap-y-6 lg:grid-cols-3 lg:gap-x-6'>
                    {projectList.map((project) => (
                        <PortfolioCard project={project} key={project.id} />
                    ))}
                </div>
            ) : (
                // TODO: Create better component
                <p className="text-green-primary text-center">No data</p>
            )}
        </section>
    );
}
