import { useModal } from "@/hooks/use-modal";
import { LinksColection } from "./links-collection";

export const NavigationMenu = () => {
  const { openMenu, closeMenu, navIsOpen, navigationRef, modalRef } =
    useModal();

  return (
    <div className="relative min-[1050px]:hidden">
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
      {navIsOpen ? (
        <div
          role="modal"
          ref={modalRef}
          className="fixed bottom-0 left-0 right-0 top-0 flex animate-fade-in flex-col place-items-end bg-card-background/10 opacity-0 backdrop-blur-sm"
        >
          <div
            ref={navigationRef}
            className="animate-open-nav relative z-[99] flex w-72 flex-grow flex-col space-y-2 rounded-md border-l border-accent/10 bg-card-background p-4"
          >
            <button className="absolute right-0 top-0" onClick={closeMenu}>
              Close
            </button>
            <LinksColection linkStyles="p-2 hover:bg-accent/5 transition ease-in-out rounded-r-md  border-l-4 border-l-transparent hover:border-l-primary text-lg font-bold flex items-center gap-1  hover:text-inherit" />
          </div>
        </div>
      ) : null}
    </div>
  );
};
