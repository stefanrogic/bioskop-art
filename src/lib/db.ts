import supabase from "@/config/supabaseClient";

// ! DOK BAZA NE BUDE GOTOVA
async function getCarouselSlides() {
  return [
    {
      name: "Joker",
      date: "04 Marta",
      url: "https://magtghzmtpusmbfbvwcc.supabase.co/storage/v1/object/sign/slike/carousel/joker-banner.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbGlrZS9jYXJvdXNlbC9qb2tlci1iYW5uZXIucG5nIiwiaWF0IjoxNzE2MjgxMTU1LCJleHAiOjQ4Njk4ODExNTV9.B_GcjPv-u-E-YeeNLKpcEgvMCkYVpF-gyvaL6wAL9u8&t=2024-05-21T08%3A45%3A54.605Z",
      link: "/repertoar/joker",
    },
    {
      name: "Matriks",
      date: "04 Marta",
      url: "https://magtghzmtpusmbfbvwcc.supabase.co/storage/v1/object/sign/slike/carousel/matrix-banner.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbGlrZS9jYXJvdXNlbC9tYXRyaXgtYmFubmVyLnBuZyIsImlhdCI6MTcxNjI4MTE2OSwiZXhwIjo0ODY5ODgxMTY5fQ.c3bUKJXXLAxb7f4zVI-qH--2V523kjIGxzZmtoHK17c&t=2024-05-21T08%3A46%3A08.173Z",
      link: "/repertoar/matriks",
    },
    {
      name: "Dina: Drugi Deo",
      date: "04 Marta",
      url: "https://magtghzmtpusmbfbvwcc.supabase.co/storage/v1/object/sign/slike/carousel/dune-banner.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbGlrZS9jYXJvdXNlbC9kdW5lLWJhbm5lci5wbmciLCJpYXQiOjE3MTYyODEwMjMsImV4cCI6NDg2OTg4MTAyM30.xUA2ok9S1R0U4Ed5N4iT7ocitOZJNJO6LkZI2Ht0jt4&t=2024-05-21T08%3A43%3A41.883Z",
      link: "/repertoar/dina-drugi-deo",
    },
    {
      name: "Pulp Fiction",
      date: "04 Marta",
      url: "https://magtghzmtpusmbfbvwcc.supabase.co/storage/v1/object/sign/slike/carousel/pulp-fiction-banner.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbGlrZS9jYXJvdXNlbC9wdWxwLWZpY3Rpb24tYmFubmVyLnBuZyIsImlhdCI6MTcxNjI4MTE4NCwiZXhwIjo0ODY5ODgxMTg0fQ.Qna5aTMuMHzbKWN-j7zHWMFeBzZSVV_JvpcSlPPpx3U&t=2024-05-21T08%3A46%3A23.640Z",
      link: "/repertoar/pulp-fiction",
    },
  ];
}

async function getMovies(q: string) {
  const { data, error } = await supabase.from("filmovis").select(q);
  if (data) return data;
  else return error;
}

export { getCarouselSlides, getMovies };
