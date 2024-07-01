/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: 16
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px"
    },
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#E7B10A",
        light: "#F5F5F5",
        cream: "#F7F1E5",
        accent: {
          DEFAULT: "#0A6847",
          hover: "#0B5A3E"
        }
      },
      fontFamily: {
        greatVibes: "Great-Vibes",
        rabona: "Rabona",
        dmsans: "DM-Sans"
      }
    },
  },
  plugins: [],
}