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
        matteWhite: "#F3F2F0",
        mainBlue: "#133F83",
        darkBlue: "#04193A",
        deepBlue: "#1E5EC4",
      },

      fontSize: {
        "2xs": "0.625rem",
        "3xs": "0.5rem",
        "4xs": "0.375rem",
        "5xs": "0.25rem",
        headline: "140px",
      },
      fontFamily: {
        poppinsExtraBold: ["poppins-extra-bold", "sans-serif"],
        poppinsBold: ["poppins-bold", "sans-serif"],
        poppinsSemiBold: ["poppins-semi-bold", "sans-serif"],
        regular: ["poppins-regular", "sans-serif"],
        lightItalic: ["poppins-light-italic", "sans-serif"],
        ExtralightItalic: ["poppins-extra-light-italic", "sans-serif"],
      },
      screens: {
        xs: { max: "380px" },
      },
    },
  },
  plugins: [],
};
