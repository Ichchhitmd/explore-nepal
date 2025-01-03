import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

import { Lato } from "next/font/google";
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] });


export const metadata: Metadata = {
  title: "Explore Nepal",
  description: "Made with care by Ichchhit Devkota.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
