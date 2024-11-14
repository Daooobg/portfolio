'use server';

import { getSettingsById, updateSettingsById } from '@/lib/settings';

export async function getSettings() {
    return await getSettingsById(1);
}

export async function updateSettings(formState: unknown, formData: FormData) {
    const form = Object.fromEntries(formData.entries());

    const activeRegister = form['activeRegister'] === 'on' ? true : false; // Checkbox value
    const visibility = parseInt(form['visibility'] as string); // Parse visibility

    try {
        await updateSettingsById(2, activeRegister, visibility);
    } catch (error) {
        console.log(error);
        return { errors: ['Problem'] };
    }

    return {
        activeRegister,
        visibility,
        errors: [],
    };
}
