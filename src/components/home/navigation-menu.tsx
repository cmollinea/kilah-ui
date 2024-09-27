import { useState } from "react";
import { LinksColection } from "./links-collection";

export const NavigationMenu = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleClick = () => {
    setNavIsOpen(!navIsOpen);
  };

  return (
    <div className="relative min-[1050px]:hidden">
      <button
        onClick={handleClick}
        className="rounded-md p-1 transition hover:bg-accent/5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 6h10" />
          <path d="M4 12h16" />
          <path d="M7 12h13" />
          <path d="M7 18h10" />
        </svg>
      </button>
      {navIsOpen ? (
        <div className="absolute -bottom-44 right-0 z-50 flex w-72 animate-fade-in flex-col space-y-2 rounded-md bg-card-background p-4">
          <LinksColection linkStyles="p-2 hover:bg-accent/5 transition ease-in-out rounded-md" />
        </div>
      ) : null}
    </div>
  );
};
