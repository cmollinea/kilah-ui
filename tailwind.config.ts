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
      },
      animation: {
        "fade-in": "fade 0.1s ease-in-out forwards",
        "translate-up": "translate 0.5s ease-in-out forwards",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        translate: {
          "0%": { translate: "0 15px", opacity: "0" },
          "100%": { translate: "0 0", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
