"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#eb5e28"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export { ProgressBarProvider };
