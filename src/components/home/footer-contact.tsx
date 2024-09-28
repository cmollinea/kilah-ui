"use client";

import { useAlertContext } from "@/hooks/use-alert-context";
import { useClipboard } from "@/hooks/use-clipboard";
const mail = "procastinatordev@gmail.com";

export const FooterContact = () => {
  const { copyToClipboard } = useClipboard();
  const { showAlert, setTitle, setType, setDescription } = useAlertContext();
  const handleCopyEmail = () => {
    setTitle("E-Mail copied!");
    setDescription("The e-mail was copied succesfuly, reach me when you need!");
    setType("success");
    copyToClipboard(mail);
  };
  return (
    <>
      {" "}
      <button
        disabled={showAlert}
        onClick={handleCopyEmail}
        className="inline-flex space-x-1 underline"
      >
        <span className="text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
        </span>
        <span>{mail}</span>
      </button>
    </>
  );
};
