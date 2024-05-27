"use client";

import Link from "next/link";

import { motion } from "framer-motion";

export interface HeaderNavbarProps {
  absolute: boolean;
}

const navLinks = [
  { link: "Početna", href: "/" },
  { link: "Repertoar", href: "/#repertoar" },
  { link: "Arhiva", href: "arhiva" },
  { link: "O nama", href: "o-nama" },
];

function HeaderNavbar({ absolute = true }: HeaderNavbarProps): JSX.Element {
  return (
    <nav className={`${absolute ? "absolute" : ""} top-0 z-50 px-5 lg:px-20 w-full flex flex-row justify-between items-start`}>
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

      <div className="ms-auto flex flex-row items-center gap-7 pt-5 md:pt-10">
        <div className="hidden md:flex flex-row items-center gap-7">
          {navLinks.map((l, i) => (
            <Link href={l.href} key={l.link + i} className={`${absolute ? "text-white" : "text-black"} font-bold hover:underline`}>
              {l.link}
            </Link>
          ))}

          <Link
            href="/#contact"
            className={`${absolute ? "text-white" : "text-black"} border-2  ${absolute ? "border-white" : "border-black"} p-3 font-bold ${absolute ? "hover:text-black" : "hover:text-white"} ${
              absolute ? "hover:bg-white" : "hover:bg-black"
            } ease-in duration-300 px-10 py-3`}
          >
            Kontakt
          </Link>
        </div>

        <div className="flex md:hidden flex-row items-center">
          <button className={`${absolute ? "text-white" : "text-black"} border-2  ${absolute ? "border-white" : "border-black"} p-3 font-bold ${absolute ? "hover:text-white" : "hover:text-black"} ease-in duration-300`}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
export { HeaderNavbar };
