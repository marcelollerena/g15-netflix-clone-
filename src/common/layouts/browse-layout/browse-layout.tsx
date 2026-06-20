import Navbar from "@/common/components/navbar/navbar";
import { Outlet } from "react-router";

export function BrowseLayout() {
  return (
    <div className="relative h-screen text-neutral-300 bg-neutral-900">
      <Navbar />
      <Outlet />
    </div>
  );
}
