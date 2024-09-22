import { useEffect, useState } from "react";

export const useScroll = (scrolled?: number) => {
  const [scrolledPx, setScrolledPx] = useState(0);
  const [showNavBar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPx(window.scrollY);
      setShowNavbar(window.scrollY < scrolledPx);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolledPx]);

  return { showNavBar, scrolledPx };
};
