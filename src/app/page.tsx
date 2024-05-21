import { BlogContainer } from "@/containers/home/blog";
import { ContactContainer } from "@/containers/home/contact";
import { Header } from "@/containers/home/header";
import { RepertoarContainer } from "@/containers/home/repertoar";
import { getCarouselSlides, getMovies } from "@/lib/db";

export default async function HomePage() {
  const headerData = await getCarouselSlides();
  const repertoarData = await getMovies("id, naziv, poster");

  return (
    <>
      <Header data={headerData} />
      {/* SUPABASE BAG - MORA SE IGNORISATI */}
      {/* @ts-ignore */}
      <RepertoarContainer data={repertoarData} />
      <BlogContainer />
      <ContactContainer />
    </>
  );
}
