'use server';

import db from './db';
import { verifyAuth } from './luciaSessions';
import { getVisibleProjectsNumber } from './settings';

export async function createProject(
    projectName: string,
    mainImageUrl: string,
    otherImagesUrls: string[],
    enHeader: string,
    bgHeader: string,
    bgText: string,
    enText: string,
    github: string,
    liveProject: string
) {
    try {
        const user = await verifyAuth();

        if (!user || !user.user?.id) {
            throw new Error('no user');
        }
        // Create messages
        const messages = await db.messages.create({
            data: {
                enHeader,
                bgHeader,
                enText,
                bgText,
            },
        });

        // Create links
        const links = await db.links.create({
            data: {
                github,
                liveProject,
            },
        });

        // Create portfolio with references to messages and links
        const portfolio = await db.projects.create({
            data: {
                projectName: projectName,
                mainImage: mainImageUrl,
                otherImages: otherImagesUrls,
                messagesId: messages.id,
                linksId: links.id,
                userProfileId: user.user?.id,
            },
        });

        return portfolio;
    } catch (error) {
        console.error('Error creating portfolio:', error);
        throw new Error('Failed to create project.');
    }
}

export async function getProjectList() {
    try {
        const projectsNumber = await getVisibleProjectsNumber();
        if (!projectsNumber?.visibleProjects) {
            return undefined;
        }
        const projectList = await db.projects.findMany({
            take: projectsNumber.visibleProjects,
            orderBy: { createdAt: 'desc' },
            select: {
                mainImage: true,
                id: true,
                projectName: true,
            },
        });
        return projectList;
    } catch (error) {
        console.log(error);
    }
}

export async function getProjectById(id: string) {
    return db.projects.findUnique({
        where: {
            id,
        },
        select: {
            links: {
                select: {
                    github: true,
                    liveProject: true,
                },
            },
            mainImage: true,
            otherImages: true,
            messages: {
                select: {
                    bgHeader: true,
                    bgText: true,
                    enHeader: true,
                    enText: true,
                },
            },
        },
    });
}
