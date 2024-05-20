"use client";

import { Navbar } from "@/components/custom/navbar";

export default function ArchiveLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return <>{children}</>;
}
