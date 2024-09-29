import { highlight } from "@/lib/shiki";
import { BundledLanguage } from "shiki";
import { Code } from "../playground/code";

export const ShikiServer = async ({
  code,
  lang,
}: {
  code: string;
  lang?: BundledLanguage;
}) => {
  const highligthedCode = await highlight(code, lang);
  return <Code code={highligthedCode} className="p-2 lg:pl-2" />;
};
