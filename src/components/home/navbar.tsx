"use client";

import { useScroll } from "@/hooks/use-scroll";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GitHub } from "../icons";
import { SearchForm } from "./search-form";

export const NavBar = () => {
  const { isTop } = useScroll();
  const pathname = usePathname();

  return (
    <header
      className={`sticky left-0 right-0 top-0 z-50 flex items-center justify-between border-b px-8 py-4 text-gray-50 lg:px-20 ${!isTop ? "border-accent/5 bg-background/80 backdrop-blur-lg" : "border-transparent bg-transparent"} transition-all ease-in-out`}
    >
      <Link className="flex select-none items-center space-x-2" href="/">
        <Image
          alt="Logo"
          height={24}
          width={28}
          className="h-5 w-full md:h-6"
          src="/assets/logo-no-background.png"
        />
        <span className="text-xl md:text-2xl">
          <span>Kilah</span>
          <span className="text-primary">UI</span>
        </span>
      </Link>
      <div className="flex items-center space-x-2">
        <SearchForm />
        <button className="rounded-xl p-1 hover:text-primary">
          <GitHub />
        </button>
      </div>
    </header>
  );
};
