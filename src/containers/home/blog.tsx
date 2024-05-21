function BlogContainer(): JSX.Element {
  return (
    <section className="mt-20 min-[900px]:mt-40 px-5 min-[900px]:px-20 space-y-10">
      <div className="flex flex-col items-start">
        <h2 className="font-bold text-gray-700">ZA VAS</h2>
        <h1 className="font-bold text-4xl min-[768px]:text-5xl">IZDVAJAMO</h1>
      </div>

      <div className="grid grid-rows-6 lg:grid-rows-3 xl:grid-rows-2 grid-flow-col gap-x-5 gap-y-10">
        {[0, 1, 2, 3, 4, 5].map((_, i) => (
          <div key={i} className="flex flex-col">
            <a href="#" className="aspect-[16/9]  overflow-hidden">
              <img
                className="ease-in duration-100 hover:scale-105 object-cover h-full w-full"
                src="https://magtghzmtpusmbfbvwcc.supabase.co/storage/v1/object/sign/slike/carousel/dune-banner.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbGlrZS9jYXJvdXNlbC9kdW5lLWJhbm5lci5wbmciLCJpYXQiOjE3MTYyODcyODEsImV4cCI6NDg2OTg4NzI4MX0.CePPDiVca2mMVezF0QVDWt7omXU4nds5XLBquRakIfs&t=2024-05-21T10%3A28%3A00.766Z"
                alt="card-img"
              />
            </a>
            <div className="flex flex-col mt-5 space-y-3">
              <h3 className="text-3xl font-bold">Dina: Drugi Deo</h3>
              <p className="font-light text-gray-400 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam reiciendis tempora assumenda ad praesentium laborum aliquam nemo. Officia est dignissimos quidem iusto maxime ullam...</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export { BlogContainer };
