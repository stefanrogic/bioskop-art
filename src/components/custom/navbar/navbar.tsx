import Link from "next/link";
import Image from "next/image";
import NavLogo from "@/assets/images/logo.jpg";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const navbarVariants = cva("absolute top-0 z-50 px-20 w-full flex flex-row justify-between items-start");

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof navbarVariants> {}

const navLinks = [
  { link: "Početna", href: "pocetna" },
  { link: "Repertoar", href: "repertoar" },
  { link: "Arhiva", href: "arhiva" },
  { link: "O nama", href: "o-nama" },
  { link: "Kontakt", href: "kontakt" },
];

function Navbar({ className }: NavbarProps): JSX.Element {
  return (
    <nav className={cn(navbarVariants(), className)}>
      <Link href="/">
        <Image className="rounded-t-none rounded-b-lg w-36 aspect-square" src={NavLogo} alt="nav-logo" priority />
      </Link>

      <div className="flex flex-row gap-7 py-10">
        {navLinks.map((l, i) => (
          <Link href={l.href} key={l.link + i} className="text-white font-bold hover:underline">
            {l.link}
          </Link>
        ))}
      </div>
    </nav>
  );
}
export { Navbar, navbarVariants };
