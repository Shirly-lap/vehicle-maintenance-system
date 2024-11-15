import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-blue': '#7692FF',
        'custom-black': '#2F2B3D',
        'custom-green': '#217346',
        'custom-gray-primary': '#00000033',
        'custom-gray-secondary':'#9E9E9E',
        'custom-gray-tertiary':'#D9D9D9',
        'custom-red': '#FF7678',
        'custom-red-btn': '#CF0003'
      },
      boxShadow: {
        'custom': '0px 4px 10px 0px #00000040',  
      },
    },
  },
  plugins: [],
};
export default config;
