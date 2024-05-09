"use client";

import Link from "next/link";
import Image from "next/image";

import NavLogo from "@/assets/images/logo.jpg";
import SlideOne from "@/assets/images/hero-slides/joker-banner.png";
import SlideTwo from "@/assets/images/hero-slides/matrix-banner.png";
import SlideThree from "@/assets/images/hero-slides/dune-banner.jpg";

import { HeaderCarousel } from "@/components/custom/headerCarousel/carousel";
import { HeaderCarouselSlide } from "@/components/custom/headerCarousel/slide";
import { SwiperSlide } from "swiper/react";

const navLinks = [
  { link: "Početna", href: "pocetna" },
  { link: "Repertoar", href: "repertoar" },
  { link: "Arhiva", href: "arhiva" },
  { link: "O nama", href: "o-nama" },
  { link: "Kontakt", href: "kontakt" },
];

// ! KADA BAZA BUDE GOTOVA, PODACI CE SE POVLAČITI PREKO OVE FUNKCIJE
function getCarouselSlides() {
  return [
    { name: "Joker", date: "04 Marta", url: SlideOne },
    { name: "Matrix", date: "04 Marta", url: SlideTwo },
    { name: "Dina: Drugi Deo", date: "04 Marta", url: SlideThree },
  ];
}

export default function HomePage(): JSX.Element {
  return (
    <>
      <HeaderCarousel className="h-[720px]">
        <nav className="absolute top-0 z-50 px-20 w-full flex flex-row justify-between items-start">
          <Link href="/">
            <Image className="rounded-t-none rounded-b-lg w-36 aspect-square" src={NavLogo} alt="nav-logo" priority />
          </Link>

          <div className="flex flex-row gap-10 py-10">
            {navLinks.map((l, i) => (
              <Link href={l.href} key={l.link + i} className="text-white font-bold hover:underline">
                {l.link}
              </Link>
            ))}
          </div>
        </nav>

        {getCarouselSlides().map((s, i) => (
          <SwiperSlide key={i} className="bg-slate-300 cursor-pointer">
            <HeaderCarouselSlide slideName={s.name} slideDate={s.date} slideUrl={s.url} />
          </SwiperSlide>
        ))}
      </HeaderCarousel>
    </>
  );
}
