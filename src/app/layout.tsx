import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space",
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
        className="
          bg-black
          text-white
          font-mono
          overscroll-none
          touch-manipulation
        "
        style={{
          fontFamily: "var(--font-space)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
