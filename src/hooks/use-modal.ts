import { useClickOut } from "@/hooks/use-click-out";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const useModal = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const modalRef = useRef<null | HTMLDivElement>(null);
  const navigationRef = useRef<null | HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setNavIsOpen(false);
  }, [pathname]);

  const openMenu = () => {
    setNavIsOpen(true);
  };

  const closeMenu = () => {
    if (modalRef.current && navigationRef.current) {
      modalRef.current.classList.add("animate-fade-out");
      navigationRef.current.classList.remove("animate-open-nav");
      navigationRef.current.classList.add("animate-close-nav");
      setTimeout(() => {
        setNavIsOpen(false);
      }, 300);
    }
  };

  useEffect(() => {
    const body = document.body;
    if (navIsOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [navIsOpen]);

  useClickOut(navigationRef, closeMenu);

  return { navIsOpen, openMenu, closeMenu, modalRef, navigationRef };
};
