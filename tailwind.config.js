/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-title)"],
        text: ["var(--font-text)"],
      },
      colors: {
        dark: "#413b3a",
        light: "#c37344",
        extra: "#f7c205",
        main: "#fbdead",
      },
      boxShadow: {
        small:
          "rgba(117, 101, 76, 0.12) 0px 1px 3px, rgba(117, 101, 76, 0.24) 0px 1px 2px",
        medium:
          "rgba(117, 101, 76, 0.16) 0px 3px 6px, rgba(117, 101, 76, 0.23) 0px 3px 6px",
        large:
          "rgba(117, 101, 76, 0.25) 0px 13px 27px -5px, rgba(117, 101, 76, 0.3) 0px 8px 16px -8px",
      },
    },
  },
  plugins: [],
};
