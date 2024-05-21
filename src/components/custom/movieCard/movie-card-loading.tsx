function MovieCardLoading() {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="relative w-full aspect-[4/6] bg-slate-500 animate-pulse"></div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <h4 className="text-xl font-semibold bg-slate-500 animate-pulse w-56 h-5"></h4>
          <p className="text-light text-md bg-slate-500 animate-pulse w-40 h-8"></p>
        </div>
        <div className="px-2 py-1 bg-slate-500 animate-pulse w-24 h-5"></div>
      </div>
    </div>
  );
}
export { MovieCardLoading };
