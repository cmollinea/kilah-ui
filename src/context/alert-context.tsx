"use client";
import { createContext, useEffect, useRef, useState } from "react";
import { AlertContext } from "../../types";

export const alertContext = createContext<null | AlertContext>(null);

export const AlertContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (showAlert) {
      const animationTimeOut = setTimeout(() => {
        ref?.current?.classList.remove("animate-translate-up");
        ref?.current?.classList.add("animate-fade-out");
      }, 2000);
      const removeNodeTimeout = setTimeout(() => {
        setShowAlert(false);
      }, 2300);
      return () => {
        clearTimeout(animationTimeOut);
        clearTimeout(removeNodeTimeout);
      };
    }
  }, [showAlert, ref, setShowAlert]);

  return (
    <alertContext.Provider
      value={{
        description,
        title,
        type,
        setDescription,
        setTitle,
        setType,
        showAlert,
        setShowAlert,
        ref,
      }}
    >
      {children}
    </alertContext.Provider>
  );
};
