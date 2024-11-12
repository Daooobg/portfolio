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

export async function verifyAuth() {
    const sessionCookie = (await cookies()).get(lucia.sessionCookieName);

    if (!sessionCookie) {
        return {
            user: null,
            session: null,
        };
    }

    const sessionId = sessionCookie.value;

    if (!sessionId) {
        return {
            user: null,
            session: null,
        };
    }

    const result = await lucia.validateSession(sessionId);

    try {
        if (result.session && result.session.fresh) {
            const freshSessionCookie = lucia.createSessionCookie(result.session.id);
            (await cookies()).set(freshSessionCookie.name, freshSessionCookie.value, freshSessionCookie.attributes);
        }
        if (!result.session) {
            const blankSessionCookie = lucia.createBlankSessionCookie();
            (await cookies()).set(blankSessionCookie.name, blankSessionCookie.value, blankSessionCookie.attributes);
        }
    } catch {}

    return result;
}

export async function destroySession() {
    const { session } = await verifyAuth();

    if (!session) {
        throw new Error ('Unauthorized!')
    }

    await lucia.invalidateSession(session.id);

    const sessionCookie = lucia.createBlankSessionCookie();
    (await cookies()).set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

    return { success: true, message: 'Session destroyed successfully.' };
}