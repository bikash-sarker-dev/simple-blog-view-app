/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#071014",
        background: "#f0f7fb",
        primary: "#3fa4cf",
        secondary: "#91cee8",
        accent: "#61bce4",
        info: "#CDE7F2",
        default: "#E7F2F8",
      },
    },
  },
  plugins: [],
};
