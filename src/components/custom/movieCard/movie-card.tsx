import Image from "next/image";
import Link from "next/link";

interface Data {
  data: {
    name: string;
    date: string;
    tag?: string;
    tagColor?: string;
    img: any;
    genre: string[];
  };
}

function MovieCard({ data }: Data): JSX.Element {
  return (
    <Link href="#" className="w-full flex flex-col gap-5">
      <div className="relative w-full aspect-[4/6] bg-slate-400">
        <div className="opacity-0 hover:opacity-100 duration-300 absolute flex flex-col justify-center items-center gap-1 w-full h-full bg-black text-white font-bold bg-opacity-30">
          {data?.genre.map((g, i) => (
            <span key={i}>{g}</span>
          ))}
        </div>
        <Image src={data?.img} alt="movie-poster" className="object-cover w-full h-full" fill={true} priority />
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col">
          {data?.name && <h4 className="text-xl font-semibold">{data?.name}</h4>}
          {data?.date && <p className="text-light text-md">{data?.date}</p>}
        </div>
        {data?.tag && <div className={`px-2 py-1 ${data?.tagColor} text-white font-bold text-[12px] me-auto`}>{data?.tag}</div>}
      </div>
    </Link>
  );
}
export { MovieCard };
