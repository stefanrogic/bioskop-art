"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Data {
  data: {
    id: number;
    naziv: string;
    poster: string;
    slug?: string;
    zanr: string[];
    datum_pocetka: Date;
    datum_zavrsetka: Date;
    tag: string[];
  };
}

const months = ["Januara", "Februara", "Marta", "Aprila", "Maja", "Juna", "Avgusta", "Septembra", "Oktobra", "Novembra", "Decembra"];

function MovieCard({ data }: Data): JSX.Element {
  const [cardWidth, setCardWidth] = useState("[340px]");

  const formatDate = (date: string) => {
    const split = date.split("-");

    return `od ${split[2]}. ${months[Number(split[1]) - 1]}`;
  };

  return (
    <Link href={"/repertoar/" + data.slug}>
      <div className="max-w-${cardWidth} flex flex-col gap-3">
        <div className={`w-full aspect-[2/3] bg-gray-400`}>
          <img className="object-cover w-full h-full" src={data.poster} alt="movie-poster" />
        </div>

        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-0">
            <h3 className="text-3xl font-bold">{data.naziv}</h3>
            <p className="font-light text-md">{formatDate(String(data.datum_pocetka))}</p>
          </div>

          {data.tag ? (
            <div className="flex flex-row gap-2">
              {data.tag.map((t, i) => (
                <div key={i} className="bg-[#db0b0b] text-white text-sm font-bold px-3 py-1">
                  {t.toUpperCase()}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
export { MovieCard };
