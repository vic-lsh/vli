module.exports = {
  content: [
    // specify source files in which tailwind is used
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "html-blue": "#0000ff",
      },
    },
  },
  plugins: [],
};
