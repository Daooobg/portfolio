'use server';

import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import db from './db';

export async function createUser(email: string, hashPassword: string) {
    try {
        const result = await db.userProfile.create({
            data: {
                email,
                password: hashPassword,
            },
        });
        return result;
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                throw new Error('Email already exists.');
            }
        }
        throw new Error('Something went wrong.');
    }
}

export async function getUserByEmail(email: string) {
    return db.userProfile.findUnique({
        where: {
            email,
        },
        select: {
            email: true,
            id: true,
            password: true,
        },
    });
}