"use client";

import { useCallback, useState } from "react";

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
      className="absolute right-4 top-2"
      onClick={() => copyToClipboard(text)}
    >
      {copied ? <>Copied</> : <>Copy code</>}
    </button>
  );
};
