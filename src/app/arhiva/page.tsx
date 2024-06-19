import { MovieCard } from "@/components/custom/movie-card";
import { getMovies } from "@/lib/db";
import Link from "next/link";

export default async function ArhivaPage() {
  const repertoarData = await getMovies("id, naziv, poster, slug, datum_pocetka, datum_zavrsetka, tag");

  return (
    <section className="flex flex-col gap-[50px] mt-[100px]" id="repertoar">
      <div className="flex flex-col md:flex-row justify-between px-5 xl:px-20">
        <div className="flex flex-row gap-10 items-center w-full">
          <div className="flex flex-row gap-10 justify-center items-center w-full">
            <div className="hidden md:block h-[1px]  bg-[#db0b0b] flex-1"></div>
            <h1 className="font-bold text-4xl lg:text-5xl text-center">ARHIVA</h1>
            <div className="hidden md:block h-[1px] bg-[#db0b0b] flex-1"></div>
          </div>
        </div>
      </div>

      <div className="relative px-5 xl:px-20">
        <div className="w-full flex flex-row justify-end gap-5 mb-5">
          <button className="flex flex-row gap-2 items-center bg-[#db0b0b] hover:bg-red-700 text-white px-10 py-3 font-bold">FILTERI</button>
        </div>

        <div className="grid grid-cols-4 gap-x-5 gap-y-20">
          {/* @ts-ignore - bug */}
          {repertoarData?.map((m, i) => (
            <MovieCard key={i} data={m as any} />
          ))}
        </div>
      </div>
    </section>
  );
}
