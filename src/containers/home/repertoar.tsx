"use client";

import { MovieCard } from "@/components/custom/movie-card";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface DataProps {
  id: number;
  naziv: string;
  poster: string;
  slug: string;
  zanr: string[];
  datum_pocetka: Date;
  datum_zavrsetka: Date;
  tag: string[];
}

interface RepertoarProps {
  data: DataProps[] | null;
}

function RepertoarContainer({ data }: RepertoarProps) {
  return (
    <section className="flex flex-col gap-[50px]" id="repertoar">
      <div className="flex flex-col md:flex-row justify-between px-5 xl:px-20">
        <div className="flex flex-row gap-5 items-center w-full">
          <div className="h-[0.5px] flex-1 bg-[#db0b0b]"></div>
          <h1 className="font-bold text-5xl flex-1 text-center">NA REPERTOARU</h1>
          <div className="h-[0.5px] flex-1 bg-[#db0b0b]"></div>
        </div>
      </div>

      <div className="relative px-5 xl:px-20">
        <div className="absolute inset-x-0 inset-y-32 mx-auto top-0 w-full hidden md:flex flex-row justify-between items-center px-[60px]">
          <button className="z-30 swiper-button-prev-movies rounded-full bg-[#db0b0b] border-2 border-white text-white p-2">
            <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <button className="z-30 swiper-button-next-movies rounded-full bg-[#db0b0b] border-2 border-white text-white p-2">
            <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <Swiper
          modules={[Navigation]}
          scrollbar={{ el: ".swiper-scrollbar", draggable: true }}
          observer={true}
          observeParents={true}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            500: { slidesPerView: 2.5, spaceBetween: 20 },
            800: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
          }}
          navigation={{ nextEl: ".swiper-button-next-movies", prevEl: ".swiper-button-prev-movies" }}
        >
          {data?.map((m) => (
            <SwiperSlide key={m.id}>
              <MovieCard data={m as DataProps} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
export { RepertoarContainer };
