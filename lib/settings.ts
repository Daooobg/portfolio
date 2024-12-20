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

export async function updateSettingsById(id: number, registerPermission: boolean, visibleProjects: number) {
    try {
        const updatedSettings = await db.settings.update({
            where: {
                id,
            },
            data: {
                visibleProjects,
                registerPermission,
            },
            select: {
                registerPermission: true,
                visibleProjects: true,
            },
        });

        return updatedSettings;
    } catch (error) {
        console.log(error);
        throw new Error('Unable to update settings. Please try again later.');
    }
}

export async function getVisibleProjectsNumber() {
    try {
        const visibleProjects = await db.settings.findUnique({
            where: {
                id: 1,
            },
            select: {
                visibleProjects: true,
            },
        });
        if (!visibleProjects) {
            throw new Error('No settings found for visibleProjects');
        }
        return visibleProjects;
    } catch (error) {
        throw error;
    }
}

export async function getRegisterSettings() {
    try {
        const registerPermission = db.settings.findUnique({
            where: {
                id: 1,
            },
            select: {
                registerPermission: true,
            },
        });
        return registerPermission;
    } catch (error) {
        console.error('Error fetching registration permissions:', error);
        throw new Error('Unable to verify registration permissions.');
    }
}
