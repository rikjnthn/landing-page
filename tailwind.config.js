/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "478px",
      },
      colors: {
        "orange-1": "#EE2417",
        "orange-2": "#D6360B",
        "orange-3": "#F7600C",
        "red-1": "#D60B42",
        "purple-1": "#F70CC1",
      },
    },
  },
  plugins: [],
};
