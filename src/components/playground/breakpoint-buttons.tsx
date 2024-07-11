"use client";

import { BreakPoint, ComponentToShow } from "@/hooks/use-playground";
import { Dispatch, SetStateAction } from "react";
import { Desktop, Full, Laptop, Phone, Tablet } from "../icons";

type Props = {
  setBreakPoint: Dispatch<SetStateAction<BreakPoint>>;
  breakPoint: BreakPoint;
  componentToShow: ComponentToShow;
};

const buttons = [
  { breakPoint: "400px", icon: Desktop },
  { breakPoint: "684px", icon: Full },
  { breakPoint: "748px", icon: Laptop },
  { breakPoint: "1024px", icon: Phone },
  { breakPoint: "1280px", icon: Tablet },
] as const;

export const BreakPointsButtons = ({
  componentToShow,
  setBreakPoint,
  breakPoint,
}: Props) => {
  return (
    <div className="flex items-center space-x-4 max-lg:hidden">
      {buttons.map((button) => (
        <button
          key={button.breakPoint}
          aria-label={`Set Breakpoint to ${breakPoint}`}
          aria-disabled={componentToShow === "codeBlock"}
          disabled={componentToShow === "codeBlock"}
          className={`flex place-content-center items-center rounded-md border border-foreground/10 px-2 py-1 transition-all ease-out active:scale-[96%] disabled:cursor-not-allowed disabled:bg-gray-800 disabled:opacity-50 ${componentToShow !== "codeBlock" && breakPoint === button.breakPoint ? "bg-primary/60 shadow-inner shadow-black" : "border-transparent bg-primary"}`}
          onClick={() => setBreakPoint(button.breakPoint)}
        >
          <button.icon />
        </button>
      ))}
    </div>
  );
};
