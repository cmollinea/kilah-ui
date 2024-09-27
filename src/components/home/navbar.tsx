"use client";

import { useScroll } from "@/hooks/use-scroll";
import Image from "next/image";
import Link from "next/link";
import { GitHub } from "../icons";
import { LinksCollectionContainer } from "./links-collection";
import { NavigationMenu } from "./navigation-menu";
import { SearchForm } from "./search-form";

export const NavBar = () => {
  const { showNavBar, scrolledPx } = useScroll();

  return (
    <header
      className={`sticky left-0 right-0 top-0 flex items-center justify-between border-b px-8 py-4 text-gray-50 lg:px-20 ${scrolledPx >= 20 ? "border-accent/5 bg-background/80 backdrop-blur-lg" : "border-transparent bg-transparent"} ${(showNavBar && scrolledPx <= 10) || (showNavBar && scrolledPx >= 10) ? "z-50" : "-z-20 opacity-0"} transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center gap-10">
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
        <LinksCollectionContainer />
      </div>
      <div className="flex items-center space-x-2">
        <SearchForm />
        <a
          target="_blank"
          href="https://github.com/cmollinea/kilah-ui"
          rel="noopener noreferrer"
          className="rounded-xl p-1 hover:text-primary"
        >
          <GitHub />
        </a>
        <NavigationMenu />
      </div>
    </header>
  );
};
