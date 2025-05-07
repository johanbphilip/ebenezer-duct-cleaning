import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  name,
  email,
  phone,
  city,
  servicesNeeded,
  notes,
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: `johan@westneyheightsmedical.com`,
      to: [process.env.EMAIL_TO],
      subject: `New Quote Request from ${name}`,
      react: EmailTemplate({ name, email, phone, city, servicesNeeded, notes }),
    });

    if (error) {
      console.error('Error sending email:', error);
      return false;
    }

    console.log('Email sent successfully with ID:', data?.id);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}
