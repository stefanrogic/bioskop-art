"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useState } from "react";

interface DataProps {
  id: number;
  naziv: string;
  poster?: string;
  slug: string;
  zanr: string[];
  opis?: string;
  trejler_url?: string;
}

interface Props {
  moviesData: DataProps[] | null;
}

function MovieContainer({ moviesData }: Props) {
  const [revealVideo, setRevealVideo] = useState(false);
  const { slug } = useParams() as { slug: string };
  const data = moviesData?.find((m) => m.slug === slug);

  return (
    <div className="flex flex-col gap-[100px]">
      <section className="flex flex-col md:flex-row mt-[20px] md:mt-[100px] gap-[50px] px-5 xl:px-20" id={slug}>
        <div className="md:w-1/3">
          <div className="md:sticky md:top-40 w-full aspect-[3/4] bg-gray-400">
            <img src="https://www.tuck.rs/wp-content/uploads/2024/06/1717769665INOT2_006C_G_SRP-RS_70x100__copy.jpg" alt="movie-poster" className="w-full object-cover" />
          </div>
        </div>
        <div className="md:w-2/3 flex flex-col gap-[30px] relative">
          <div>
            <h2 className="font-bold text-5xl">U Mojoj Glavi</h2>
            <p className="text-xl">od 13. Juna</p>
          </div>

          <div className="flex flex-row gap-2">
            <div className="bg-[#db0b0b] text-white text-sm font-bold px-3 py-1">USKORO</div>
            <div className="bg-yellow-300 text-black text-sm font-bold px-3 py-1">SIHRONIZOVANO</div>
            <div className="bg-yellow-300 text-black text-sm font-bold px-3 py-1">3D</div>
          </div>

          <div>
            <p className="text-lg font-light">
              Ponovo zavirujemo u um tinejdžerke Rajli. Glasići u njenoj glavi poznaju je vrlo dobro, međutim promene su izvesne i to baš u trenutku kada glavna komanda počne iznenada da se ruši kako bi se napravio prostor za nešto potpuno
              neočekivano, Novu emociju! Dotadašnja Radost, Tuga, Bes, Strah i Gađenje, koji uspešno vode operaciju na svim nivoima, nisu sigurni kako se osećaju kada se pred njima pojavi Anksioznost. Deluje kao da ona nije sama.
            </p>
          </div>

          <div className="h-[0.5px] bg-[#db0b0b]"></div>

          <div className="grid grid-cols-2 gap-x-[30px] gap-y-[30px]">
            <div>
              <h4 className="font-bold text-xl">Duzina Trajanja Filma</h4>
              <p className="font-light">1h 37m</p>
            </div>

            <div>
              <h4 className="font-bold text-xl">Prikazivanje</h4>
              <p className="font-light">od 13. do 24. Juna 2024.</p>
            </div>

            <div>
              <h4 className="font-bold text-xl">Zanr</h4>
              <p className="font-light">Animirani, Avantura, Komedija, Porodični, Sinhronizovano</p>
            </div>

            <div>
              <h4 className="font-bold text-xl">Rezija</h4>
              <p className="font-light">Kelsey Mann</p>
            </div>

            <div>
              <h4 className="font-bold text-xl">Glumci</h4>
              <p className="font-light">Diane Lane, Amy Poehler, Tony Hale, Lewis Black, Phyllis Smith, Liza Lapira, Maya Hawke</p>
            </div>

            <div>
              <h4 className="font-bold text-xl">Scenario</h4>
              <p className="font-light">Dave Holstein, Meg LeFauve</p>
            </div>
          </div>

          <div className="w-full h-[100px] border-[0.5px] flex justify-start items-center gap-[50px]">
            <div className="h-full aspect-square  bg-[#db0b0b] flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" className="bi bi-ticket-detailed" viewBox="0 0 16 16">
                <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" />
                <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z" />
              </svg>
            </div>
            <h4 className="font-bold text-lg">Cena ulaznice: 400 din - Karte se kupuju u biletarnici na dan projekcije.</h4>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[50px]" id="repertoar">
        <div className="flex flex-col md:flex-row justify-between px-5 xl:px-20">
          <div className="flex flex-row gap-10 justify-center items-center w-full">
            <div className="hidden md:block h-[0.5px]  bg-[#db0b0b] flex-1"></div>
            <h1 className="font-bold text-4xl lg:text-5xl text-center">TREJLER</h1>
            <div className="hidden md:block h-[0.5px] bg-[#db0b0b] flex-1"></div>
          </div>
        </div>

        <div className="px-5 xl:px-20">
          <div className="relative w-full aspect-video bg-gray-800">
            <AnimatePresence>
              {!revealVideo ? (
                <motion.div
                  key={0}
                  className="absolute w-full flex justify-center items-center aspect-video"
                  style={{
                    backgroundImage: 'url("https://m.cdm.me/wp-content/uploads/2024/06/U-mojoj-glavi-2-e1718187780563.jpg")',
                    backgroundSize: "cover",
                  }}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { opacity: { duration: 1 } } }}
                >
                  <motion.button className="p-7 bg-[#db0b0b] hover:bg-red-700 rounded-full" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setRevealVideo(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-play-fill" viewBox="0 0 16 16">
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                    </svg>
                  </motion.button>
                </motion.div>
              ) : (
                <motion.iframe
                  key={0}
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/zJ7_-eGfAYI?autoplay=1&loop=1&autopause=0&mute=1"
                  allow="autoplay"
                  title="YouTube video player"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { opacity: { duration: 1 } } }}
                  allowFullScreen
                ></motion.iframe>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[50px]" id="repertoar">
        <div className="flex flex-col md:flex-row justify-between px-5 xl:px-20">
          <div className="flex flex-row gap-10 justify-center items-center w-full">
            <div className="hidden md:block h-[0.5px]  bg-[#db0b0b] flex-1"></div>
            <h1 className="font-bold text-4xl lg:text-5xl text-center">GALERIJA</h1>
            <div className="hidden md:block h-[0.5px] bg-[#db0b0b] flex-1"></div>
          </div>
        </div>

        <div className="relative px-5 xl:px-20">
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
            className="w-full aspect-video select-none"
          >
            <SwiperSlide>
              <img src="https://www.dominomagazin.com/wp-content/uploads/2023/11/inside-out-2-u-mojoj-glavi-2.webp" alt="movie-image" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.politika.rs/thumbs//upload/Article/Image/2023_11///677z381_INSIDE-OUT-2.jpg" alt="movie-image" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.mcf.rs/upload/Movie/Galleries/2024-03/INSIDE%20OUT%202-ONLINE-USE-i325_13a_pub.pub16.8233333333333.jpeg" alt="movie-image" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://deadline.com/wp-content/uploads/2024/05/INSIDE-OUT-2-ONLINE-USE-i140_15mT_pub.pub16.1581.jpg" alt="movie-image" className="w-full h-full object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export { MovieContainer };
