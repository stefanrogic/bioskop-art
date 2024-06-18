"use client";

import { MovieCard } from "@/components/custom/movie-card";
import Link from "next/link";

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
        <div className="flex flex-row gap-10 items-center w-full">
          <div className="flex flex-row gap-10 justify-center items-center w-full">
            <div className="hidden md:block h-[0.5px]  bg-[#db0b0b] flex-1"></div>
            <h1 className="font-bold text-4xl lg:text-5xl text-center">NA REPERTOARU</h1>
            <div className="hidden md:block h-[0.5px] bg-[#db0b0b] flex-1"></div>
          </div>
        </div>
      </div>

      <div className="relative px-5 xl:px-20">
        <div className="absolute inset-x-0 inset-y-10 h-10 my-auto top-0 w-full hidden md:flex flex-row justify-between items-center px-[60px] ">
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

        <div className="w-full flex flex-row justify-end gap-5 mb-5">
          <Link href="/arhiva" className="flex flex-row gap-1 items-center border-2 border-gray-500 hover:bg-gray-500 hover:text-white text-black px-10 py-3 ">
            {/* <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.30902 1C2.93025 1 2.58398 1.214 2.41459 1.55279L1.05279 4.27639C1.01807 4.34582 1 4.42238 1 4.5V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V4.5C14 4.42238 13.9819 4.34582 13.9472 4.27639L12.5854 1.55281C12.416 1.21403 12.0698 1.00003 11.691 1.00003L7.5 1.00001L3.30902 1ZM3.30902 2L7 2.00001V4H2.30902L3.30902 2ZM8 4V2.00002L11.691 2.00003L12.691 4H8ZM7.5 5H13V13H2V5H7.5ZM5.5 7C5.22386 7 5 7.22386 5 7.5C5 7.77614 5.22386 8 5.5 8H9.5C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7H5.5Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg> */}
            ARHIVA
          </Link>
          <button className="border-2 border-gray-500 hover:bg-gray-500 hover:text-white text-black px-10 py-3 ">FILTERI</button>
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
