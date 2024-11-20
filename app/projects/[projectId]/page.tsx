import { getProjectById } from '@/lib/projects';
import PortfolioDetails from '@components/portfolioDetails/PortfolioDetails';
import { notFound } from 'next/navigation';

export default async function ProjectDetailsPage({ params }: { params: Promise<{ projectId: string }> }) {
    const { projectId } = await params;
    
    if (!projectId) {
        notFound();
    }

    const project = await getProjectById(projectId);

    // If the project is not found, return a 404 page
    if (!project) {
        notFound();
    }

    return (
        <main className="max-w-[1240px] mx-auto">
            <PortfolioDetails project={project} />
        </main>
    );
}
