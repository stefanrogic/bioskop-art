import { LoadingAnimation } from "@/containers/loading-animation";
import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
        <main className="bg-white max-w-[1400px] mx-auto">{children}</main>
      </body>
    </html>
  );
}
