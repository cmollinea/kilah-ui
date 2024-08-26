import type { Config } from "tailwindcss";

export const defaultConfig: Partial<Config> = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Condensed"],
      },
      colors: {
        primary: {
          DEFAULT: "#eb5e28",
        },
        foreground: "#efefef",
        "primary-foreground": "#09090b",
        background: "#252422",
      },
    },
  },
  plugins: ["require('@tailwindcss/typography')"] as any,
};

export const categories = [
  {
    title: "Tables",
    slug: "tables",
    section: "Bussiness",
  },
  {
    title: "Pricing Section",
    slug: "pricing",
    section: "Bussiness",
  },

  {
    title: "Blog Cards",
    slug: "blog-cards",
    section: "Application UI",
  },

  {
    title: "Dropdowns",
    slug: "dropdowns",
    section: "Application UI",
  },

  {
    title: "Alerts",
    section: "Application Ui",
    slug: "alerts",
  },

  {
    title: "Tabs",
    section: "Application Ui",
    slug: "tabs",
  },

  {
    title: "Badges",
    section: "Application Ui",
    slug: "badges",
  },

  {
    title: "Buttons",
    section: "Application Ui",
    slug: "buttons",
  },

  {
    section: "Auth",
    title: "Sign Up",
    slug: "signup",
  },

  {
    section: "Auth",
    title: "Login",
    slug: "login",
  },

  {
    section: "Application UI",
    title: "Testimonials",
    slug: "testimonials",
  },

  {
    section: "Application UI",
    title: "Footers",
    slug: "footers",
  },

  {
    section: "application-ui",
    title: "Cards",
    slug: "cards",
  },

  {
    section: "application-ui",
    title: "Features Section",
    slug: "features-section",
  },

  {
    section: "application-ui",
    title: "Navbars",
    slug: "navbar",
  },

  {
    section: "application-ui",
    title: "Hero Sections",
    slug: "hero",
  },

  {
    section: "application-ui",
    title: "Banners",
    slug: "banners",
  },
];
