import { HeaderNavbar } from "@/components/custom/header-navbar";
import { MovieContainer } from "@/containers/moviePage/movie-container";
import { getMovies } from "@/lib/db";
import { Suspense } from "react";

export default async function MoviePage() {
  const moviesData = await getMovies("id, naziv, poster, slug, zanr, opis, trejler_url");

  return (
    <>
      <MovieContainer moviesData={moviesData as any} />
    </>
  );
}
