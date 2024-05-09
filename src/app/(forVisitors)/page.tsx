"use client";

import SlideOne from "@/assets/images/hero-slides/joker-banner.png";
import SlideTwo from "@/assets/images/hero-slides/matrix-banner.png";
import SlideThree from "@/assets/images/hero-slides/dune-banner.jpg";

import { HeaderCarousel } from "@/components/custom/headerCarousel/carousel";
import { HeaderCarouselSlide } from "@/components/custom/headerCarousel/slide";
import { SwiperSlide } from "swiper/react";
import { Navbar } from "@/components/custom/navbar/navbar";

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
    <main className="relative">
      <Navbar />
      <HeaderCarousel className="h-[720px]">
        {getCarouselSlides().map((s, i) => (
          <SwiperSlide key={i} className="bg-slate-300 cursor-pointer">
            <HeaderCarouselSlide slideName={s.name} slideDate={s.date} slideUrl={s.url} />
          </SwiperSlide>
        ))}
      </HeaderCarousel>
    </main>
  );
}
