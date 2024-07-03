import { codeToHtml } from 'shiki';
import monokai from 'shiki/themes/monokai.mjs';

export async function highlight(code: string) {
  const html = codeToHtml(code, {
    theme: {
      ...monokai,
      bg: 'transparent'
    },
    lang: 'tsx'
  });

  return html;
}
