/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        BounceIN: {
          "0%": { opacity: "0", transform: "translateY(-10px);" },

          "60%": { opacity: "1", transform: "translateY(30px);" },
          "80%": { opacity: "1", transform: "translateY(-10px);" },
          "100%": { opacity: "1", transform: "translateY(0);" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
        "Bounce-InDown": "BounceIN 5s  infinite",
      },
    },
  },
  plugins: [require("kutty")],
};
