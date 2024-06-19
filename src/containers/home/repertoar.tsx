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
            <div className="hidden md:block h-[1px] bg-[#db0b0b] flex-1"></div>
            <h1 className="font-bold text-4xl lg:text-5xl text-center">NA REPERTOARU</h1>
            <div className="hidden md:block h-[1px] bg-[#db0b0b] flex-1"></div>
          </div>
        </div>
      </div>

      <div className="relative px-5 xl:px-20">
        <div className="absolute inset-x-0 inset-y-10 h-10 my-auto top-0 w-full hidden lg:flex flex-row justify-between items-center px-[60px] ">
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
          <Link href="/arhiva" className="flex flex-row gap-2 items-center bg-[#db0b0b] hover:bg-red-700 text-white px-10 py-3 font-bold">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_116_2819)">
                <path
                  d="M12.643 15.5C13.979 15.5 15 14.345 15 13V5.5H1V13C1 14.345 2.021 15.5 3.357 15.5H12.643ZM5.5 7.5H10.5C10.6326 7.5 10.7598 7.55268 10.8536 7.64645C10.9473 7.74021 11 7.86739 11 8C11 8.13261 10.9473 8.25979 10.8536 8.35355C10.7598 8.44732 10.6326 8.5 10.5 8.5H5.5C5.36739 8.5 5.24021 8.44732 5.14645 8.35355C5.05268 8.25979 5 8.13261 5 8C5 7.86739 5.05268 7.74021 5.14645 7.64645C5.24021 7.55268 5.36739 7.5 5.5 7.5ZM0.8 1.5C0.587827 1.5 0.384344 1.58429 0.234315 1.73431C0.0842855 1.88434 0 2.08783 0 2.3L0 3.5C0 3.71217 0.0842855 3.91566 0.234315 4.06569C0.384344 4.21571 0.587827 4.3 0.8 4.3H15.2C15.4122 4.3 15.6157 4.21571 15.7657 4.06569C15.9157 3.91566 16 3.71217 16 3.5V2.3C16 2.08783 15.9157 1.88434 15.7657 1.73431C15.6157 1.58429 15.4122 1.5 15.2 1.5H0.8Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_116_2819">
                  <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
            ARHIVA
          </Link>
        </div>

        <Swiper
          modules={[Navigation]}
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
            <SwiperSlide key={m.id} className="max-h-[638px]">
              <MovieCard data={m as DataProps} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
export { RepertoarContainer };
