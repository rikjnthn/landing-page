import { PT_Serif, Noto_Sans, Tomorrow } from "next/font/google";

export const pt_serif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const noto_sans = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const tomorrow = Tomorrow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
