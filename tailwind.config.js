/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // enables dark mode using 'class'
  theme: {
    extend: {
      colors: {
        /* ===== LIGHT MODE ===== */
        background: '#f8f8f8',          // light gray-white
        foreground: '#262626',          // dark charcoal
        card: '#ffffff',                // white
        'card-foreground': '#262626',   // dark charcoal
        popover: '#ffffff',
        'popover-foreground': '#262626',
        primary: '#1e1e1e',             // near-black
        'primary-foreground': '#f8f8f8',
        secondary: '#f3f3f3',           // very light gray
        'secondary-foreground': '#1e1e1e',
        muted: '#d9d9d9',               // medium gray
        'muted-foreground': '#808080',  // mid gray
        accent: '#daa520',               // gold
        'accent-foreground': '#1e1e1e',
        destructive: '#ef4444',          // red
        'destructive-foreground': '#ffffff',
        border: '#e5e5e5',
        input: '#f3f3f3',
        ring: '#daa520',

        /* ===== DARK MODE ===== */
        dark: {
          background: '#1a1a1a',
          foreground: '#f2f2f2',
          card: '#262626',
          'card-foreground': '#f2f2f2',
          primary: '#f2f2f2',
          'primary-foreground': '#1e1e1e',
          secondary: '#333333',
          'secondary-foreground': '#f2f2f2',
          muted: '#404040',
          'muted-foreground': '#b3b3b3',
          accent: '#daa520',
          'accent-foreground': '#1e1e1e',
          border: '#404040',
          input: '#262626',
          ring: '#daa520',
        },
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

