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
  { breakPoint: "400px", icon: Phone },
  { breakPoint: "640px", icon: Tablet },
  { breakPoint: "768px", icon: Laptop },
  { breakPoint: "1024px", icon: Desktop },
  { breakPoint: "1280px", icon: Full },
] as const;

export const BreakPointsButtons = ({
  componentToShow,
  setBreakPoint,
  breakPoint,
}: Props) => {
  return (
    <div className="flex items-center space-x-4 text-primary-foreground max-lg:hidden">
      {buttons.map((button) => (
        <button
          title={`Breakpoint ${button.breakPoint}`}
          key={button.breakPoint}
          aria-label={`Set Breakpoint to ${breakPoint}`}
          aria-disabled={componentToShow === "codeBlock"}
          disabled={componentToShow === "codeBlock"}
          className={`flex place-content-center items-center rounded-md border border-foreground/10 px-2 py-1 transition-all ease-out active:scale-[96%] disabled:cursor-not-allowed disabled:bg-stone-600 disabled:opacity-50 ${componentToShow !== "codeBlock" && breakPoint === button.breakPoint ? "bg-primary/60 shadow-inner shadow-black" : "border-transparent bg-primary"}`}
          onClick={() => setBreakPoint(button.breakPoint)}
        >
          <button.icon />
        </button>
      ))}
    </div>
  );
};
