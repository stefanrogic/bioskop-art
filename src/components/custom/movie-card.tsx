import Image from "next/image";
import Link from "next/link";

interface Data {
  data: {
    name: string;
    date: string;
    tag?: string;
    tagColor?: string;
    img: any;
  };
}

function MovieCard({ data }: Data): JSX.Element {
  return (
    <Link href="#" className="w-full flex flex-col gap-5">
      <div className="relative w-full aspect-[3/4] bg-slate-400">
        <div className="opacity-0 hover:opacity-100 absolute flex flex-col justify-center items-center gap-1 w-full h-full bg-black text-white font-bold bg-opacity-30">
          <span>Akcija</span>
          <span>Drama</span>
        </div>
        <Image src={data?.img} alt="movie-poster" className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col">
          {data?.name && <h4 className="text-xl font-semibold">{data?.name}</h4>}
          {data?.date && <p className="text-light text-md">{data?.date}</p>}
        </div>
        {data?.tag && <div className={`px-5 py-2 ${data?.tagColor} text-white font-bold text-sm me-auto`}>{data?.tag}</div>}
      </div>
    </Link>
  );
}
export { MovieCard };
