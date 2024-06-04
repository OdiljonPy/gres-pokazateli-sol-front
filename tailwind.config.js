module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      lineHeight: {
        // Need refactor these px values
        13: "13px",
        19: "19px",
        130: "130%",
        134: "134%",
        137: "137%",
        138: "138%",
        35: "35px",
      },
      screens: {
        sx: "320px",
        xs: "375px",
        ms: "500px",
        sm: "640px",
        lg: "768px",
        md: "992px",
        xl: "1024px",
        xxl: "1280px",
      },
      colors: {
        black: "#232323",
        white: "#F9F9F9",
        light_white: "#F1F1F1",
        main_blue: "#296CD1",
        dark: "#49516F",
        dark_light: "#9095A7",
      },
      fontFamily: {
        geologic: ["geological-medium", "system-ui"],
        jost: ["geological-jost", "system-ui"],
        monstserrat: ["geological-monstserrat", "system-ui"],
      },
    },
  },
  plugins: [],
};
