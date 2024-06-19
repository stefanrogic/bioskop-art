import { RepertoarContainer } from "@/containers/home/repertoar";
import { MovieContainer } from "@/containers/moviePage/movie-container";
import { getMovies } from "@/lib/db";

export default async function MoviePage() {
  const movieData = await getMovies("id, naziv, poster, slug, datum_pocetka, datum_zavrsetka, tag");

  return (
    <>
      <MovieContainer moviesData={movieData as any} />
    </>
  );
}
