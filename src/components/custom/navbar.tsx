import Link from "next/link";
import Image from "next/image";
import NavLogo from "@/assets/images/logo.jpg";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navbarVariants = cva("absolute top-0 z-50 px-20 w-full flex flex-row justify-between items-start");

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof navbarVariants> {}

const navLinks = [
  { link: "Početna", href: "pocetna" },
  { link: "Repertoar", href: "repertoar" },
  { link: "Arhiva", href: "arhiva" },
  { link: "O nama", href: "o-nama" },
];

function Navbar({ className }: NavbarProps): JSX.Element {
  return (
    <nav className={cn(navbarVariants(), className)}>
      <Link href="/" className="bg-[#db0b0b]">
        <motion.div whileHover={{ marginTop: "25px" }} whileTap={{ marginTop: "150px" }}>
          <Image className="w-36 aspect-square" src={NavLogo} alt="nav-logo" priority />
        </motion.div>
      </Link>

      <div className="flex flex-row items-center gap-7 py-10">
        {navLinks.map((l, i) => (
          <Link href={l.href} key={l.link + i} className="text-white font-bold hover:underline">
            {l.link}
          </Link>
        ))}

        <Link href="#" className="text-white border-2 border-white px-10 py-3 font-bold hover:bg-white hover:text-black ease-in duration-300">
          Kontakt
        </Link>
      </div>
    </nav>
  );
}
export { Navbar, navbarVariants };
