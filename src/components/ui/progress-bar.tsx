"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="2px"
        color="#f97316"
        options={{ showSpinner: false, trickle: true }}
        shallowRouting
      />
    </>
  );
};

export { ProgressBarProvider };
