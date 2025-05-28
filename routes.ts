// an array of routes that are accessible to the public, these rotues do not require authentication

export const publicRoutes = ["/", "/auth/new-verification"];
// an array of routes that are used for authentication, these routes will redirect logged in users to the settings
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

//the prefix for the API routes
export const apiAuthPrefix = "/api/auth";

//the default redirect part after logging in
export const DEFAULT_LOGIN_REDIRECT = "/settings";
