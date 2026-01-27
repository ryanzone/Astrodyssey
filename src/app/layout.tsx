import type { Metadata } from "next";
import "./globals.css";
import { Oxanium } from "next/font/google";
import Navbar from "@/components/navbar";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AstroOdyssey",
  description: "Space Exploration App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${oxanium.className}
          bg-black
          text-white
          overscroll-none
          touch-manipulation
        `}
      >
        <Navbar />

        <main className="pt-14">
          {children}
        </main>
      </body>
    </html>
  );
}
