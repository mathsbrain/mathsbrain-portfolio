import type { Config } from "tailwindcss";

const config: Config = {
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
      keyframes: {
        homeImg: {
          '0%, 100%': { "border-radius": "50% 20% 55% 70% / 50% 20% 70% 40%;" },
          '50%': { "border-radius": '30% 60% 70% 40% / 50% 60% 30% 60%;' },
        }
      },
      animation: {
        homeImg: 'homeImg 5s ease-in-out infinite',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'mdlg': '928px',
        // => @media (min-width: 928px) { ... }
  
        'lg': '1124px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1300px',
        // => @media (min-width: 1300px) { ... }
  
        '2xl': '1600px',
        // => @media (min-width: 1600px) { ... }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
