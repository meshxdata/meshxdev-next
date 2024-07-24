import { useState } from "react";
import Airtable from "airtable";
import axios from "axios";
import { EMAIL_STARTER_TEMPLATE_ID } from "../utils/email.consts";

export function useMail() {
  const [isLoading, setIsLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  async function sendEmail(e: any, email: string, setEmail: (email: string) => void) {
    e.preventDefault();
    setShowResponse(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const base = new Airtable({
      apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY as string,
    });

    const table = base.base(process.env.NEXT_PUBLIC_AIRTABLE_BASEID as string).table("waitlist");
    const email_address = formData?.get("email_address") as string;
    setIsLoading(true);
    if (email_address) {
      await table.create({
        email: email_address,
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

    console.log(res);
    setEmail("");
    setIsLoading(false);
  }

  return { isLoading, showResponse, sendEmail };
}