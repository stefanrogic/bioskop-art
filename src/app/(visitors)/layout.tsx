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

      <main className="flex flex-col min-h-screen max-w-[1400px] px-5 lg:px-0 mx-auto bg-white">{children}</main>
    </>
  );
}
