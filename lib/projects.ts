'use server';

import db from './db';
import { verifyAuth } from './luciaSessions';

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
