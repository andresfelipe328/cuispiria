import "./globals.css";
import type { Metadata } from "next";

import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

import { Josefin_Sans, Crimson_Pro } from "next/font/google";
const titleFont = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-title",
});
const textFont = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-text",
});

export const metadata: Metadata = {
  title: "Cuispiria - Home",
  description: "Recepies & Recepie Management App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${titleFont.variable} ${textFont.variable}`}>
      <body className="overflow-hidden">
        <main className="h-screen flex flex-col overflow-auto">
          <Navbar />
          {children}
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
}
