"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion";

interface DataProps {
  name: string;
  date: string;
  time?: string;
  sala?: string;
  url: string;
  link: string;
  tags: string[];
  trejler: string;
}

interface HeaderProps {
  data: DataProps[];
}

function Header({ data }: HeaderProps) {
  return (
    <header className="relative">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        effect={"fade"}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false, stopOnLastSlide: false }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        className="h-[720px] w-full relative"
      >
        {data?.map((s, i) => (
          <SwiperSlide key={i} className="bg-slate-300 cursor-pointer">
            <div className="absolute z-50 flex gap-5 xl:gap-0 flex-col xl:flex-row justify-between items-start xl:items-end left-5 xl:left-20 right-5 xl:right-20 bottom-5 xl:bottom-[84px]">
              <div>
                {s.tags ? (
                  <div className="flex flex-row">
                    {s.tags.map((t, i) => (
                      <div key={i} className="bg-yellow-400 text-black font-bold px-5 py-2 text-sm md:text-md">
                        {t}
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="p-10 bg-black flex flex-col gap-5">
                  <h2 className="text-3xl md:text-6xl text-white font-bold ">{s?.name}</h2>
                </div>
                <div className="flex flex-row">
                  <div className="bg-[#a83838] text-white font-bold px-5 py-2 text-sm md:text-md">{s?.date.toUpperCase()}</div>
                  {s.time ? <div className="bg-[#db0b0b] text-white font-bold px-5 py-2 text-sm md:text-md">{s.time}</div> : null}
                  {s.sala ? <div className="bg-red-500 text-white font-bold px-5 py-2 text-sm md:text-md">{s.sala}</div> : null}
                </div>
              </div>

              <div className="hidden xl:flex flex-col lg:flex-row gap-5">
                <Link href={s.link} className="bg-[#db0b0b] hover:bg-[#a83838] text-white px-14 py-5 font-bold">
                  DETALJNIJE
                </Link>
                <Link href={s.trejler} target="_blank" className="bg-[#db0b0b] hover:bg-[#a83838] text-white px-14 py-5 font-bold">
                  TREJLER
                </Link>
              </div>
            </div>

            <div className="absolute top-0 bg-gradient-to-b from-black to-transparent opacity-25 w-full h-24"></div>
            <img className="object-cover w-full h-full mx-auto" src={s?.url} alt="slide-img" />
            <div className="absolute bottom-0 bg-gradient-to-t from-black opacity-45 w-full h-1/2"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}
export { Header };
