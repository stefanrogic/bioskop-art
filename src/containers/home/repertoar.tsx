"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface DataProps {
  id: number;
  naziv: string;
  poster?: string;
}

interface RepertoarProps {
  data: DataProps[] | null;
}

function RepertoarContainer({ data }: RepertoarProps) {
  return (
    <section className="space-y-10 mt-10 md:mt-20 scroll-m-20" id="repertoar">
      <div className="flex flex-col md:flex-row justify-between px-5 lg:px-20">
        <div className="flex flex-col items-start">
          <h2 className="font-bold text-gray-700">TRENUTNO NA</h2>
          <h1 className="font-bold text-4xl min-[768px]:text-5xl">REPERTOARU</h1>
        </div>

        <div className="w-full hidden md:flex flex-col lg:ms-20 mt-1">
          <div className="w-full flex flex-row space-x-5 md:justify-end items-center ">
            <button className="swiper-button-prev-movies rounded-full bg-red-500 text-white p-2">
              <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <button className="swiper-button-next-movies rounded-full bg-red-500 text-white p-2">
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

          {/* <div className="hidden initial min-[768px]:block swiper-scrollbar cursor-pointer ms-auto w-full" style={{ position: "initial" }}></div> */}
        </div>
      </div>

      <div className="block px-5 lg:px-20">
        <Swiper
          modules={[Navigation]}
          scrollbar={{ el: ".swiper-scrollbar", draggable: true }}
          observer={true}
          observeParents={true}
          breakpoints={{
            420: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            930: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          navigation={{ nextEl: ".swiper-button-next-movies", prevEl: ".swiper-button-prev-movies" }}
        >
          {data?.map((m) => (
            <SwiperSlide key={m.id}>
              <div className="w-full aspect-[4/6] bg-slate-500">
                <img className="object-cover w-full h-full" src={m.poster} alt="movie-poster" />
              </div>
              <h3 className="text-2xl font-semibold mt-5 text-black">{m.naziv}</h3>
              <span>od 04 Aprila</span>

              {/*<MovieCard {...(m as MovieData)} />*/}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
export { RepertoarContainer };
