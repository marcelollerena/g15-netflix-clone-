import { useUserStore } from "@/common/store/user-store";
import { Navigate, Outlet } from "react-router";

export function ProtectedRoute() {
  const { token } = useUserStore();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
