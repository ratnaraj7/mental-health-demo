import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: [
          "Big Shoulders Display Variable",
          //...defaultTheme.fontFamily.display,
        ],
      },
      colors: {
        primary: "rgb(var(--color-primary))",
        secondary: "rgb(var(--color-secondary))",
        accent: "rgb(var(--color-accent))",
        background: "rgb(var(--color-background))",
        text: "rgb(var(--color-text))",
        border: "rgb(var(--color-border))",
        highlight: "rgb(var(--color-highlight))",
        muted: "rgb(var(--color-muted))",
        shadow: "rgb(var(--color-shadow))",
      },
    },
  },
  plugins: [],
};
