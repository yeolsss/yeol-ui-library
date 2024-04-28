/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./global.css", "./src/**/*.{js,jsx,html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ["pop-regular"]: ["regular", "sans-serif"],
        ["pop-light"]: ["light", "sans-serif"],
        ["pop-bold"]: ["bold", "sans-serif"],
      },
      colors: {
        primaryColor: "var(--primaryColor)",
        accentColor: "var(--accentColor)",
        textColor: "var(--textColor)",
        backgroundColor: "var(--backgroundColor)",
        ["hover-textColor"]: "var(--hover-textColor)",
        inputDefaultColor: "var(--inputDefaultColor)",
        inputFocusColor: "var(--inputFocusColor)",
        ["bg-button-primary"]: "var(--bg-button-primary)",
        ["text-button-primary"]: "var(--text-button-primary)",
      },
    },
  },
  plugins: [],
};
