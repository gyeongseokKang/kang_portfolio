const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(5px)" },
        },
      },
      animation: {
        "wave-2": "wave 2s ease-in-out infinite",
        "wave-4": "wave 4s ease-in-out infinite",
        "wave-6": "wave 6s ease-in-out infinite",
        "wave-8": "wave 8s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    nextui(),
  ],
  darkMode: "class",
};
