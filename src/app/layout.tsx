import "./globals.css";

import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import { Footer } from "@/containers/footer";
import { Navbar } from "@/components/custom/navbar";

const roboto = Roboto_Condensed({ subsets: ["latin"] });

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
