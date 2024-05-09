"use client";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex flex-col min-h-screen max-w-[1400px] px-5 lg:px-0 mx-auto">{children}</main>
    </>
  );
}
