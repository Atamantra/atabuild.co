import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: "#DBFF26",
          hover: "#c8eb1f",
        },
        viator: "#00D68F",
        gyg: "#FF5533",
        whatsapp: "#25D366",
      },
      fontFamily: {
        sans: [
          "'Plus Jakarta Sans'",
          "Outfit",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        display: ["Outfit", "'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        "glow-lime":
          "0 10px 35px -6px rgba(219, 255, 38, 0.4), inset 0 1px 0 rgba(255,255,255,0.6)",
        "3d-card":
          "0 26px 52px -14px rgba(0, 0, 0, 0.92), 0 8px 20px -6px rgba(0, 0, 0, 0.75), inset 0 1px 0 0 rgba(255, 255, 255, 0.16)",
        "3d-lime":
          "0 28px 60px -14px rgba(219, 255, 38, 0.18), 0 12px 24px -8px rgba(0, 0, 0, 0.9), inset 0 1px 0 0 rgba(219, 255, 38, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
