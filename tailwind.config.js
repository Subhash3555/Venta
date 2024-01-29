module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#fafafa", 300: "#e0e6e8", 400: "#c4c4c4", 900: "#1f1d2b" },
        white: { A700: "#ffffff" },
        black: { "900_b2": "#000000b2" },
        blue_gray: {
          200: "#abbbc2",
          400: "#889898",
          800: "#393c49",
          900: "#252836",
          "900_01": "#2d303e",
        },
        cyan: { 700: "#008aab", "700_70": "#008aab70" },
        colors: "#008aabff",
        deep_orange: { A100: "#ffb572", A100_33: "#ffb57233" },
        green: { A200_3d: "#6be2be3d", "300_3d": "#88e0903d" },
        red: {
          300: "#ea7c69",
          "300_4c": "#ea7c694c",
          "300_3d": "#ff64713d",
          "300_42": "#ea7c6942",
          "300_51": "#ea7c6951",
          "300_66": "#ea7c6966",
        },
        blue: { 300: "#64b0f6" },
        deep_purple: { A200: "#9945ff", "300_4c": "#9288e04c" },
        teal: { A400: "#14f195" },
        indigo: { A100_33: "#9290fe33" },
      },
      boxShadow: {
        bs1: "0px 8px  24px 0px #ea7c6951",
        bs: "0px 8px  24px 0px #ea7c6966",
      },
      fontFamily: { barlow: "Barlow" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
