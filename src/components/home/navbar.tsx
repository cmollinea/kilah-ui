"use client";

import { useScroll } from "@/hooks/use-scroll";
import Image from "next/image";
import Link from "next/link";
import { GitHub } from "../icons";

export const NavBar = () => {
  const { isTop } = useScroll();

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between px-8 py-4 text-gray-50 md:px-20 ${!isTop ? "bg-background/80 backdrop-blur-lg" : "bg-transparent"} transition-all ease-in-out`}
    >
      <Link href="/">
        <Image
          alt="Logo"
          height={329}
          width={1500}
          className="h-5 w-full md:h-6"
          src="/assets/logo-no-background.png"
        />
      </Link>
      <div className="flex items-center space-x-2">
        <button className="rounded-xl p-1 text-primary">
          <GitHub />
        </button>
        <nav className="flex items-center space-x-4 border-l border-primary/50 px-4 max-lg:hidden">
          <Link
            href="#components"
            className="rounded-md bg-primary p-2 px-6 text-gray-950 transition-colors ease-out hover:bg-primary/80"
          >
            Components
          </Link>
        </nav>
        <button className="rounded-xl p-1 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6h16" />
            <path d="M7 12h13" />
            <path d="M10 18h10" />
          </svg>
        </button>
      </div>
    </header>
  );
};
