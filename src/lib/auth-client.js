import { jwtClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL, // Ensure this matches http://localhost:3000 in development
  plugins: [jwtClient()],
});

// Export the destructured methods directly from the configured instance
export const { signIn, signUp, useSession } = authClient;
