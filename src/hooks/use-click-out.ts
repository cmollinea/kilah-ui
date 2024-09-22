import { RefObject, useEffect } from "react";

export const useClickOut = (
  ref: RefObject<HTMLElement>,
  handleClickOut: () => void,
) => {
  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handleClickOut();
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [ref, handleClickOut]);
};
