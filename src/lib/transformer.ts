export function componentPreviewHtml(
  componentHtml: string,
  componentContainer = "relative",
) {
  return `
  <html class="dark"">
  <head>
    <link rel=" preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" />
  
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
  
      tailwind.config = {
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
      }
  </script>
  <style>
  :root {
    --foreground: 0, 43%, 97%;
    --background: 0 5% 12%;
  }</style>
  </head>
  
  <body class="${componentContainer} font-sans antialiased min-h-screen">
      ${componentHtml}
  </body>
  
  </html>
    `;
}

export function componentPreviewJsx(componentHtml: string) {
  let clonedHtml = componentHtml;

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
