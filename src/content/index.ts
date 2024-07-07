export const categories = [
  {
    section: "application-ui",
    title: "Navbars",
    slug: "navbar",
    container: "15rem",
    components: [
      {
        title: "Centered minimal navbar",
        fileName: "centered-minimal-navbar",
        tailwindConfig: `tailwind.config = {
          darkMode: 'class',
          theme: {
              extend: {
                  fontFamily: {
                      sans: ['Lato'],
                  },
                  colors: {
                      primary: '#222f72',
                      foreground: "#fafafa",
                  }
              }
          }
      }`,
      },
      {
        title: "Simple navbar with nav on left",
        fileName: "simple-navbar-with-nav-on-left",
        tailwindConfig: `tailwind.config = {
          darkMode: 'class',
          theme: {
              extend: {
                  fontFamily: {
                      sans: ['Lato'],
                  },
                  colors: {
                      primary: '#222f72',
                      foreground: "#fafafa",
                  }
              }
          }
      }`,
      },
      {
        title: "Navbar with external links",
        fileName: "navbar-with-external-links",
        tailwindConfig: `tailwind.config = {
          darkMode: 'class',
          theme: {
              extend: {
                  fontFamily: {
                      sans: ['Lato'],
                  },
                  colors: {
                      primary: '#222f72',
                      foreground: "#fafafa",
                  }
              }
          }
      }`,
      },
      {
        title: "Navbar with centered logo",
        fileName: "navbar-with-centered-logo",
        tailwindConfig: `tailwind.config = {
          darkMode: 'class',
          theme: {
              extend: {
                  fontFamily: {
                      sans: ['Lato'],
                  },
                  colors: {
                      primary: '#222f72',
                      foreground: "#fafafa",
                  }
              }
          }
      }`,
      },
    ],
  },
  {
    section: "application-ui",
    title: "Hero Sections",
    slug: "hero",
    container: "40rem",
    components: [
      {
        title: "Text on left with image on right",
        fileName: "text-on-left-image-on-right",
        tailwindConfig: "",
      },
      {
        title: "Centered text with image background",
        fileName: "image-bg",
        tailwindConfig: "",
      },
      {
        title: "Centered with image",
        fileName: "centered-with-image",
        tailwindConfig: "",
      },
      {
        title: "Centered text with gradiant text",
        fileName: "centered-with-gradiant-text",
        tailwindConfig: "",
      },
      {
        title: "Centered text with cta",
        fileName: "centered-text-with-cta",
        tailwindConfig: "",
      },
    ],
  },
  {
    section: "application-ui",
    title: "Banners",
    slug: "banners",
    container: "15rem",
    components: [
      {
        title: "Top with cta",
        fileName: "top-with-cta",
        tailwindConfig: "",
      },
      {
        title: "Top with centered text",
        fileName: "top-centered-text",
        tailwindConfig: "",
      },
      {
        title: "Bottom with centered text",
        fileName: "bottom-centered-text",
        tailwindConfig: "",
      },
    ],
  },
];
