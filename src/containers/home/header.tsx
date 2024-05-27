"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { HeaderNavbar } from "@/components/custom/header-navbar";

interface DataProps {
  name: string;
  date: string;
  url: string;
}

interface HeaderProps {
  data: DataProps[];
}

function Header({ data }: HeaderProps) {
  return (
    <header className="relative">
      <HeaderNavbar absolute={true} />

      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        effect={"fade"}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false, stopOnLastSlide: false }}
        navigation={{ nextEl: ".swiper-button-next-hero", prevEl: ".swiper-button-prev-hero" }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        className="h-[820px] w-full relative"
      >
        {data?.map((s, i) => (
          <SwiperSlide key={i} className="bg-slate-300 cursor-pointer">
            <Link href="/" className="relative cursor-pointer">
              <div className="absolute z-50 flex flex-col items-start left-5 lg:left-20 bottom-10 lg:bottom-[105px] w-full">
                <div className="flex space-x-3 mb-3 min-[900px]:me-auto items-center">
                  <div className="px-2 py-1 bg-red-700 text-white text-[12px] font-bold">Sala 1</div>
                  <div className="px-2 py-1 bg-red-700 text-white text-[12px] font-bold">3D</div>
                </div>
                <h2 className="text-5xl min-[900px]:text-7xl text-white font-bold">{s?.name}</h2>
                <p className="min-[900px]:text-2xl text-slate-300 font-light mt-1">od {s?.date}</p>
              </div>

              <div className="absolute top-0 bg-gradient-to-b from-black to-transparent opacity-25 w-full h-24"></div>
              <img className="object-cover w-full h-full mx-auto" src={s?.url} alt="slide-img" />
              <div className="absolute bottom-0 bg-gradient-to-t from-black opacity-45 w-full h-1/2"></div>
            </Link>
          </SwiperSlide>
        ))}

        <div className="hidden lg:block">
          <button className="absolute bottom-10 z-50 rounded-full border border-white bg-transparent text-white hover:bg-white hover:text-black p-3 left-20 swiper-button-prev-hero">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <button className="absolute bottom-10 z-50 rounded-full border border-white bg-transparent hover:bg-white text-white hover:text-black p-3 right-20 swiper-button-next-hero">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </Swiper>
    </header>
  );
}
export { Header };
