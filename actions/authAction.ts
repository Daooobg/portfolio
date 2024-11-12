'use server';

import { hashUserPassword, verifyPassword } from '@/lib/hash';
import { createAuthSession } from '@/lib/luciaSessions';
import { createUser, getUserByEmail } from '@/lib/user';
import { redirect } from 'next/navigation';

async function register(formState: unknown, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const errors = [];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || email.trim().length === 0) {
        errors.push('Please enter your email address.');
    } else if (!emailRegex.test(email)) {
        errors.push('Please enter a valid email address.');
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password || password.trim().length === 0) {
        errors.push('Please enter your name.');
    } else if (!passwordRegex.test(password)) {
        errors.push(
            'Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character (e.g., @$!%*?&).'
        );
    }

    if (errors.length > 0) {
        return { errors: errors };
    }

    const hashedPassword = hashUserPassword(password);
    try {
        const user = await createUser(email, hashedPassword);
        await createAuthSession(user.id);
    } catch (error) {
        if (error instanceof Error) {
            return { errors: [error.message] };
        }
        return { errors: ['Something went wrong'] };
    }
    redirect('/dashboard');
}

async function login(prevState: { errors: string[] }, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const errors = [];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || email.trim().length === 0) {
        errors.push('Please enter your email address.');
    } else if (!emailRegex.test(email)) {
        errors.push('Please enter a valid email address.');
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password || password.trim().length === 0) {
        errors.push('Please enter your name.');
    } else if (!passwordRegex.test(password)) {
        errors.push(
            'Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character (e.g., @$!%*?&).'
        );
    }

    if (errors.length > 0) {
        return { errors: errors };
    }

    const existingUser = await getUserByEmail(email);

    if (!existingUser) {
        return { errors: ['Email or password is not valid'] };
    }

    const isValidPassword = verifyPassword(existingUser.password, password);

    if (!isValidPassword) {
        return { errors: ['Email or password is not valid'] };
    }

    await createAuthSession(existingUser.id);
    redirect('/dashboard');
}

export default async function auth(mode: string, formState: { errors: string[] }, formData: FormData) {
    if (mode === 'register') {
        return register(formState, formData);
    }
    return login(formState, formData);
}
