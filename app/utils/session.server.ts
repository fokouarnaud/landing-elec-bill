import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { verifyLogin } from "./user";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "electric_meter_session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    httpOnly: true,
  },
});

export async function createUserSession(
  userId: string,
  redirectTo: string
) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

export async function getUserSession(request: Request) {
  return storage.getSession(request.headers.get("Cookie"));
}

export async function getUserId(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") return null;
  return userId;
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([
      ["redirectTo", redirectTo],
    ]);
    throw redirect(`/login?${searchParams}`);
  }
  return userId;
}

export async function requireAdminUser(request: Request) {
  const userId = await requireUserId(request);
  const userResult = await getUserById(userId);
  
  if (!userResult.success || !userResult.user || !userResult.user.isAdmin) {
    throw redirect("/");
  }
  
  return userResult.user;
}

export async function getUser(request: Request) {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }

  try {
    const userResult = await getUserById(userId);
    return userResult.success && userResult.user ? userResult.user : null;
  } catch {
    throw logout(request);
  }
}

export async function logout(request: Request) {
  const session = await getUserSession(request);
  return redirect("/", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}

export interface LoginSuccess {
  success: true;
  user: {
    id: string;
    email: string;
    isAdmin: boolean;
  };
}

export interface LoginError {
  success: false;
  error: string;
}

export type LoginResult = LoginSuccess | LoginError;

export async function login(email: string, password: string): Promise<LoginResult> {
  const result = await verifyLogin(email, password);
  if (!result.success || !result.user) {
    return { success: false, error: result.error || "Invalid login" };
  }
  return { success: true, user: result.user };
}

// Import at the top to avoid circular dependency
import { getUserById } from "./user";