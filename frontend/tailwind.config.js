module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#00BB7C",
        secondary: "#1264A3",
        success: "#008B5E",
        error: "#F40101",
        accent: "#B8003C",
        backGround: "rgba(0, 0, 0, 0.6)",
        progress: "#FFB425",
        lightgray: "F6F6F6",
        orange: "#FCE7DE",
        // Colours for TrashListView
        lightGreen: "#F0FBF8",
        durationGray: "#616161",
        itemsGray: "#606060",
        emptyGray: "#292929",
        itemTrash: "#4A4A4A",
        lightGrayHover: "#FAFAFA",
        text: {
          default: "#1d1c1d",
          50: "#F6F6F6",
          100: "#E7E7E7",
          200: "#B0AFB0",
          300: "#616061",
        },
        white: "#FFF",
      },
      fontFamily: {
        font: ['"Lato"', "sans-serif"],
      },
      fontSize: {
        trashTheading: "0.9375rem",
        empty: "0.8125rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
