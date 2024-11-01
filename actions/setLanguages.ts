'use server';
import { cookies } from 'next/headers';

export default async function setLanguage(value: string) {
    (await cookies()).set('lang', value);
}
