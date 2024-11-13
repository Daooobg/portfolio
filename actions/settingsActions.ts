'use server';

import { getSettingsById } from '@/lib/settings';

export async function getSettings() {
    return await getSettingsById(1);
}
