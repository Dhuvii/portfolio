import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        spotlight: "spotlight 5s ease .75s infinite forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0.4",
            transform: "translate(-72%, -62%) scale(0.7)",
          },
          "50%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
          "100%": {
            opacity: "0.4",
            transform: "translate(-72%, -62%) scale(0.7)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
