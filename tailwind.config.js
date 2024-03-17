/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: false, // or'media' or 'class'],
  theme: {
    extend: {
      colors: {
        primary: "#1FA45B",
        secondary: "#E8F0F5",
        iconColor: "#868686",
        iconBg: "#E8F0F5",
        bgColor: "#F7F8FA",
      },
    },
  },
  plugins: [],
};
