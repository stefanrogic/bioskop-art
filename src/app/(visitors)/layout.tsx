"use client";

import { LoadingAnimation } from "@/containers/loading-animation";
import { AnimatePresence, motion } from "framer-motion";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <>
      <AnimatePresence>
        <LoadingAnimation />
      </AnimatePresence>

      <main className="flex flex-col min-h-screen max-w-[1400px] mx-auto bg-white ">{children}</main>
    </>
  );
}
