/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode support
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#2563eb",
          dark: "#60a5fa",
        },
        secondary: {
          light: "#14b8a6",
          dark: "#5eead4",
        },
        accent: {
          light: "#f97316",
          dark: "#fb923c",
        },
        background: {
          light: "#f8fafc",
          dark: "#1e293b",
        },
        surface: {
          light: "#ffffff",
          dark: "#0f172a",
        },
        error: {
          light: "#dc2626",
          dark: "#f87171",
        },
        success: {
          light: "#16a34a",
          dark: "#4ade80",
        },
        warning: {
          light: "#facc15",
          dark: "#fde047",
        },
        info: {
          light: "#3b82f6",
          dark: "#93c5fd",
        },
        muted: {
          light: "#94a3b8",
          dark: "#64748b",
        },
      },
    },
  },
  plugins: [],
};
