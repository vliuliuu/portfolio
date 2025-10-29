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


// DEFAULT FONT is manrope :D

const manropeFont = localFont({
  src:[
    {
      path: './fonts/manrope/Manrope-ExtraLight.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/manrope/Manrope-Light.ttf',
      weight:'200',
      style: 'normal',
    },
    {
      path: './fonts/manrope/Manrope-Medium.ttf',
      weight:'300',
      style: 'normal',
    },
    {
      path: './fonts/manrope/Manrope-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ]
});
const manrope_bold_Font = localFont({
  src: [
    {
      path: './fonts/manrope/Manrope-SemiBold.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/manrope/Manrope-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/manrope/Manrope-ExtraBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
    variable: '--font-manrope',
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
    <html lang="en" className="dark">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className={manropeFont.className}>
        {children}
      </body>
    </html>
  );
}
