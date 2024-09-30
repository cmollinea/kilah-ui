import { useModal } from "@/hooks/use-modal";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import { LinksColection } from "./links-collection";

export const NavigationMenu = () => {
  const { openMenu, closeMenu, navIsOpen, navigationRef, modalRef } =
    useModal();

  return (
    <div className="relative min-[1100px]:hidden">
      <button
        onClick={openMenu}
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
      {navIsOpen
        ? createPortal(
            <div
              role="modal"
              ref={modalRef}
              className="fixed bottom-0 left-0 right-0 top-0 z-[999999] flex animate-fade-in flex-col place-items-end bg-card-background/10 opacity-0 backdrop-blur-sm"
            >
              <div
                ref={navigationRef}
                className="relative z-[99] flex w-72 flex-grow animate-open-nav flex-col space-y-2 rounded-md border-l border-accent/10 bg-card-background p-4 py-20"
              >
                <div className="absolute top-6 flex w-full items-center justify-between pl-4 pr-6">
                  <Link
                    className="flex w-fit select-none items-center space-x-2"
                    href="/"
                  >
                    <Image
                      alt="Logo"
                      height={24}
                      width={28}
                      className="flex-0 h-5 w-full md:h-6"
                      src="/assets/logo-no-background.png"
                    />
                    <span className="text-xl md:text-2xl">
                      <span>Kilah</span>
                      <span className="text-primary">UI</span>
                    </span>
                  </Link>
                  <button
                    className="transition hover:text-danger"
                    onClick={closeMenu}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 10l4 4m0 -4l-4 4" />
                      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                    </svg>{" "}
                  </button>
                </div>
                <LinksColection linkStyles="p-2 hover:bg-accent/5 transition ease-in-out rounded-r-md  border-l-4 border-l-transparent hover:border-l-primary text-lg font-bold flex items-center gap-1  hover:text-inherit" />
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
};
