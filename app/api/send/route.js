import { EmailTemplate, EmailTemplate2 } from '@/components/email-template.jsx';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const jsonBody = await req.json();
    const { name, email, message } = jsonBody;
    try {
        const data = await resend.emails.send([{
            from: `${name} <hello@taherchabra.tech>`,
            to: ['taher.chabra2303@gmail.com'],
            reply_to: email,
            subject: `New message from ${name}`,
            react: EmailTemplate({ messageData: message, name: name, email: email }),
        },
        {
            from: `Taher Chabra <taher.chabra2303@gmail.com>`,
            to: [`${email}`],
            subject: `Reply from Taher Chabra`,
            react: EmailTemplate2({ name: name}),
        }]
        );
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
