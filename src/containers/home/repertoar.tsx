import { MovieCard } from "@/components/custom/movie-card";

function getCurrentMovies() {
  return [
    { name: "Dina: Drugi Deo", date: "od 04 Marta", tag: "Uskoro", tagColor: "bg-red-500" },
    { name: "Matriks", date: "od 04 Marta", tag: "Premijera", tagColor: "bg-blue-500" },
    { name: "Joker", date: "od 04 Marta", tag: "Zadnji dan", tagColor: "bg-yellow-500" },
    { name: "Pulp Fiction", date: "od 04 Marta" },
  ];
}

function RepertoarContainer(): JSX.Element {
  return (
    <section className="min-h-[50vh] flex flex-col items-start gap-10 px-20 mt-40">
      <div className="flex flex-col">
        <h3 className="font-bold text-xl text-red-500">TRENUTNO NA</h3>
        <h1 className="font-bold text-4xl">REPERTOARU</h1>
      </div>
      <div className="w-full grid grid-cols-4 gap-5">
        {getCurrentMovies().map((movie, i) => (
          <MovieCard key={i} data={movie} />
        ))}
      </div>

      <button className="mt-10 mx-auto px-10 py-3 border-2 border-black text-black hover:bg-black hover:text-white font-bold ease-in duration-300">Arhiva</button>
    </section>
  );
}
export { RepertoarContainer };
