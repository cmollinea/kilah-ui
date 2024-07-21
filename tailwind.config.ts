import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#eb5e28",
        },
        foreground: "#efefef",
        "primary-foreground": "#09090b",
        background: "#1a1a1a",
        "card-background": "#101010",
        muted: "#e7e5e4",
      },
      animation: {
        "fade-in": "fade-in 0.1s ease-in-out forwards",
        "fade-out": "fade-out 0.1s ease-in-out forwards",
        "translate-up": "translate 0.5s ease-in forwards",
        "air-bnb": "air-bnb 3s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        translate: {
          "0%": { translate: "0 15px", opacity: "0" },
          "100%": { translate: "0 0", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
};
export default config;
