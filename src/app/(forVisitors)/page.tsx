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

export default function HomePage() {
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
          //   <HeaderCarouselSlide key={i} className="bg-slate-300" slideName={s.name} slideDate={s.date} slideUrl={s.url} />

          <SwiperSlide key={i} className="bg-slate-300 cursor-pointer">
            <a className="relative" href="#">
              <div className="absolute z-50 flex flex-col justify-center min-[900px]:items-start left-5 min-[900px]:left-20 bottom-14 min-[900px]:bottom-32 w-full">
                <div className="flex space-x-3 mb-3 min-[900px]:me-auto items-center">
                  <div className="px-2 pt-3 pb-2 bg-red-700 text-white text-sm leading-3 font-bold rounded-sm">Sala 1</div>
                  <div className="px-2 pt-3 pb-2 bg-red-700 text-white text-sm leading-3 font-bold rounded-sm">3D</div>
                </div>
                <h2 className="text-5xl min-[900px]:text-7xl text-white font-bold">{s.name}</h2>
                <p className="min-[900px]:text-2xl text-white font-thin mt-1">od {s.date}</p>
              </div>

              <div className="absolute top-0 bg-gradient-to-b from-black to-transparent opacity-25 w-full h-24"></div>
              <Image className="object-cover w-full h-full mx-auto" src={s.url} alt="slide-img" priority />
              <div className="absolute bottom-0 bg-gradient-to-t from-black opacity-45 w-full h-1/2"></div>
            </a>
          </SwiperSlide>
        ))}
      </HeaderCarousel>
    </>
  );
}
