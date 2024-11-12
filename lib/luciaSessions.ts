'use server';
import { Lucia } from 'lucia';
import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import db from './db';
import { cookies } from 'next/headers';

const adapter = new PrismaAdapter(db.session, db.userProfile);

const lucia = new Lucia(adapter, {
    sessionCookie: {
        expires: false,
        attributes: {
            secure: process.env.NODE_ENV === 'production',
        },
    },
});

export async function createAuthSession(userId: string) {
    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    (await cookies()).set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
}