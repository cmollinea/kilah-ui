import { Ubuntu_Mono } from "next/font/google";

const mono = Ubuntu_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});
type CodeProps = {
  code: string;
};

export const Code = ({ code }: CodeProps) => {
  return (
    <div
      className={`${mono.className} h-full w-full overflow-x-auto pl-10 pt-16 text-sm md:text-base lg:pl-20`}
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
};
