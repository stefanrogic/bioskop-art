import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/containers/footer";
import { LoadingAnimation } from "@/containers/loading-animation";
import { HeaderNavbar } from "@/components/custom/header-navbar";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <LoadingAnimation />
        <main className="bg-white text-black max-w-[1400px] mx-auto relative">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
