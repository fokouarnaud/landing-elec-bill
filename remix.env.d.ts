/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

declare module "*.css" {
  const content: string;
  export default content;
}

interface Window {
  ENV: {
    NODE_ENV: "development" | "production" | "test";
  };
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    DATABASE_URL: string;
    SESSION_SECRET: string;
    ADMIN_EMAIL: string;
    ADMIN_PASSWORD: string;
    EMAILJS_USER_ID: string;
    EMAILJS_SERVICE_ID: string;
    EMAILJS_TEMPLATE_ID: string;
  }
}