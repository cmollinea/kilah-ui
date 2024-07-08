import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const defaultConfig = ` tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter'],
            },
            colors: {
                primary: '#ffd43b',
                foreground: "#fafafa",
            }
        }
    }
}`;

export function createIframe(componentHtml: string, tailwindConfig?: string) {
  return `
  <html class="dark"">
  <head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
  
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
  ${tailwindConfig ? tailwindConfig : defaultConfig}
  </script>
  </head>
  
  <body class="relative font-sans antialiased min-h-screen bg-background text-foreground">
      ${componentHtml}
  </body>
  
  </html>
    `;
}

export function translateToJsx(html: string) {
  let clonedHtml = html;

  clonedHtml = clonedHtml.replace(/class=/g, "className=");
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
