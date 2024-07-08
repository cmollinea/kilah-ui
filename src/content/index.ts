export const categories = [
  {
    section: "application-ui",
    title: "Features Section",
    slug: "features-section",
    container: "40rem",
    components: [
      {
        title: "Centered grid",
        fileName: "centered-grid",
        tailwindConfig: `tailwind.config = {
      darkMode: "class",
      theme: {
          extend: {
              fontFamily: {
                  sans: ["Lato"],
              },
              colors: {
                  primary: "#eb5e28",
                  foreground: "#fafafa",
                  background: "#202020"
              }
          }
      }
  }`,
      },
      {
        title: "Basic Centered",
        fileName: "basic-centered",
        tailwindConfig: `tailwind.config = {
      darkMode: "class",
      theme: {
          extend: {
              fontFamily: {
                  sans: ["Lato"],
              },
              colors: {
                  primary: "#f9092e",
                  foreground: "#fafafa",
                  background: "#0d0d0d"
              }
          }
      }
  }`,
      },
      {
        title: "With left indicator and image",
        fileName: "with-left-indicator-and-image",
        tailwindConfig: `tailwind.config = {
      darkMode: "class",
      theme: {
          extend: {
              fontFamily: {
                  sans: ["Lato"],
              },
              colors: {
                  primary: "#7C41F5",
                  foreground: "#fafafa",
                  background: "#3c3c3c"
              }
          }
      }
  }`,
      },
      {
        title: "Check icons on left image to right",
        fileName: "check-icons-on-left-image-to-right",
        tailwindConfig: `tailwind.config = {
     darkMode: "class",
        theme: {
            extend: {
                fontFamily: {
                    sans: ["Lato"],
                },
                colors: {
                    primary: "#04C7FD",
                    foreground: "#fafafa",
                    background: "#3f3f3f"
                }
            }
        }
  }`,
      },
      {
        title: "Grid to the left and image",
        fileName: "grid-to-the-left-and-image",
        tailwindConfig: `tailwind.config = {
      darkMode: "class",
      theme: {
          extend: {
              fontFamily: {
                  sans: ["Lato"],
              },
              colors: {
                  primary: "#258164",
                  foreground: "#fafafa",
                  background: "#1b1b1b"

              }
          }
      }
  }`,
      },
    ],
  },
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
          darkMode: "class",
          theme: {
              extend: {
                  fontFamily: {
                      sans: ["Lato"],
                  },
                  colors: {
                      primary: "#eb5e28",
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
          darkMode: "class",
          theme: {
              extend: {
                  fontFamily: {
                      sans: ["Lato"],
                  },
                  colors: {
                      primary: "#eb5e28",
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
          darkMode: "class",
          theme: {
              extend: {
                  fontFamily: {
                      sans: ["Lato"],
                  },
                  colors: {
                      primary: "#eb5e28",
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
          darkMode: "class",
          theme: {
              extend: {
                  fontFamily: {
                      sans: ["Lato"],
                  },
                  colors: {
                      primary: "#eb5e28",
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
