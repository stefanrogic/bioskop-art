import DinaImg from "@/assets/images/movie-cards/dune-part-two-card.jpg";
import MatrixImg from "@/assets/images/movie-cards/matrix-card.png";
import JokerImg from "@/assets/images/movie-cards/joker-card.png";
import PulpFictionImg from "@/assets/images/movie-cards/pulp-fiction-card.png";

import { MovieCard } from "@/components/custom/movieCard/movie-card";
import { Suspense, useEffect, useState } from "react";
import { MovieCardLoading } from "@/components/custom/movieCard/movie-card-loading";
import supabase from "@/config/supabaseClient";
import { Navbar } from "@/components/custom/navbar";

async function getArchivedMovies() {
  const { data, error } = await supabase.from("filmovis").select().eq("status", 1);

  if (data) return data;
  else return error;
}

export default async function ArchivePage() {
  const movies = await getArchivedMovies();

  return (
    <>
      {JSON.stringify(movies)}
      <section className="flex flex-col items-start gap-10 px-5 md:px-20 mt-20 pb-20">
        <div className="flex flex-col">
          {/* <h3 className="font-bold text-xl text-red-500">TRENUTNO NA</h3> */}
          <h1 className="font-bold text-4xl">ARHIVA</h1>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 md:gap-x-5 gap-y-20">
          {movies?.map((movie, i) => (
            <Suspense key={i} fallback={<MovieCardLoading />}>
              <MovieCard
                data={{
                  name: movie?.naziv,
                  date: new Date(movie?.datum_pocetka).toString().split(" ")[1] + " " + new Date(movie?.datum_pocetka).toString().split(" ")[2],
                  img: movie?.poster,
                  genre: movie?.zanr,
                  tag: "Premijera",
                  tagColor: "bg-red-500",
                }}
              />
            </Suspense>
          ))}
        </div>
        <button className="bg-black px-5 py-2 text-white font-bold mx-auto">Učitaj Još</button>
      </section>
    </>
  );
}
