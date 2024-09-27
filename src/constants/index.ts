import type { Config } from "tailwindcss";

export const defaultConfig: Partial<Config> = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Condensed"],
      },
      colors: {
        background: "#ffffff",
        foreground: "#d82116",
        card: "#ffffff",
        "card-foreground": "#d82116",
        primary: "#846bce",
        "primary-foreground": "#e9f1f9",
        secondary: "#e0e9f5",
        "secondary-foreground": "#2d3446",
        accent: "#e0e9f5",
        "accent-foreground": "#2d3446",
        danger: "#e5193e",
        "danger-foreground": "#e9f1f9",
        border: "#d1dce8",
        input: "#d1dce8",
      },
    },
  },
  plugins: ["require('@tailwindcss/typography')"] as any,
};
