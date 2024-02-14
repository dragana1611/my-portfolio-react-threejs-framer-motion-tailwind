/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Eudoxus Sans, sans-serif ",
      secondary: "Playfair, serif",
      body: "Eudoxus Sans, sans-serif",
    },
    container: {},
    screens: {
      xs: "280px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1500px",
    },
    extend: {
      colors: {
        primary: "#e5e7eb",
        secondary: "#050816",
        tertiary: "#0c0c1d",
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        "dark-grey": "#6a6a6a",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: () => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
        circles: 'url("./assets/images/bg-circles.png")',
        circleStar: 'url("./assets/images/circle-star.svg")',
      }),
      dropShadow: {
        basisShadow: "1px 1px 0 rgba(0, 0, 0, 1)",
        xlShadow: [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      content: {
        brush: "url('./assets/images/brush.png')",
      },
      animation: {
        "spin-slow": "spin 50s linear infinite",
      },
      lightMode: "class",
    },
  },
  variants: {
    extend: {
      backgroundColor: ["light"],
      textColor: ["light"],
    },
  },
  plugins: [],
};
