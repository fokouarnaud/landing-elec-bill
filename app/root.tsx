import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import { getUser } from "~/utils/session.server";
import { I18nProvider } from "~/i18n/context";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { Toaster } from "~/components/ui/toaster";
import { initializeAdminUser } from "~/utils/init-admin.server";
import "./tailwind.css";

export const links: LinksFunction = () => [];

export async function loader({ request }: LoaderFunctionArgs) {
  // Initialize admin user on app start
  await initializeAdminUser();
  
  return Response.json({
    user: await getUser(request),
  });
}

export default function App() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <I18nProvider>
          <div className="flex min-h-screen flex-col">
            <Header user={user} />
            <main className="flex-1">
              <Outlet />
            </main>
            <Footer />
          </div>
          <Toaster />
        </I18nProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// Error boundary
export function ErrorBoundary() {
  const error = useRouteError();
  
  let errorMessage = "An unexpected error occurred.";
  let statusText = "Error";
  let status = 500;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data;
    statusText = error.statusText;
    status = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
          <div className="rounded-lg bg-white p-8 text-center shadow-xl">
            <h1 className="mb-4 text-2xl font-bold text-red-600">
              {statusText} {status}
            </h1>
            <p className="text-gray-600">
              {errorMessage}
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Please try refreshing the page or contact support if the problem
              persists.
            </p>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
