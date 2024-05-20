"use client";

import DinaImg from "@/assets/images/movie-cards/dune-part-two-card.jpg";
import MatrixImg from "@/assets/images/movie-cards/matrix-card.png";
import JokerImg from "@/assets/images/movie-cards/joker-card.png";
import PulpFictionImg from "@/assets/images/movie-cards/pulp-fiction-card.png";

import { Footer } from "@/containers/footer";
import { BlogContainer } from "@/containers/home/blog";
import { ContactContainer } from "@/containers/home/contact";
import { Header } from "@/containers/home/header";
import { RepertoarContainer } from "@/containers/home/repertoar";

export default function HomePage(): JSX.Element {
  return (
    <>
      <Header />
      <RepertoarContainer />
      <BlogContainer />
      <ContactContainer />
      <Footer />
    </>
  );
}
