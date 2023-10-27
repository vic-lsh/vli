const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // specify source files in which tailwind is used
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "html-blue": "#0000ff",
        "dark-accent": colors.blue["300"],
      },
      invert: { 25: ".25", 50: ".5", 75: ".75", 90: ".9" },
    },
  },
  plugins: [],
};
