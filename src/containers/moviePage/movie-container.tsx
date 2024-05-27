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
  const data = moviesData?.find((m) => m.slug === slug);

  return (
    <>
      <div className="pt-20 w-full px-20 flex flex-row gap-10">
        <div className="flex flex-col gap-5">
          <div className="aspect-[4/6] bg-slate-400">
            <img src={data?.poster} alt="movie-img" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="flex flex-col w-3/4">
          <h2 className="text-5xl font-bold">{data?.naziv}</h2>
          <p className="text-lg font-normal mt-1">Od 04 Maja</p>
          <p className="text-light mt-5">{data?.opis}</p>

          <div className="border-y border-1 py-5 mt-5 flex flex-col gap-10">
            <div className="flex flex-row gap-20">
              <div className="flex flex-col">
                <h3 className="text-2xl font-black">Zanr</h3>
                <div className="flex flex-row gap-2 flex-wrap">
                  {data?.zanr.map((z, i) => (
                    <span key={i}>
                      {z}
                      {i + 1 < data?.zanr.length ? "," : ""}
                    </span>
                  ))}
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
            {/* <button className="py-3 px-10 font-bold text-white bg-red-600 hover:bg-red-500 ease-in duration-100">TREJLER</button> */}
            <span className="py-3 border cursor-default text-center w-full">Ulaznice se kupuju u holu bioskopa na dan projekcije i važe samo za taj dan.</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-20 mt-20">
        <h1 className="text-4xl font-bold">Trejler</h1>
        <iframe
          className="w-full aspect-[16/9] mt-5"
          src={data?.trejler_url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex flex-col px-20 mt-20">
        <h1 className="text-4xl font-bold">Galerija</h1>
        <div className="w-full aspect-[16/9] bg-slate-400 mt-5"></div>
      </div>
    </>
  );
}

export { MovieContainer };
