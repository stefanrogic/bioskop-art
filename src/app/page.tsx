import { BlogContainer } from "@/containers/home/blog";
import { ContactContainer } from "@/containers/home/contact";
import { Header } from "@/containers/home/header";
import { RepertoarContainer } from "@/containers/home/repertoar";
import { getCarouselSlides, getMovies } from "@/lib/db";

export default async function HomePage() {
  const headerData = await getCarouselSlides();
  const repertoarData = await getMovies();

  return (
    <>
      <Header data={headerData} />
      <RepertoarContainer data={repertoarData} />
      <BlogContainer />
      <ContactContainer />
    </>
  );
}
