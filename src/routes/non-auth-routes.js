import { SignIn } from "../pages/auth/SignIn";
import { SignUp } from "../pages/auth/SignUp";

// import SignUp from "../pages/auth/SignUp";
export const nonAuthRoutes = [
  { path: "/sign-in", component: <SignIn /> },
  { path: "/sign-up", component: <SignUp /> },
];
