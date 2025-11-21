const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        accent: "#FBBF24",
        dark: "#1E293B",
        light: "#F8FAFC",
        maroon: '#800000', // Hex code for maroon
        // You can also define shades of maroon:
        'maroon-light': '#A0522D',
        'maroon-dark': '#660000',
//         | Purpose                   | Color         | Hex         |
// | ------------------------- | ------------- | ----------- |
// | Primary (Navbar, Buttons) | Maroon Base   | **#860000** |
// | Secondary                 | Deep Wine     | **#5A0000** |
// | Hover Dark                | Dark Maroon   | **#6E0000** |
// | Light Background          | Rose Tint     | **#F5E6E6** |
// | Premium Highlight         | Gold          | **#C9A93A** |
// | Secondary Gold            | Soft Gold     | **#E6D68A** |
// | Neutral Section           | Ivory         | **#FFF9F5** |
// | Text Dark                 | Blackish Gray | **#1A1A1A** |

      },
    },
  },
};

export default config;
