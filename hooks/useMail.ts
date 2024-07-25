import { useState } from "react";
import Airtable from "airtable";
import axios from "axios";
import { EMAIL_STARTER_TEMPLATE_ID } from "../utils/email.consts";

export function useMail() {
  const [isLoading, setIsLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  async function sendEmail(email: string, setEmail: (email: string) => void) {
    setShowResponse(true);
    const base = new Airtable({
      apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY as string,
    });

    const table = base.base(process.env.NEXT_PUBLIC_AIRTABLE_BASEID as string).table("waitlist");

    setIsLoading(true);
    if (email) {
      await table.create({
        email: email,
        sentDate: new Date().toISOString(),
      });
    }

    // Email details
    const message = {
      to: email,
      from: process.env.NEXT_PUBLIC_EMAIL_SENDER, 
      templateId: EMAIL_STARTER_TEMPLATE_ID, 
      dynamicTemplateData: {},
    };

    const res = await axios({
      method: "post",
      url: "/api/email",
      data: {
        message,
      },
    });
    
    setEmail("");
    setIsLoading(false);
  }

  return { isLoading, showResponse, sendEmail };
}