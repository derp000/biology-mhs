/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        sans: "Poppins",
        heading: "Poppins",
        body: "Poppins",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      colors: {
        text: {
          50: "#060e14",
          100: "#0b1c28",
          200: "#17384f",
          300: "#225477",
          400: "#2e6f9e",
          500: "#398bc6",
          600: "#61a2d1",
          700: "#88badd",
          800: "#b0d1e8",
          900: "#d7e8f4",
          950: "#ebf3f9",
          DEFAULT: "#17384F",
        },
        background: {
          50: "#00001a",
          100: "#000033",
          200: "#000066",
          300: "#000099",
          400: "#0000cc",
          500: "#0000ff",
          600: "#3333ff",
          700: "#6666ff",
          800: "#9999ff",
          900: "#ccccff",
          950: "#e5e5ff",
          DEFAULT: "#Fafaff",
        },
        primary: {
          50: "#031900",
          100: "#063201",
          200: "#0b6501",
          300: "#119702",
          400: "#16ca02",
          500: "#1cfc03",
          600: "#49fd35",
          700: "#77fd68",
          800: "#a4fe9a",
          900: "#d2fecd",
          950: "#e8ffe6",
          DEFAULT: "#0a5a01",
        },
        secondary: {
          50: "#1a1300",
          100: "#332500",
          200: "#664b00",
          300: "#997000",
          400: "#cc9600",
          500: "#ffbb00",
          600: "#ffc933",
          700: "#ffd666",
          800: "#ffe499",
          900: "#fff1cc",
          950: "#fff8e5",
          DEFAULT: "#ffda77",
        },
        accent: {
          50: "#170204",
          100: "#2f0409",
          200: "#5d0911",
          300: "#8c0d1a",
          400: "#bb1122",
          500: "#e9162b",
          600: "#ee4455",
          700: "#f27380",
          800: "#f6a2aa",
          900: "#fbd0d5",
          950: "#fde8ea",
          DEFAULT: "#9f0f1e",
        },
      },
    },
  },
  plugins: [],
};
