import { z } from 'zod';

const envVariables = z.object({
  // Basic URL
  NEXT_PUBLIC_URL: z.string(),
  NEXT_PUBLIC_DOMAIN: z.string(),
  NEXT_PUBLIC_SCHEME: z.string(),
  // Database URL
  DATABASE_URL: z.string(),

  // Auth Secret
  AUTH_SECRET: z.string(),

  // Github Auth Credentials
  AUTH_GITHUB_ID: z.string(),
  AUTH_GITHUB_SECRET: z.string(),

  // Google Auth Credentials
  AUTH_GOOGLE_ID: z.string(),
  AUTH_GOOGLE_SECRET: z.string()
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
