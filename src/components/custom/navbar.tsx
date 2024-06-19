"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

export interface NavbarProps {}

const navLinks = [
  { link: "Početna", href: "/" },
  { link: "Repertoar", href: "/repertoar" },
  { link: "Arhiva", href: "/arhiva" },
  { link: "O nama", href: "/o-nama" },
];

function Navbar({}: NavbarProps): JSX.Element {
  const [menu, setMenu] = useState(false);

  const pathname = usePathname();

  return (
    <>
      {menu ? (
        <div className="bg-slate-200 fixed z-[100] w-full h-[100vh] flex flex-col">
          <div className="flex flex-row justify-end items-center h-[70px] bg-slate-200">
            <button className="text-black bg-slate-200 p-3 font-bold hover:bg-slate-300 ease-in-out duration-150" onClick={() => setMenu(false)}>
              <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {navLinks.map((l, i) => {
            const defaultStyles = "relative border border-slate-300 text-black bg-slate-200 font-bold h-full w-full text-center flex justify-center items-center px-10 hover:bg-slate-300 transition ease-in-out duration-150";
            const isActive = pathname.startsWith(l.href);

            return (
              <Link href={l.href} key={l.link + i} className={isActive ? "bg-slate-300 " + defaultStyles : defaultStyles} onClick={() => setMenu(false)} style={{ fontSize: "50px" }}>
                {l.link}
              </Link>
            );
          })}
          <Link href="/#contact" className="text-white bg-[#db0b0b] font-bold w-full h-full text-center flex justify-center items-center ms-auto hover:bg-[#a83838] transition ease-in-out duration-150" onClick={() => setMenu(false)}>
            Kontakt
          </Link>
        </div>
      ) : null}

      <nav className="sticky top-0 z-40 bg-white px-5 xl:px-20 w-full flex flex-row items-start border-b-4">
        <Link href="/">
          <motion.div className="fixed bg-[#db0b0b] cursor-pointer z-40" initial={{ top: "-145px" }} animate={{ top: 0 }} transition={{ duration: 0.2 }}>
            <motion.div whileHover={{ marginTop: "25px" }} whileTap={{ marginTop: "75px" }}>
              <img
                className="w-[70px] md:w-36 aspect-square"
                src="https://magtghzmtpusmbfbvwcc.supabase.co/storage/v1/object/sign/slike/ostalo/logo.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbGlrZS9vc3RhbG8vbG9nby5qcGciLCJpYXQiOjE3MTYyODE1OTUsImV4cCI6MzMyNTIyODE1OTV9.r9wzQmFI3R1xtMeM4QCdcKfuGF3wTp6TF82A7WtfpCk&t=2024-05-21T08%3A53%3A13.805Z"
                alt="nav-logo"
              />
            </motion.div>
          </motion.div>
        </Link>

        <div className="flex flex-row items-center w-full h-[70px]">
          <div className="hidden xl:flex flex-row items-center h-full w-full ms-[144px]">
            {navLinks.map((l, i) => {
              const defaultStyles = "relative text-black h-[100%] font-bold h-full text-center flex justify-center items-center px-10 hover:bg-slate-300 transition ease-in-out duration-150";

              const isActive = l.href.length > 1 ? pathname.startsWith(l.href) : l.href === pathname;

              return (
                <Link href={l.href} key={l.link + i} className={isActive ? "bg-slate-200 " + defaultStyles : defaultStyles}>
                  {l.link}
                  {isActive && <div className="absolute bottom-[-4px] w-full h-[4px] bg-red-600"></div>}
                </Link>
              );
            })}

            <Link href="/#contact" className="text-white bg-[#db0b0b] font-bold px-10 h-full text-center flex justify-center items-center ms-auto hover:bg-[#a83838] transition ease-in-out duration-150">
              KONTAKT
            </Link>
          </div>

          <div className="ms-auto flex xl:hidden flex-row items-center h-full">
            <button className="text-white bg-[#db0b0b] font-bold px-6 h-full text-center flex justify-center items-center ms-auto hover:bg-[#a83838] transition ease-in-out duration-150" onClick={() => setMenu(true)}>
              <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </>
  );
}
export { Navbar };
