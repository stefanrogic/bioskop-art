"use client";

import Link from "next/link";

import { motion } from "framer-motion";

export interface HeaderNavbarProps {}

const navLinks = [
  { link: "Početna", href: "/" },
  { link: "Repertoar", href: "repertoar" },
  { link: "Arhiva", href: "arhiva" },
  { link: "O nama", href: "o-nama" },
];

function HeaderNavbar({}: HeaderNavbarProps): JSX.Element {
  return (
    <nav className="absolute top-0 z-50 px-5 lg:px-20 w-full flex flex-row justify-between items-start">
      <motion.div className=" absolute bg-[#db0b0b] cursor-pointer" initial={{ top: "-145px" }} animate={{ top: 0 }} transition={{ duration: 0.2 }}>
        <Link href="/">
          <motion.div whileHover={{ marginTop: "25px" }} whileTap={{ marginTop: "75px" }}>
            <img
              className="w-20 md:w-36 aspect-square"
              src="https://magtghzmtpusmbfbvwcc.supabase.co/storage/v1/object/sign/slike/ostalo/logo.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbGlrZS9vc3RhbG8vbG9nby5qcGciLCJpYXQiOjE3MTYyODE1OTUsImV4cCI6MzMyNTIyODE1OTV9.r9wzQmFI3R1xtMeM4QCdcKfuGF3wTp6TF82A7WtfpCk&t=2024-05-21T08%3A53%3A13.805Z"
              alt="nav-logo"
            />
          </motion.div>
        </Link>
      </motion.div>

      <div className="ms-auto hidden md:flex flex-row items-center gap-7 py-10">
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
export { HeaderNavbar };
