import type { ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useLoaderData, useNavigation } from "@remix-run/react";
import { useTranslation } from "~/i18n/context";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { createUserSession, login } from "~/utils/session.server";
import { useActionToast } from "~/hooks/use-action-toast";

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  return Response.json({ redirectTo: url.searchParams.get("redirectTo") || "/" });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = formData.get("redirectTo") || "/";

  if (!email || typeof email !== "string") {
    return Response.json({ success: false, error: "Email is required" }, { status: 400 });
  }

  if (!password || typeof password !== "string") {
    return Response.json({ success: false, error: "Password is required" }, { status: 400 });
  }

  const result = await login(email, password);
  
  if (!result.success) {
    return Response.json(result, { status: 401 });
  }

  return createUserSession(result.user.id, redirectTo.toString());
}

export default function Login() {
  const { t } = useTranslation();
  const { redirectTo } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  useActionToast(actionData, t("loginSuccess"), {
    resetOn: [isSubmitting],
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            {t("login")}
          </h2>
        </div>

        <Form method="post" className="mt-8 space-y-6">
          <input type="hidden" name="redirectTo" value={redirectTo || "/"} />
          
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                {t("emailLabel")}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                {t("passwordLabel")}
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "..." : t("loginButton")}
          </Button>
        </Form>
      </div>
    </div>
  );
}