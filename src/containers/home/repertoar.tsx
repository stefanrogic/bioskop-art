import DinaImg from "@/assets/images/movie-cards/dune-part-two-card.jpg";
import MatrixImg from "@/assets/images/movie-cards/matrix-card.png";
import JokerImg from "@/assets/images/movie-cards/joker-card.png";
import PulpFictionImg from "@/assets/images/movie-cards/pulp-fiction-card.png";

import { Suspense } from "react";
import { MovieCard } from "@/components/custom/movieCard/movie-card";
import { MovieCardLoading } from "@/components/custom/movieCard/movie-card-loading";

function getCurrentMovies() {
  //! SIMULACIJA ZA PROVERU ANIMACIJE ZA UCITAVANJE
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return [
    { name: "Dina: Drugi Deo", img: DinaImg, date: "od 04 Marta", tag: "Uskoro", tagColor: "bg-red-500", genre: ["Akcija", "Drama"] },
    { name: "Matriks", img: MatrixImg, date: "od 04 Marta", tag: "Premijera", tagColor: "bg-blue-500", genre: ["Akcija", "Drama"] },
    { name: "Joker", img: JokerImg, date: "od 04 Marta", tag: "Zadnji dan", tagColor: "bg-yellow-500", genre: ["Akcija", "Drama"] },
    { name: "Pulp Fiction", img: PulpFictionImg, date: "od 04 Marta", genre: ["Akcija", "Drama"] },
  ];
}

function RepertoarContainer() {
  const movies = getCurrentMovies();

  return (
    <section className="min-h-[50vh] flex flex-col items-start gap-10 px-5 lg:px-20 mt-20">
      <div className="flex flex-col">
        <h3 className="font-bold text-xl text-red-500">TRENUTNO NA</h3>
        <h1 className="font-bold text-4xl">REPERTOARU</h1>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5">
        {movies.map((movie, i) => (
          <Suspense key={i} fallback={<MovieCardLoading />}>
            <MovieCard data={movie} />
          </Suspense>
        ))}
      </div>

      <button className="mt-10 mx-auto px-10 py-3 border-2 border-black text-black hover:bg-black hover:text-white font-bold ease-in duration-300">Arhiva</button>
    </section>
  );
}
export { RepertoarContainer };
