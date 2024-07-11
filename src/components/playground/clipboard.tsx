"use client";

import { useCallback, useState } from "react";
import { Copy, Done } from "../icons";

export const Clipboard = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback((text: string) => {
    const type = "text/plain";
    const blob = new Blob([text], { type });
    const data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data).then(
      () => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      },
      () => {
        /* failure */
      },
    );
  }, []);
  return (
    <button
      disabled={copied}
      className={`relative flex animate-fade-in place-content-center items-center rounded-md bg-primary p-1 opacity-0 transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:bg-stone-600 disabled:opacity-50 md:px-2 md:py-1 lg:order-first`}
      onClick={() => copyToClipboard(text)}
    >
      {copied ? (
        <>
          <Done />{" "}
          <span className="absolute -top-5 animate-fade-in rounded-md bg-primary px-0.5 text-xs opacity-0 duration-300">
            copied!
          </span>
        </>
      ) : (
        <Copy />
      )}
    </button>
  );
};
