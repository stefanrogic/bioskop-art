import SlideOne from "@/assets/images/hero-slides/joker-banner.png";
import SlideTwo from "@/assets/images/hero-slides/matrix-banner.png";
import SlideThree from "@/assets/images/hero-slides/dune-banner.png";
import SlideFour from "@/assets/images/hero-slides/pulp-fiction-banner.png";

import { HeaderCarousel, HeaderCarouselSlide } from "@/components/custom/carousel";
import { SwiperSlide } from "swiper/react";
import { Navbar } from "@/components/custom/navbar";

// ! KADA BAZA BUDE GOTOVA, PODACI CE SE POVLAČITI PREKO OVE FUNKCIJE
function getCarouselSlides() {
  return [
    { name: "Joker", date: "04 Marta", url: SlideOne },
    { name: "Matriks", date: "04 Marta", url: SlideTwo },
    { name: "Dina: Drugi Deo", date: "04 Marta", url: SlideThree },
    { name: "Pulp Fiction", date: "04 Marta", url: SlideFour },
  ];
}

function Header(): JSX.Element {
  return (
    <header className="relative">
      <Navbar />
      <HeaderCarousel className="h-[820px]" bulletSize={getCarouselSlides().length > 3 ? "20%" : "26.5%"}>
        {getCarouselSlides().map((s, i) => (
          <SwiperSlide key={i} className="bg-slate-300 cursor-pointer">
            <HeaderCarouselSlide slideName={s.name} slideDate={s.date} slideUrl={s.url} />
          </SwiperSlide>
        ))}
      </HeaderCarousel>
    </header>
  );
}
export { Header };
