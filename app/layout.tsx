import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import { TAGLINE } from "@/lib/constants";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://peaktrekker.com"),
  title: "Flipper Grill | Peaktrekker",
  description: `${TAGLINE} The first synchronized multi skewer grilling system that flips everything at once.`,
  openGraph: {
    title: "Flipper Grill | Peaktrekker",
    description: TAGLINE,
    images: ["/assets/grill-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <div className="noiseOverlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
