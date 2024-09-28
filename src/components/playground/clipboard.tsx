"use client";

import { useAlertContext } from "@/hooks/use-alert-context";
import { useClipboard } from "@/hooks/use-clipboard";
import { Copy, Done } from "../icons";

export const Clipboard = ({ text }: { text: string }) => {
  const { copyToClipboard } = useClipboard();
  const { showAlert, setTitle, setType, setDescription } = useAlertContext();
  const handleCopyElemnt = () => {
    setTitle("Snippet copied!");
    setDescription("The snippet was copied succesfuly");
    setType("success");
    copyToClipboard(text);
  };
  return (
    <>
      <button
        title="Copy Code"
        disabled={showAlert}
        className={`relative flex animate-fade-in place-content-center items-center rounded-md bg-primary p-1 opacity-0 transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:bg-stone-600 disabled:opacity-50 md:px-2 md:py-1 lg:order-first`}
        onClick={handleCopyElemnt}
      >
        {showAlert ? <Done /> : <Copy />}
      </button>
    </>
  );
};
