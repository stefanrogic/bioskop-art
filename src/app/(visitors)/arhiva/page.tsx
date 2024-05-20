import DinaImg from "@/assets/images/movie-cards/dune-part-two-card.jpg";
import MatrixImg from "@/assets/images/movie-cards/matrix-card.png";
import JokerImg from "@/assets/images/movie-cards/joker-card.png";
import PulpFictionImg from "@/assets/images/movie-cards/pulp-fiction-card.png";

import { MovieCard } from "@/components/custom/movieCard/movie-card";
import { Suspense, useState } from "react";
import { MovieCardLoading } from "@/components/custom/movieCard/movie-card-loading";

async function getArchivedMovies() {
  //! SIMULACIJA ZA PROVERU ANIMACIJE ZA UCITAVANJE
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return [
    { name: "Dina: Drugi Deo", img: DinaImg, date: "od 04 Marta", tag: "Uskoro", tagColor: "bg-red-500", genre: ["Akcija", "Drama"] },
    { name: "Matriks", img: MatrixImg, date: "od 04 Marta", tag: "Premijera", tagColor: "bg-blue-500", genre: ["Akcija", "Drama"] },
    { name: "Joker", img: JokerImg, date: "od 04 Marta", tag: "Zadnji dan", tagColor: "bg-yellow-500", genre: ["Akcija", "Drama"] },
    { name: "Pulp Fiction", img: PulpFictionImg, date: "od 04 Marta", genre: ["Akcija", "Drama"] },
  ];
}

export default async function ArchivePage() {
  const movies = await getArchivedMovies();

  return (
    <>
      <section className="flex flex-col items-start gap-10 px-5 md:px-20 mt-20 pb-20">
        <div className="flex flex-col">
          {/* <h3 className="font-bold text-xl text-red-500">TRENUTNO NA</h3> */}
          <h1 className="font-bold text-4xl">ARHIVA</h1>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 md:gap-x-5 gap-y-20">
          {movies.map((movie, i) => (
            <Suspense key={i} fallback={<MovieCardLoading />}>
              <MovieCard data={movie} />
            </Suspense>
          ))}
        </div>
        <button className="bg-black px-5 py-2 text-white font-bold mx-auto">Učitaj Još</button>
      </section>
    </>
  );
}
