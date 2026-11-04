import { Inter, Plus_Jakarta_Sans } from "next/font/google";

/* Shared by every page in the (home) group, so each font is declared once. */
export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-ops-jakarta",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ops-inter",
  display: "swap",
});
