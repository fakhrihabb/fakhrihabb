import { VT323, Press_Start_2P } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "lenis/dist/lenis.css";

const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["latin"],
  display: "swap",
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  variable: "--font-press-start",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Fakhri Habibi | Portfolio",
  description: "Portfolio of Fakhri Habibi - Information Systems student specializing in Software Engineering and Project Management. Explore my projects, experience, and skills.",
  keywords: ["portfolio", "information systems", "software engineering", "project management", "web development"],
  authors: [{ name: "Fakhri Habibi" }],
  openGraph: {
    title: "Fakhri Habibi | Portfolio",
    description: "Portfolio showcasing software engineering and project management expertise",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${vt323.variable} ${pressStart2P.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
