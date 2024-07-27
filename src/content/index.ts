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
  //*--> SignUp

  {
    section: "Auth",
    title: "Sign Up",
    slug: "signup",
    container: "50rem",
    components: [
      {
        title: "Simple centered card",
        fileName: "simple-card",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#3772ff",
                "primary-foreground": "#0c0a09",
                secondary: "#00916e",
                "secondary-foreground": "#f5f5f4",
                input: "#888888",
                foreground: "#f5f5f4",
                background: "#080708",
                "card-background": "#0c0a09",
              },
            },
          },
          //Tricky one!!! i use a string but in fact is the array inside 😉
          plugins: `[require('@tailwindcss/forms')]` as any,
        },
      },
      {
        title: "Auth form on left testimonial on right",
        fileName: "with-testimonial",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#3c6e71",
                "primary-foreground": "#f5f5f4",
                secondary: "#284b63",
                "secondary-foreground": "#f5f5f4",
                input: "#888888",
                foreground: "#f5f5f4",
                background: "#09090b",
                accent: "#d4d4d4",
                "accent-foreground": "#0c0a09",
              },
            },
          },
          //Tricky one!!! i use a string but in fact is the array inside 😉
          plugins: `[require('@tailwindcss/forms')]` as any,
        },
      },
      {
        title: "Auth form on right, image and features on left",
        fileName: "flex-with-features-and-image",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#6930c3",
                "primary-foreground": "#000000",
                secondary: "#56cfe1",
                "secondary-foreground": "#000000",
                input: "#888888",
                foreground: "#000000",
                background: "#f9f9f9",
                "card-background": "#3d405b",
                accent: "#edf2f4",
                "accent-foreground": "#2b2d42",
              },
            },
          },
          //Tricky one!!! i use a string but in fact is the array inside 😉
          plugins: `[require('@tailwindcss/forms')]` as any,
        },
      },
    ],
  },

  //*<-- /SignUp

  //*--> Login

  {
    section: "Auth",
    title: "Login",
    slug: "login",
    container: "40rem",
    components: [
      {
        title: "Flex with testimonial",
        fileName: "flex-with-testimonial",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#5932e6",
                "primary-foreground": "#fbfaff",
                input: "#062726",
                foreground: "#062726",
                background: "#f0fff1",
                "card-background": "#f1faee",
                accent: "#e9edc9",
                "accent-foreground": "#03071e",
              },
            },
          },
          //Tricky one!!! i use a string but in fact is the array inside 😉
          plugins: `[require('@tailwindcss/forms')]` as any,
        },
      },
      {
        title: "Flex with image",
        fileName: "flex-with-image",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#415a77",
                "primary-foreground": "#f8f9fa",
                input: "#ffe8d6",
                foreground: "#ffffff",
                background: "#0d1b2a",
                "card-background": "#1b263b",
                accent: "#272725",
                "accent-foreground": "#ffffff",
              },
            },
          },
          //Tricky one!!! i use a string but in fact is the array inside 😉
          plugins: `[require('@tailwindcss/forms')]` as any,
        },
      },
      {
        title: "Ubuntu Inspired",
        fileName: "ubuntu-inspired",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#f07167",
                "primary-foreground": "#000000",
                input: "#ffe8d6",
                foreground: "#f8edeb",
                background: "#ddbea9",
                "card-background": "#b7b7a4",
                accent: "#fdfcdc",
              },
            },
          },
          //Tricky one!!! i use a string but in fact is the array inside 😉
          plugins: `[require('@tailwindcss/forms')]` as any,
        },
      },
      {
        title: "Simple with waves",
        fileName: "simple-with-waves",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#22c55e",
                "primary-foreground": "#ffffff",
                input: "#E8E8E8",
                foreground: "#E5E5E5",
                background: "#042f2e",
                "card-background": "#090909",
                accent: "#dee2e6",
              },
            },
          },
          //Tricky one!!! i use a string but in fact is the array inside 😉
          plugins: `[require('@tailwindcss/forms')]` as any,
        },
      },
      {
        title: "Simple centered Card",
        fileName: "simple-centered-card",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#FCA311",
                "primary-foreground": "#000000",
                input: "#E8E8E8",
                foreground: "#E5E5E5",
                background: "#000000",
                "card-background": "#090909",
              },
            },
          },
          //Tricky one!!! i use a string but in fact is the array inside 😉
          plugins: `[require('@tailwindcss/forms')]` as any,
        },
      },
    ],
  },

  //*<-- /Login

  //*--> Testimonials

  {
    section: "Application UI",
    title: "Testimonials",
    slug: "testimonials",
    container: "60rem",
    components: [
      {
        title: "Testimonial inspired by tailwindCSS website",
        fileName: "testimonial-inspired-by-tailwindcss-website",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#e0fbfc",
                "primary-foreground": "#202020",
                secondary: "#907AD6",
                foreground: "#d6d6d6",
                background: "#000000",
                "card-background": "#1b1b1e",
              },
            },
          },
        },
      },
      {
        title: "Testimonial with negative margin",
        fileName: "testimonial-with-negative-margin",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#DABFFF",
                "primary-foreground": "#02010a",
                secondary: "#907AD6",
                foreground: "#f0fff1",
                background: "#2c2a4a",
                "card-background": "#4F518C",
              },
            },
          },
        },
      },
      {
        title:
          "Testimonial with images without background with scale and color on hover",
        fileName: "testimonial-with-images-no-background",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#192bc2",
                secondary: "#333533",
                foreground: "#242423",
                background: "#E8EDDF",
                "card-background": "#CFDBD5",
              },
            },
          },
        },
      },
      {
        title: "Testimonial with rate",
        fileName: "testimonial-with-rate",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#507dbc",
                "primary-foreground": "#1e1b18",
                foreground: "#caf0f8",
                background: "#0d1b2a",
                "card-background": "#1b263b",
              },
            },
          },
        },
      },
      {
        title: "Testimonial with cta",
        fileName: "testimonial-with-cta",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#16a149",
                foreground: "#f5f5f4",
                background: "#0E0915",
                "card-background": "#000000",
              },
            },
          },
        },
      },
    ],
  },

  //*<-- /Testimonials

  //*--> Footers

  {
    section: "Application UI",
    title: "Footers",
    slug: "footers",
    container: "35rem",
    components: [
      {
        title: "Grid with cta and form",
        fileName: "footer-with-cta-and-form",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#4f46e5",
                foreground: "#f5f5f4",
                background: "#0f172a",
                "card-background": "#e0e7ff",
              },
            },
          },
        },
      },
      {
        title: "Grid with form",
        fileName: "grid-with-form",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#FF9500",
                foreground: "#fafafa",
                background: "#0c0c0c",
              },
            },
          },
        },
      },
      {
        title: "Social Media on left, grid on right",
        fileName: "social-left-grid-right",
        tailwindConfig: {
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["Roboto Condensed"],
              },
              colors: {
                primary: "#13768b",
                foreground: "#fafafa",
                background: "#0c0c0c",
              },
            },
          },
        },
      },
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

  //*<-- /Footers

  //*--> Cards

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

  //*<-- /Cards

  //*--> Features Section

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

  //*<-- /Features Section

  //*--> Navbars

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

  //*<-- /Navbars

  //*--> Hero

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

  //*<-- /Heroes

  //*--> Banners

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

  //*<-- /Banners
];
