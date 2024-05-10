"use client";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <>
      <main className="flex flex-col min-h-screen max-w-[1400px] px-5 lg:px-0 mx-auto bg-white">{children}</main>
    </>
  );
}
