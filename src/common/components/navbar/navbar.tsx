import netflix_logo from "@/assets/netflix-logo.png";
import { Link } from "react-router";
import { CarouselNav } from "./carousel-nav";
import { Bell, Download, Tv } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex flex-col md:flex-row gap-3 px-6 py-6 md:h-20 md:px-20">
      <nav className="flex w-full items-center justify-between">
        <Link to={"/"}>
          <img
            src={netflix_logo}
            alt="this is a clone of netflix"
            className="-ml-1 w-24 h-14 object-cover"
          />
        </Link>

        <div className="flex items-center justify-center gap-8">
          <Tv />
          <Download />
          <Bell />
        </div>
      </nav>

      <CarouselNav />
    </header>
  );
}
