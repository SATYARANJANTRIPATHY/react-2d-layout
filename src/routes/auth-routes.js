import { Profile } from "../pages/Profile";
import { Home } from "../pages/Home";

export const authRoutes = [
  { path: "/home", component: <Home /> },
  { path: "/profile", component: <Profile /> },
];
