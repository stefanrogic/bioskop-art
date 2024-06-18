import "./globals.css";

import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import { Footer } from "@/containers/footer";
import { Navbar } from "@/components/custom/navbar";
import { Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Condensed({ subsets: ["latin"] });
const variants = { show: { height: "100vh" }, hide: { height: 0, transition: { height: { duration: 1, delay: 1 } } } };

export const metadata: Metadata = {
  title: "Bioskop Art",
  description: "by Cinema City Užice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div>
          <main className="bg-white text-black max-w-[1400px] mx-auto relative box-border">
            <Navbar />
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
