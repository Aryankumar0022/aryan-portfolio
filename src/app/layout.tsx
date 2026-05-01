import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
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
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased">
        <Nav />
        <main className="mx-auto max-w-page px-6 md:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
