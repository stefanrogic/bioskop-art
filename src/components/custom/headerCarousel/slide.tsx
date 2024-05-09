import Image from "next/image";
import Link from "next/link";

import { cva, type VariantProps } from "class-variance-authority";
import { SwiperSlideProps } from "swiper/react";
import { cn } from "@/lib/utils";

const headerCarouselSlideVariants = cva("relative cursor-pointer");

export interface HeaderCarouselSlideProps extends React.HTMLAttributes<SwiperSlideProps>, VariantProps<typeof headerCarouselSlideVariants> {
  slideName: string;
  slideDate: string;
  slideUrl: any;
}

function HeaderCarouselSlide({ className, slideName, slideDate, slideUrl }: HeaderCarouselSlideProps): JSX.Element {
  return (
    <Link href="/" className={cn(headerCarouselSlideVariants(), className)}>
      <div className="absolute z-50 flex flex-col items-start left-20 bottom-24 w-full">
        <div className="flex space-x-3 mb-3 min-[900px]:me-auto items-center">
          <div className="px-2 pt-3 pb-2 bg-red-700 text-white text-sm leading-3 font-bold rounded-sm">Sala 1</div>
          <div className="px-2 pt-3 pb-2 bg-red-700 text-white text-sm leading-3 font-bold rounded-sm">3D</div>
        </div>
        <h2 className="text-5xl min-[900px]:text-7xl text-white font-bold">{slideName}</h2>
        <p className="min-[900px]:text-2xl text-white font-thin mt-1">od {slideDate}</p>
      </div>

      <div className="absolute top-0 bg-gradient-to-b from-black to-transparent opacity-25 w-full h-24"></div>
      <Image className="object-cover w-full h-full mx-auto" src={slideUrl} alt="slide-img" priority />
      <div className="absolute bottom-0 bg-gradient-to-t from-black opacity-45 w-full h-1/2"></div>
    </Link>
  );
}
export { HeaderCarouselSlide, headerCarouselSlideVariants };
