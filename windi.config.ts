import { resolve } from "path";
import { defineConfig } from "windicss/helpers";

export default defineConfig({
  darkMode: "class",
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,
  extract: {
    include: [resolve(__dirname, "src/**/*.{vue,html}")],
  },
  theme: {
    extend: {
      keyframes: {
        nico: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        nico: "nico 20s linear",
      },
    },
  },
});
