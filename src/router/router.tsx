import { createBrowserRouter } from "react-router";

import { SignIn } from "@/app/auth/sign-in";
import { ProtectedRoute } from "@/common/security/protected-route/protected-route";
import { BrowseLayout } from "@/common/layouts/browse-layout/browse-layout";
import { Home } from "@/app/browse/home/home";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: SignIn,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        Component: BrowseLayout,
        children: [
          {
            index: true,
            Component: Home,
          },
        ],
      },
    ],
  },
]);
