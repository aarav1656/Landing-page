/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        mediumseagreen: {
          "100": "#50c878",
          "200": "rgba(80, 200, 120, 0.4)",
          "300": "rgba(80, 200, 120, 0.48)",
          "400": "rgba(80, 200, 120, 0.64)",
          "500": "rgba(80, 200, 120, 0.16)",
        },
        white: "#fff",
        gray: {
          "100": "#2c2c2c",
          "200": "#1e1e1e",
          "300": "rgba(255, 255, 255, 0.56)",
          "400": "rgba(43, 43, 43, 0.04)",
        },
        darkgray: "#b0b0b0",
        silver: "#c4c4c4",
        darkslategray: "#444",
        "systemgrey-600": "#757575",
      },
      spacing: {},
      fontFamily: {
        avenir: "Avenir",
        "futura-md-bt": "'Futura Md BT'",
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      xs: "12px",
      "29xl": "48px",
      base: "16px",
      xl: "20px",
      "5xl": "24px",
      "45xl": "64px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
