'use server';
export default async function sendEmail(formState: { errors: string[] }, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const errors = [];
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    if (!name || name.trim().length === 0) {
        errors.push('Please enter your name.');
    } else if (!nameRegex.test(name)) {
        errors.push('Name contains invalid characters. Only letters, spaces, hyphens, and apostrophes are allowed.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || email.trim().length === 0) {
        errors.push('Please enter your email address.');
    } else if (!emailRegex.test(email)) {
        errors.push('Please enter a valid email address.');
    }

    if (!message || name.trim().length < 6) {
        errors.push('Your message must be at least 6 characters long.');
    }

    if (errors.length > 0) {
        return { errors };
    }

    try {
        const res = await fetch(`${process.env.URL}/api/email`, {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                message,
            }),
            headers: {
                'content-type': 'application/json',
            },
        });
        if (!res.ok) {
            return { errors: ['There was an issue sending your message. Please try again later.'] };
        }
    } catch (error) {
        console.error('Error sending email:', error);
        return { errors: ['There was an issue sending your message. Please try again later.'] };
    }

    return { success: true, errors };
}
