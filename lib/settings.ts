'use server';

import db from './db';

export async function getSettingsById(id: number) {
    try {
        const result = await db.settings.findUnique({
            where: { id },
            select: {
                registerPermission: true,
                visibleProjects: true,
            },
        });

        if (!result) {
            throw new Error(`Settings with id ${id} not found`);
        }

        return result;
    } catch (error) {
        console.error(`Failed to fetch settings for id ${id}:`, error);
        throw error;
    }
}
