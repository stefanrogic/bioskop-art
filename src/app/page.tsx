"use client";

import { Footer } from "@/containers/footer";
import { BlogContainer } from "@/containers/home/blog";
import { ContactContainer } from "@/containers/home/contact";
import { Header } from "@/containers/home/header";
import { RepertoarContainer } from "@/containers/home/repertoar";

export default function HomePage(): JSX.Element {
  return (
    <>
      <Header />
      {/* <RepertoarContainer /> */}
      <BlogContainer />
      <ContactContainer />
      <Footer />
    </>
  );
}
