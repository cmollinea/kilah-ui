import { BundledLanguage, codeToHtml } from "shiki";
import dark from "shiki/themes/min-dark.mjs";

export async function highlight(code: string, lang?: BundledLanguage) {
  const html = codeToHtml(code, {
    theme: {
      ...dark,
      bg: "transparent",
    },
    lang: lang ?? "js",
  });

  return html;
}
