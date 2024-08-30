/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["selector", '[data-mode="dark"]'],
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        bg_accent: "var(--bg-accent)",
        bg_fume: {
          100: "var(--bg-fume)",
          200: "var(--bg-fume-100)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
          placeholder: "var(--text-placeholder)",
          on_accent: "var(--text-on-accent)",
        },
        theme: "var(--theme)",
        theme_hover: "var(--theme-hover)",
        theme_accent: "var(--theme-active)",
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
        },
      },
    },
  },
  plugins: [],
};
