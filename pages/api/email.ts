import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    if (req.headers['content-type'] === 'application/json') {
      const body = req.body;
      const message = body.message;
      await sendEmail(message);
      return res.status(200).json({ message: 'email sent' });
    }
    return res.status(400).send('Bad Request');
  } else {
    return res.status(405).send('Method Not Allowed');
  }
};

async function sendEmail(message: any) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

  try {
    const response = await sgMail.send(message);
    console.log('Email sent', response);
  } catch (error) {
    console.error('Error sending email', error);
  }
}

export default handler;