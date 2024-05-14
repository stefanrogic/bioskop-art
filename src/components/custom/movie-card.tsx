import Link from "next/link";

interface Data {
  data: {
    name: string;
    date: string;
    tag?: string;
    tagColor?: string;
  };
}

function MovieCard({ data }: Data): JSX.Element {
  return (
    <Link href="#" className="w-full flex flex-col gap-5">
      <div className="w-full aspect-[3/4] bg-slate-400"></div>
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
