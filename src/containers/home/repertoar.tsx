import { MovieCard } from "@/components/custom/movie-card";

import DinaImg from "@/assets/images/movie-cards/dune-part-two-card.jpg";
import MatrixImg from "@/assets/images/movie-cards/matrix-card.png";
import JokerImg from "@/assets/images/movie-cards/joker-card.png";
import PulpFictionImg from "@/assets/images/movie-cards/pulp-fiction-card.png";

function getCurrentMovies() {
  return [
    { name: "Dina: Drugi Deo", img: DinaImg, date: "od 04 Marta", tag: "Uskoro", tagColor: "bg-red-500" },
    { name: "Matriks", img: MatrixImg, date: "od 04 Marta", tag: "Premijera", tagColor: "bg-blue-500" },
    { name: "Joker", img: JokerImg, date: "od 04 Marta", tag: "Zadnji dan", tagColor: "bg-yellow-500" },
    { name: "Pulp Fiction", img: PulpFictionImg, date: "od 04 Marta" },
  ];
}

function RepertoarContainer(): JSX.Element {
  return (
    <section className="min-h-[50vh] flex flex-col items-start gap-10 px-5 lg:px-20 mt-20">
      <div className="flex flex-col">
        <h3 className="font-bold text-xl text-red-500">TRENUTNO NA</h3>
        <h1 className="font-bold text-4xl">REPERTOARU</h1>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5">
        {getCurrentMovies().map((movie, i) => (
          <MovieCard key={i} data={movie} />
        ))}
      </div>

      <button className="mt-10 mx-auto px-10 py-3 border-2 border-black text-black hover:bg-black hover:text-white font-bold ease-in duration-300">Arhiva</button>
    </section>
  );
}
export { RepertoarContainer };
