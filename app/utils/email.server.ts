interface EmailJSConfig {
  userId: string;
  serviceId: string;
  templateId: string;
}

const config: EmailJSConfig = {
  userId: process.env.EMAILJS_USER_ID || "",
  serviceId: process.env.EMAILJS_SERVICE_ID || "",
  templateId: process.env.EMAILJS_TEMPLATE_ID || "",
};

interface SendEmailParams {
  to: string;
  subject: string;
  body: string;
}

export async function sendEmail({ to, subject, body }: SendEmailParams) {
  if (!config.userId || !config.serviceId || !config.templateId) {
    console.error("EmailJS configuration is missing");
    return { success: false, error: "Email service not configured" };
  }

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: config.userId,
        service_id: config.serviceId,
        template_id: config.templateId,
        template_params: {
          to_email: to,
          subject,
          message: body,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`EmailJS API error: ${response.statusText}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    };
  }
}

export async function sendWaitlistConfirmation(email: string) {
  return sendEmail({
    to: email,
    subject: "Welcome to ElectricMeter Waitlist",
    body: `
      Thank you for joining the ElectricMeter waitlist!
      
      We're excited to have you on board. We'll keep you updated on our progress
      and let you know as soon as we're ready to launch.
      
      Best regards,
      The ElectricMeter Team
    `,
  });
}

export async function sendAdminNotification(email: string) {
  return sendEmail({
    to: process.env.ADMIN_EMAIL || "",
    subject: "New Waitlist Entry",
    body: `
      A new user has joined the waitlist:
      Email: ${email}
      Time: ${new Date().toLocaleString()}
      
      View the admin dashboard to manage waitlist entries.
    `,
  });
}