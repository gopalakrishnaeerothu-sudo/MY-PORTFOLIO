/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { kanit: ["Kanit", "sans-serif"] },
      colors: {
        page: v("bg"), // page background
        fg: v("fg"), // main text
        surface: v("surface"), // raised panels
        hl: v("hl"), // small highlight text (orange on dark, teal on light)
        brand: v("orange"),
        teal: v("teal"),
      },
    },
  },
  plugins: [],
};
