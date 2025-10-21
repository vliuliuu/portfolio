import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"

//FONTS

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mochiFont = localFont({
  src: './fonts/Mochibop-Demo.ttf', 
});



//METADATA

export const metadata: Metadata = {
  title: "hi!",
  description: "Portfolio site by Valentina Liu : ]",
};

//PAGE LAYOUT
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className={mochiFont.className}>
        {children}
      </body>
    </html>
  );
}
