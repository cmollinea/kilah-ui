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
