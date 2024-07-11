import { Roboto_Mono } from "next/font/google";

const mono = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});
type CodeProps = {
  code: string;
};

export const Code = ({ code }: CodeProps) => {
  return (
    <div
      className={`${mono.className} h-full w-full overflow-x-auto p-10 text-xs font-bold md:text-base lg:pl-20`}
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
};
