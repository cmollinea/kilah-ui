import { defaultConfig } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { notFound } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { Category } from "../../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createIframe(componentHtml: string, tailwindConfig?: string) {
  //* --> This code is a tweek version of hyperui.dev code so thanks for the aproach!

  return `
  <html>
  <head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  
  <script>
      document.addEventListener('DOMContentLoaded', function () {
          const iframeLinks = [...document.querySelectorAll('a')]
          const iframeForms = [...document.querySelectorAll('form')]
  
          iframeLinks.forEach(function (iframeLink) {
              iframeLink.addEventListener('click', (e) => e.preventDefault())
          })
  
          iframeForms.forEach(function (iframeForm) {
              iframeForm.addEventListener('submit', (e) => e.preventDefault())
          })
      })
  </script>
  
  <script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
  
  <script>
    tailwind.config = ${tailwindConfig ?? defaultConfig}
  </script>
  </head>
  
  <body class="relative font-sans antialiased min-h-screen flex flex-col place-content-center items-center p-4 bg-background text-foreground">
      ${componentHtml}
  </body>
  
  </html>
    `;
}

export function translateToJsx(html: string) {
  //* --> This code is from hyperui.dev code so thanks for still Open Source!

  let clonedHtml = html;

  clonedHtml = clonedHtml.replace(/class=/g, "className=");
  clonedHtml = clonedHtml.replace(/inputmode=/g, "inputMode=");
  clonedHtml = clonedHtml.replace(/autocomplete=/g, "autoComplete=");
  clonedHtml = clonedHtml.replace(/for=/g, "htmlFor=");
  clonedHtml = clonedHtml.replace(/viewBox=/g, "viewBox=");
  clonedHtml = clonedHtml.replace(/fill-rule=/g, "fillRule=");
  clonedHtml = clonedHtml.replace(/fill-opacity=/g, "fillOpacity=");
  clonedHtml = clonedHtml.replace(/clip-rule=/g, "clipRule=");
  clonedHtml = clonedHtml.replace(/stroke-linecap=/g, "strokeLinecap=");
  clonedHtml = clonedHtml.replace(/stroke-linejoin=/g, "strokeLinejoin=");
  clonedHtml = clonedHtml.replace(/stroke-width=/g, "strokeWidth=");
  clonedHtml = clonedHtml.replace(/stroke-dasharray=/g, "strokeDasharray=");
  clonedHtml = clonedHtml.replace(/stroke-dashoffset=/g, "strokeDashoffset=");
  clonedHtml = clonedHtml.replace(/stroke-miterlimit=/g, "strokeMiterlimit=");
  clonedHtml = clonedHtml.replace(/stroke-opacity=/g, "strokeOpacity=");
  clonedHtml = clonedHtml.replace(/tabindex=/g, "tabIndex=");
  clonedHtml = clonedHtml.replace(/<!--/g, "{/*");
  clonedHtml = clonedHtml.replace(/-->/g, "*/}");

  return clonedHtml;
}

export async function getComponentsData(
  url: string,
): Promise<Category | undefined> {
  try {
    const response = await fetch(url);

    if (response.status === 404) {
      return notFound();
    }

    const data = await response.json();
    return data;
  } catch {
    console.log("Somthing went wrong");
  }
}

export function countComponents(categories: Partial<Category>[]) {
  const totalResults = categories.reduce(
    (count, category) => count + (category.components?.length || 0),
    0,
  );
  return totalResults;
}
