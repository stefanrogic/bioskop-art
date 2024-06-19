import Link from "next/link";

function Footer(): JSX.Element {
  return (
    <footer className="bg-[#2D2D2D] text-white pt-5 md:pt-20 pb-5 px-5 min-[900px]:px-20 mt-40">
      <div className="w-full">
        <div className="w-full flex flex-col-reverse md:flex-row justify-between">
          <div className="grid grid-cols-3 gap-8 sm:grid-cols-3 sm:gap-20">
            <div className="space-y-5">
              <h4 className="font-semibold text-xl">Bioskop</h4>
              <ul className="flex flex-col gap-2">
                <Link href="#" className="text-stone-500 hover:text-white font-light">
                  Pocetna
                </Link>
                <Link href="#" className="text-stone-500 hover:text-white font-light">
                  O nama
                </Link>
                <Link href="#" className="text-stone-500 hover:text-white font-light">
                  Galerija
                </Link>
                <Link href="#" className="text-stone-500 hover:text-white font-light">
                  Kontakt
                </Link>
              </ul>
            </div>

            <div className="space-y-5">
              <h4 className="font-semibold text-xl">Filmovi</h4>
              <ul className="flex flex-col gap-2">
                <Link href="#" className="text-stone-500 hover:text-white font-light">
                  Repertoar
                </Link>
                <Link href="#" className="text-stone-500 hover:text-white font-light">
                  Uskoro
                </Link>
                <Link href="#" className="text-stone-500 hover:text-white font-light">
                  Arhiva
                </Link>
              </ul>
            </div>

            <div className="space-y-5">
              <h4 className="font-semibold text-xl">Ostalo</h4>
              <ul className="flex flex-col gap-2">
                <Link href="#" className="text-stone-500 hover:text-white font-light">
                  Izdvajamo
                </Link>
                <Link href="#" className="text-stone-500 hover:text-white font-light">
                  Newsletter
                </Link>
              </ul>
            </div>
          </div>

          <div className="mb-10">
            <Link href="/">
              <img
                className="h-14 md:h-32"
                src="https://magtghzmtpusmbfbvwcc.supabase.co/storage/v1/object/sign/slike/ostalo/logo.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbGlrZS9vc3RhbG8vbG9nby5qcGciLCJpYXQiOjE3MTYyODE1OTUsImV4cCI6MzMyNTIyODE1OTV9.r9wzQmFI3R1xtMeM4QCdcKfuGF3wTp6TF82A7WtfpCk&t=2024-05-21T08%3A53%3A13.805Z"
                alt="logo"
              />
            </Link>
          </div>
        </div>

        <div className="w-full sm:flex sm:items-center sm:justify-between mt-10 md:mt-20 pt-5 border-t border-stone-500">
          <div className="flex flex-row items-center justify-center md:justify-start">
            <p className="text-sm text-stone-500">
              © 2024 Bioskop Art - made by{" "}
              <a className="hover:underline" href="#" target="_blank">
                Change This Studio
              </a>
            </p>
          </div>

          <div className="flex mt-10 md:mt-0 gap-5 sm:mt-0 justify-center md:justify-end">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export { Footer };
