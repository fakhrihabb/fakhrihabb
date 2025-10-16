import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Fakhri Habibi | Information Systems Student",
  description: "Portfolio of Fakhri Habibi - Information Systems student specializing in Software Engineering and Project Management. Explore my projects, experience, and skills.",
  keywords: ["portfolio", "information systems", "software engineering", "project management", "web development"],
  authors: [{ name: "Fakhri Habibi" }],
  openGraph: {
    title: "Fakhri Habibi | Information Systems Student",
    description: "Portfolio showcasing software engineering and project management expertise",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
