"use client";

import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function BlogContainer(): JSX.Element {
  const [cardWidth, setCardWidth] = useState("[484px]");

  useEffect(() => {
    setTimeout(() => setCardWidth("full"), 500);
  });

  return (
    <section className="flex flex-col gap-[50px]" id="repertoar">
      <div className="flex flex-col md:flex-row justify-between px-5 xl:px-20">
        <div className="flex flex-row gap-10 justify-center items-center w-full">
          <div className="hidden md:block h-[0.5px]  bg-[#db0b0b] flex-1"></div>
          <h1 className="font-bold text-4xl lg:text-5xl text-center">IZDVAJAMO ZA VAS</h1>
          <div className="hidden md:block h-[0.5px] bg-[#db0b0b] flex-1"></div>
        </div>
      </div>

      <div className="relative px-5 xl:px-20">
        <div className="absolute inset-x-0 inset-y-10 h-10 my-auto top-0 w-full hidden md:flex flex-row justify-between items-center px-[60px] ">
          <button className="z-30 swiper-button-prev-blog rounded-full bg-[#db0b0b] border-2 border-white text-white p-2">
            <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <button className="z-30 swiper-button-next-blog rounded-full bg-[#db0b0b] border-2 border-white text-white p-2">
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
          }}
          navigation={{ nextEl: ".swiper-button-next-blog", prevEl: ".swiper-button-prev-blog" }}
        >
          <SwiperSlide>
            <div className="flex flex-col gap-5">
              <div className={`w-${cardWidth} aspect-video bg-gray-500`}></div>
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-bold">Naslov</h3>
                <p className="font-light">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro asperiores nemo, sequi molestias aliquid commodi nihil quae quo voluptas obcaecati ullam amet repellendus veritatis. Quibusdam sequi fuga totam cum.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-5">
              <div className={`w-${cardWidth} aspect-video bg-gray-500`}></div>
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-bold">Naslov</h3>
                <p className="font-light">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro asperiores nemo, sequi molestias aliquid commodi nihil quae quo voluptas obcaecati ullam amet repellendus veritatis. Quibusdam sequi fuga totam cum.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-5">
              <div className={`w-${cardWidth} aspect-video bg-gray-500`}></div>
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-bold">Naslov</h3>
                <p className="font-light">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro asperiores nemo, sequi molestias aliquid commodi nihil quae quo voluptas obcaecati ullam amet repellendus veritatis. Quibusdam sequi fuga totam cum.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-5">
              <div className="w-full aspect-video bg-gray-500"></div>
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-bold">Naslov</h3>
                <p className="font-light">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro asperiores nemo, sequi molestias aliquid commodi nihil quae quo voluptas obcaecati ullam amet repellendus veritatis. Quibusdam sequi fuga totam cum.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
export { BlogContainer };
