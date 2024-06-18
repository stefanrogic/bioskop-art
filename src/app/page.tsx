import { BlogContainer } from "@/containers/home/blog";
import { ContactContainer } from "@/containers/home/contact";
import { Header } from "@/containers/home/header";
import { RepertoarContainer } from "@/containers/home/repertoar";
import { getCarouselSlides, getMovies } from "@/lib/db";

export default async function HomePage() {
  const headerData = await getCarouselSlides();
  const repertoarData = await getMovies("id, naziv, poster, slug, datum_pocetka, datum_zavrsetka, tag");

  return (
    <div className="flex flex-col gap-[100px]">
      <Header data={headerData} />
      {/* SUPABASE BAG - MORA SE IGNORISATI */}
      {/* @ts-ignore */}
      <RepertoarContainer data={repertoarData} />
      <BlogContainer />
      <ContactContainer />
    </div>
  );
}
