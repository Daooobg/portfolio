import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    try {
        const transport = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: parseInt(process.env.MAIL_PORT || '25'),
            secure: process.env.MAIL_SECURE === 'true',
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            },
        } as SMTPTransport.Options);
        const mailOptions = {
            from: 'no-reply@ivaylo-ivanov.dev',
            to: 'info@ivaylo-ivanov.dev',
            subject: 'Message from contact form',
            // TODO create better text message or html
            text: `${name} <${email}>,
            message: ${message}`,
        };

        await transport.sendMail(mailOptions);
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
