import supabase from "@/config/supabaseClient";

// ! DOK BAZA NE BUDE GOTOVA
async function getCarouselSlides() {
  return [
    {
      name: "Joker: Ludilo u Dvoje",
      date: "USKORO",
      url: "https://magtghzmtpusmbfbvwcc.supabase.co/storage/v1/object/sign/slike/carousel/joker-folie-a-deux.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbGlrZS9jYXJvdXNlbC9qb2tlci1mb2xpZS1hLWRldXgucG5nIiwiaWF0IjoxNzE4Njk1ODcwLCJleHAiOjQ4NzIyOTU4NzB9.HyD4K2b8FROvm3OPgGD1AkIN6ltWSRtkL3I-JM0-puE&t=2024-06-18T07%3A31%3A10.292Z",
      link: "/repertoar/joker",
      tags: ["3D"],
    },
    {
      name: "Dedpul i Vulverin",
      date: "od 26 Jula",
      url: "https://magtghzmtpusmbfbvwcc.supabase.co/storage/v1/object/sign/slike/carousel/deadpool-wolverine.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbGlrZS9jYXJvdXNlbC9kZWFkcG9vbC13b2x2ZXJpbmUucG5nIiwiaWF0IjoxNzE4Njk2MDM1LCJleHAiOjQ4NzIyOTYwMzV9.CSXwCpgtx9mQQzB-ubaes3ADMpLnkFi0CKKC7FTkzFo&t=2024-06-18T07%3A33%3A55.421Z",
      link: "/repertoar/matriks",
      tags: ["3D"],
    },
    {
      name: "Dina: Drugi Deo",
      date: "od 04 Marta",
      time: "20:00",
      sala: "SALA 1",
      url: "https://magtghzmtpusmbfbvwcc.supabase.co/storage/v1/object/sign/slike/carousel/dune-banner.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbGlrZS9jYXJvdXNlbC9kdW5lLWJhbm5lci5wbmciLCJpYXQiOjE3MTYyODEwMjMsImV4cCI6NDg2OTg4MTAyM30.xUA2ok9S1R0U4Ed5N4iT7ocitOZJNJO6LkZI2Ht0jt4&t=2024-05-21T08%3A43%3A41.883Z",
      link: "/repertoar/dina-drugi-deo",
      tags: ["3D"],
    },
    {
      name: "Pulp Fiction",
      date: "od 04 Marta",
      time: "20:00",
      sala: "SALA 1",
      url: "https://magtghzmtpusmbfbvwcc.supabase.co/storage/v1/object/sign/slike/carousel/pulp-fiction-banner.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbGlrZS9jYXJvdXNlbC9wdWxwLWZpY3Rpb24tYmFubmVyLnBuZyIsImlhdCI6MTcxNjI4MTE4NCwiZXhwIjo0ODY5ODgxMTg0fQ.Qna5aTMuMHzbKWN-j7zHWMFeBzZSVV_JvpcSlPPpx3U&t=2024-05-21T08%3A46%3A23.640Z",
      link: "/repertoar/pulp-fiction",
      tags: ["3D"],
    },
  ];
}

async function getMovies(q: string) {
  const { data, error } = await supabase.from("filmovis").select(q);
  if (data) return data;
  else return error;
}

export { getCarouselSlides, getMovies };
