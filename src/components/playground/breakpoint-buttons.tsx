"use client";

import { Dispatch, SetStateAction } from "react";
import { Desktop, Full, Laptop, Phone, Tablet } from "../icons";
import { BreakPoint, ComponentToShow } from "./playground-container-client";

type Props = {
  setBreakPoint: Dispatch<SetStateAction<BreakPoint>>;
  breakPoint: BreakPoint;
  componentToShow: ComponentToShow;
};

export const BreakPointsButtons = ({
  componentToShow,
  setBreakPoint,
  breakPoint,
}: Props) => {
  return (
    <div className="flex items-center space-x-4 max-lg:hidden">
      <button
        aria-label={`Set Breakpoint to ${breakPoint}`}
        aria-disabled={componentToShow === "codeBlock"}
        disabled={componentToShow === "codeBlock"}
        className={`flex place-content-center items-center rounded-md border border-foreground/10 px-2 py-1 transition-all ease-out active:scale-[96%] disabled:cursor-not-allowed disabled:bg-gray-800 disabled:opacity-50 ${componentToShow !== "codeBlock" && breakPoint === "400px" ? "bg-primary/60 shadow-inner shadow-black" : "border-transparent bg-primary"}`}
        onClick={() => setBreakPoint("400px")}
      >
        <Phone />
      </button>
      <button
        aria-label={`Set Breakpoint to ${breakPoint}`}
        aria-disabled={componentToShow === "codeBlock"}
        disabled={componentToShow === "codeBlock"}
        className={`flex place-content-center items-center rounded-md border border-foreground/10 px-2 py-1 transition-all ease-out active:scale-[96%] disabled:cursor-not-allowed disabled:bg-gray-800 disabled:opacity-50 ${componentToShow !== "codeBlock" && breakPoint === "684px" ? "bg-primary/60 shadow-inner shadow-black" : "border-transparent bg-primary"}`}
        onClick={() => setBreakPoint("684px")}
      >
        <Tablet />
      </button>
      <button
        aria-label={`Set Breakpoint to ${breakPoint}`}
        aria-disabled={componentToShow === "codeBlock"}
        disabled={componentToShow === "codeBlock"}
        className={`flex place-content-center items-center rounded-md border border-foreground/10 px-2 py-1 transition-all ease-out active:scale-[96%] disabled:cursor-not-allowed disabled:bg-gray-800 disabled:opacity-50 ${componentToShow !== "codeBlock" && breakPoint === "748px" ? "bg-primary/60 shadow-inner shadow-black" : "border-transparent bg-primary"}`}
        onClick={() => setBreakPoint("748px")}
      >
        <Laptop />
      </button>
      <button
        aria-label={`Set Breakpoint to ${breakPoint}`}
        aria-disabled={componentToShow === "codeBlock"}
        disabled={componentToShow === "codeBlock"}
        className={`flex place-content-center items-center rounded-md border border-foreground/10 px-2 py-1 transition-all ease-out active:scale-[96%] disabled:cursor-not-allowed disabled:bg-gray-800 disabled:opacity-50 ${componentToShow !== "codeBlock" && breakPoint === "1024px" ? "bg-primary/60 shadow-inner shadow-black" : "border-transparent bg-primary"}`}
        onClick={() => setBreakPoint("1024px")}
      >
        <Desktop />
      </button>
      <button
        aria-label={`Set Breakpoint to ${breakPoint}`}
        aria-disabled={componentToShow === "codeBlock"}
        disabled={componentToShow === "codeBlock"}
        className={`flex place-content-center items-center rounded-md border border-foreground/10 px-2 py-1 transition-all ease-out active:scale-[96%] disabled:cursor-not-allowed disabled:bg-gray-800 disabled:opacity-50 ${componentToShow !== "codeBlock" && breakPoint === "1280px" ? "bg-primary/60 shadow-inner shadow-black" : "border-transparent bg-primary"}`}
        onClick={() => setBreakPoint("1280px")}
      >
        <Full />
      </button>
    </div>
  );
};
