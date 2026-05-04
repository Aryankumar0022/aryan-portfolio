import type { Metadata } from "next";
import { Inter, DM_Serif_Display, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aryan Kumar — Software Engineer",
  description:
    "Software Engineer focused on AI, Machine Learning, and Computer Vision. Building thoughtful systems at the intersection of research and product.",
  openGraph: {
    title: "Aryan Kumar",
    description:
      "Software Engineer focused on AI, Machine Learning, and Computer Vision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerifDisplay.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Nav />
          <main className="mx-auto max-w-page px-6 md:px-8">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
