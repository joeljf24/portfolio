import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const msg = {
      to: 'u.programming.jf@gmail.com',
      from: email,
      subject: `New message from ${name}`,
      text: message,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}