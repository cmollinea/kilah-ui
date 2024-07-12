import type { Config } from "tailwindcss";

type Component = {
  title: string;
  fileName: string;
  tailwindConfig?: Partial<Config>;
};

type Category = {
  section: string;
  title: string;
  slug: string;
  container: string;
  components: Component[];
};

export const categories: Category[] = [
  //--> Footers

  {
    section: "Application UI",
    title: "Footers",
    slug: "footers",
    container: "30rem",
    components: [
      {
        title: "Centered with form",
        fileName: "centered-with-input",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#E60023",
                foreground: "#fafafa",
                background: "#0c0c0c",
                "card-background": "#1a1a1a",
              },
            },
          },
        },
      },
      {
        title: "Three Section Footer",
        fileName: "three-section-footer",
      },
      {
        title: "Centered Footer",
        fileName: "centered-footer",
      },
      {
        title: "Simple Footer",
        fileName: "simple-footer",
      },
    ],
  },

  //<-- /Footers

  //--> Cards

  {
    section: "application-ui",
    title: "Cards",
    slug: "cards",
    container: "40rem",
    components: [
      {
        title: "Grayscale cards with hover effect",
        fileName: "grayscale-cards",
      },
      {
        title: "Colorful cards with hover effect",
        fileName: "colorful-cards",
      },
      {
        title: "Grid with hover effect",
        fileName: "air-bnb-card",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#3d68f4",
                foreground: "#fafafa",
                background: "#111111",
                "card-background": "#1d1d1d",
              },

              animation: {
                "bnb-first": "bnb-first 10s ease-in infinite",
                "bnb-second": "bnb-second 10s ease-in infinite",
                "bnb-third": "bnb-third 10s ease-in infinite",
              },

              keyframes: {
                "bnb-first": {
                  "0%": {
                    opacity: "0",
                  },

                  "2%": {
                    transform: "scale(1)",
                    opacity: "0",
                  },

                  "3%": {
                    transform: "scale(1)",
                    opacity: "1",
                  },

                  "30%": {
                    transform: "scale(1.5)",
                    opacity: "1",
                  },

                  "35%": {
                    transform: "scale(1.5)",
                    opacity: "0",
                  },
                },

                "bnb-second": {
                  "36%": {
                    transform: "scale(1)",
                    opacity: "0",
                  },

                  "40%": {
                    transform: "scale(1)",
                    opacity: "1",
                  },

                  "60%": {
                    transform: "scale(1.5)",
                    opacity: "1",
                  },

                  "65%": {
                    transform: "scale(1.5)",
                    opacity: "0",
                  },
                },

                "bnb-third": {
                  "66%": {
                    transform: "scale(1)",
                    opacity: "0",
                  },

                  "70%": {
                    transform: "scale(1)",
                    opacity: "1",
                  },

                  "95%": {
                    transform: "scale(1.5)",
                    opacity: "1",
                  },

                  "100%": {
                    transform: "scale(1.5)",
                    opacity: "0",
                  },
                },
              },
            },
          },
        },
      },
      {
        title: "Grid with hover effect",
        fileName: "grid-with-hover-effect",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#3d68f4",
                foreground: "#fafafa",
                background: "#111111",
                "card-background": "#1d1d1d",
              },
            },
          },
        },
      },
      {
        title: "Simple Card",
        fileName: "simple-card",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#eb5e28",
                foreground: "#fafafa",
                background: "#111111",
                "card-background": "#1d1d1d",
              },
            },
          },
        },
      },
    ],
  },

  //<-- /Cards

  //--> Features Section

  {
    section: "application-ui",
    title: "Features Section",
    slug: "features-section",
    container: "40rem",
    components: [
      {
        title: "Centered grid",
        fileName: "centered-grid",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#eb5e28",
                foreground: "#fafafa",
                background: "#202020",
              },
            },
          },
        },
      },
      {
        title: "Basic Centered",
        fileName: "basic-centered",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#f9092e",
                foreground: "#fafafa",
                background: "#0d0d0d",
              },
            },
          },
        },
      },
      {
        title: "With left indicator and image",
        fileName: "with-left-indicator-and-image",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#7C41F5",
                foreground: "#fafafa",
                background: "#3c3c3c",
              },
            },
          },
        },
      },
      {
        title: "Check icons on left image to right",
        fileName: "check-icons-on-left-image-to-right",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#04C7FD",
                foreground: "#fafafa",
                background: "#3f3f3f",
              },
            },
          },
        },
      },
      {
        title: "Grid to the left and image",
        fileName: "grid-to-the-left-and-image",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#258164",
                foreground: "#fafafa",
                background: "#1b1b1b",
              },
            },
          },
        },
      },
    ],
  },

  //<-- /Features Section

  //--> Navbars

  {
    section: "application-ui",
    title: "Navbars",
    slug: "navbar",
    container: "15rem",
    components: [
      {
        title: "Centered minimal navbar",
        fileName: "centered-minimal-navbar",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#eb5e28",
                foreground: "#fafafa",
              },
            },
          },
        },
      },
      {
        title: "Simple navbar with nav on left",
        fileName: "simple-navbar-with-nav-on-left",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#eb5e28",
                foreground: "#fafafa",
              },
            },
          },
        },
      },
      {
        title: "Navbar with external links",
        fileName: "navbar-with-external-links",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#eb5e28",
                foreground: "#fafafa",
              },
            },
          },
        },
      },
      {
        title: "Navbar with centered logo",
        fileName: "navbar-with-centered-logo",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#eb5e28",
                foreground: "#fafafa",
              },
            },
          },
        },
      },
    ],
  },

  //<-- /Navbars

  //--> Hero

  {
    section: "application-ui",
    title: "Hero Sections",
    slug: "hero",
    container: "40rem",
    components: [
      {
        title: "Text on left with image on right",
        fileName: "text-on-left-image-on-right",
      },
      {
        title: "Centered text with image background",
        fileName: "image-bg",
      },
      {
        title: "Centered with image",
        fileName: "centered-with-image",
      },
      {
        title: "Centered text with gradiant text",
        fileName: "centered-with-gradiant-text",
      },
      {
        title: "Centered text with cta",
        fileName: "centered-text-with-cta",
      },
    ],
  },

  //<-- /Heroes

  //--> Banners

  {
    section: "application-ui",
    title: "Banners",
    slug: "banners",
    container: "15rem",
    components: [
      {
        title: "Top with cta",
        fileName: "top-with-cta",
      },
      {
        title: "Top with centered text",
        fileName: "top-centered-text",
      },
      {
        title: "Bottom with centered text",
        fileName: "bottom-centered-text",
      },
    ],
  },

  //<-- /Banners
];
