import { cn } from "@/lib/utils";
import { Roboto_Mono } from "next/font/google";

const mono = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});
type CodeProps = {
  code: string;
  className?: string;
};

export const Code = ({ code, className }: CodeProps) => {
  return (
    <div
      className={cn(
        `${mono.className} h-full w-full overflow-x-auto bg-background p-10 text-xs font-bold md:text-base lg:pl-20`,
        className,
      )}
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
};
