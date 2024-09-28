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
        primary: "#ea580c",
        "primary-foreground": "#09090b",
        secondary: "#d62828",
        "secondary-foreground": "#edf6f9",
        accent: "#f8fafc",
        "accent-foreground": "#1a1a1a",
        info: "#3b82f6",
        "info-foreground": "#ffffff",
        success: "#10b981",
        "success-foreground": "#ffffff",
        danger: "#ef4444",
        "danger-foreground": "#ffffff",
        warning: "#f59e0b",
        "warning-foreground": "#ffffff",
        foreground: "#efefef",
        background: "#0c0b0b",
        "card-background": "#0c0c0c",
        input: "#888888",
      },
      animation: {
        "fade-in": "fade-in 0.1s ease-in-out forwards",
        "fade-out": "fade-out 0.1s ease-in-out forwards",
        "translate-up": "translate 0.5s ease-in forwards",
        "open-nav": "open-nav 0.3s ease-in-out forwards",
        "close-nav": "close-nav 0.3s ease-in-out forwards",
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
        "open-nav": {
          "0%": { translate: "500px 0", opacity: "0" },
          "100%": { translate: "0 0", opacity: "1" },
        },
        "close-nav": {
          "0%": { translate: "0 0", opacity: "1" },
          "100%": { translate: "500px 0", opacity: "0" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("tailwindcss-bg-patterns"),
  ],
};
export default config;
