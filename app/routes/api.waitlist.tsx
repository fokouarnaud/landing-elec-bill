import type { ActionFunctionArgs } from "@remix-run/node";
import { addToWaitlist } from "~/utils/waitlist.server";
import { z } from "zod";

const waitlistSchema = z.object({
  email: z.string().email("Invalid email address"),
});

interface WaitlistResponse {
  success: boolean;
  error?: string;
  entry?: {
    id: string;
    email: string;
    status: string;
    createdAt: Date;
  };
}

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return Response.json(
      { success: false, error: "Method not allowed" },
      { status: 405 }
    );
  }

  try {
    const formData = await request.formData();
    const email = formData.get("email");

    const validationResult = waitlistSchema.safeParse({ email });
    if (!validationResult.success) {
      return Response.json(
        {
          success: false,
          error: validationResult.error.errors[0].message,
        },
        { status: 400 }
      );
    }

    const result = await addToWaitlist(validationResult.data.email);
    
    if (!result.success) {
      return Response.json(
        {
          success: false,
          error: result.error,
        },
        { status: 400 }
      );
    }

    return Response.json({
      success: true,
      entry: result.entry,
    });
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return Response.json(
      {
        success: false,
        error: "An error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}

// No loader needed as this is an API route
export async function loader() {
  return Response.json(
    { success: false, error: "Method not allowed" },
    { status: 405 }
  );
}