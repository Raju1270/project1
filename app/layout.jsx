"use client";
import "./globals.scss";
import { Inter } from "next/font/google";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footermain";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <html lang="en">
       <head>
        <title>Raju</title>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
