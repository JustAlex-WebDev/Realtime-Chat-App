module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xxsm: "450px",
      xsm: "600px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xlg: "1124px",
      xl: "1280px",
    },
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        button: "var(--color-bg-button)",
        msg: "var(--color-bg-msg)",
      },
      textColor: {
        primary: "var(--color-text-primary)",
        button: "var(--color-text-button)",
        msg: "var(--color-text-msg)",
      },
      borderColor: {
        primary: "var(--color-border-primary)",
      },
    },
  },
  plugins: [],
};
