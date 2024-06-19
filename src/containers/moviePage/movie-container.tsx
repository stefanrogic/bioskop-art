"use client";

import { useParams } from "next/navigation";

interface DataProps {
  id: number;
  naziv: string;
  poster?: string;
  slug: string;
  zanr: string[];
  opis?: string;
  trejler_url?: string;
}

interface Props {
  moviesData: DataProps[] | null;
}

function MovieContainer({ moviesData }: Props) {
  const { slug } = useParams() as { slug: string };
  // const data = moviesData?.find((m) => m.slug === slug);

  return (
    <>
      {/* {JSON.stringify(moviesData)} */}
      <div className="pt-20 w-full px-5 lg:px-20 flex flex-col md:flex-row gap-10">
        <div className="flex flex-col gap-5">
          <div className="md:w-[400px] aspect-[4/6] bg-slate-400">
            <img src={""} alt="movie-img" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="flex flex-col md:w-3/4">
          <h2 className="text-5xl font-bold">Naziv filma</h2>
          <p className="text-lg font-normal mt-1">Od 04 Maja</p>
          <p className="text-light mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nesciunt nulla, praesentium deserunt culpa fugiat unde omnis numquam, facilis quaerat similique obcaecati velit reprehenderit? Distinctio quae, quis similique ad
            perspiciatis aperiam voluptate repellendus, expedita tempora animi quos magnam ipsum, ea pariatur laboriosam labore porro harum suscipit perferendis? Nihil, ad tempore.
          </p>

          <div className="border-y border-1 py-5 mt-5 flex flex-col gap-10">
            <div className="flex flex-row gap-20">
              <div className="flex flex-col">
                <h3 className="text-2xl font-black">Zanr</h3>
                <div className="flex flex-row gap-2 flex-wrap">
                  <span>Akcija,</span>
                  <span>Drama</span>
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="text-2xl font-black">Rezija</h3>
                <div className="flex flex-row gap-2 flex-wrap">
                  <span>Denis Villeneuve</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-2xl font-black">Glumci</h3>
              <div className="flex flex-row gap-2 flex-wrap">
                <span>Timothée Chalamet,</span>
                <span>Zendaya,</span>
                <span>Rebecca Ferguson,</span>
                <span>Javier Bardem,</span>
                <span>Josh Brolin,</span>
                <span>Austin Butler</span>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-5 mt-5 items-center">
            <span className="p-5 border cursor-default text-center w-full">Ulaznice se kupuju u holu bioskopa na dan projekcije i važe samo za taj dan.</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-5 lg:px-20 mt-20">
        <h1 className="text-4xl font-bold">Trejler</h1>
        <iframe
          className="w-full aspect-[16/9] mt-5 bg-slate-400"
          src={""}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex flex-col px-5 lg:px-20 mt-20">
        <h1 className="text-4xl font-bold">Galerija</h1>
        <div className="w-full aspect-[16/9] bg-slate-400 mt-5"></div>
      </div>
    </>
  );
}

export { MovieContainer };
