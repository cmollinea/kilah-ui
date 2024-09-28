import { alertContext } from "@/context/alert-context";
import { useContext } from "react";

export const useAlertContext = () => {
  const ctx = useContext(alertContext);

  if (!ctx) {
    throw new Error(
      "useAlertContext must be used within an alertContext provider",
    );
  }

  return ctx;
};
