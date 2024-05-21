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
      {/* <div className="relative w-full aspect-[4/6] bg-slate-400">
        <div className="opacity-0 hover:opacity-100 duration-300 absolute flex flex-col justify-center items-center gap-1 w-full h-full bg-black text-white font-bold bg-opacity-30">
          {data?.zanr.map((z, i) => (
            <span key={i}>{z}</span>
          ))}
        </div>
        <Image
          src={
            data?.poster ||
            "https://magtghzmtpusmbfbvwcc.supabase.co/storage/v1/object/sign/slike/kartice_filmova/matrix-card.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbGlrZS9rYXJ0aWNlX2ZpbG1vdmEvbWF0cml4LWNhcmQucG5nIiwiaWF0IjoxNzE2Mjc4NTQ0LCJleHAiOjE3MjQ5MTg1NDR9.5lKWa44QrlPN1iFtxhnkm9Y-xnDOJDSkqTvdkpoNWnE&t=2024-05-21T08%3A02%3A23.572Z"
          }
          alt="movie-poster"
          className="object-cover w-full h-full"
          fill={true}
          priority
        />
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col">
          {data?.naziv && <h4 className="text-xl font-semibold">{data?.naziv}</h4>}
          {data?.datum && <p className="text-light text-md">{data?.datum}</p>}
          {data?.poster}
        </div>
        {/* {data?.tag && <div className={`px-2 py-1 ${data?.tagColor} text-white font-bold text-[12px] me-auto`}>{data?.tag}</div>} */}
      {/* </div> */}
    </Link>
  );
}
export { MovieCard };
