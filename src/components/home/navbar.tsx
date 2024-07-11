"use client";

import { useScroll } from "@/hooks/use-scroll";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GitHub } from "../icons";

export const NavBar = () => {
  const { isTop } = useScroll();
  const pathname = usePathname();

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between px-8 py-4 text-gray-50 lg:px-20 ${!isTop ? "bg-background/80 backdrop-blur-lg" : "bg-transparent"} transition-all ease-in-out`}
    >
      <Link className="flex items-center space-x-2" href="/">
        <Image
          alt="Logo"
          height={329}
          width={1500}
          className="h-5 w-full md:h-6"
          src="/assets/logo-no-background.png"
        />
        <span className="text-xl md:text-2xl">
          <span>Kilah</span>
          <span className="text-primary">UI</span>
        </span>
      </Link>
      <div className="flex items-center space-x-2">
        <button
          className={`rounded-xl p-1 hover:text-primary ${pathname !== "/" && "order-2 pl-3"}`}
        >
          <GitHub />
        </button>
        {pathname === "/" ? (
          <nav className="flex items-center space-x-4 border-l border-foreground/50 px-4">
            <Link
              href="#components"
              className="rounded-md transition-colors ease-out hover:text-primary/80 md:py-1"
            >
              Components
            </Link>
          </nav>
        ) : (
          <div className="order-1 border-r border-foreground/50 pr-3">
            <input
              placeholder="Search components"
              className="flex items-center rounded-md border border-foreground/50 bg-background px-2 transition-colors focus:border-foreground focus:outline-none max-md:max-w-[150px] max-md:text-sm max-md:placeholder:text-xs"
              type="text"
            />
          </div>
        )}
      </div>
    </header>
  );
};
