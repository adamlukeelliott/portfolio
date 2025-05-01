import { EmailTemplate } from '@/app/modules/EmailTemplate';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { message, email } = await req.json();

    console.log(email + ": " + message);

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['adam.elliott443@gmail.com'],
      subject: "Hello world",
      react: EmailTemplate({ email: email, message: message}) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}