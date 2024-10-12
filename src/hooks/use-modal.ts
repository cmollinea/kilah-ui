import { useClickOut } from "@/hooks/use-click-out";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const useModal = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [makeAnimation, setMakeAnimation] = useState(false);
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
    setMakeAnimation(true);
  };

  useEffect(() => {
    if (makeAnimation) {
      const timeout = setTimeout(() => {
        setNavIsOpen(false);
        setMakeAnimation(false);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [makeAnimation]);

  useEffect(() => {
    const body = document.body;
    if (navIsOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [navIsOpen]);

  useClickOut(navigationRef, closeMenu);

  return { navIsOpen, openMenu, closeMenu, makeAnimation, navigationRef };
};
