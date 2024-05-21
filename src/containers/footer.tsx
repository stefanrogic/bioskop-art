function Footer(): JSX.Element {
  return (
    <footer className="bg-stone-900 text-white pt-5 md:pt-20 pb-5 px-5 min-[900px]:px-20 mt-40">
      <div className="w-full">
        <div className="w-full flex flex-col-reverse md:flex-row justify-between">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 sm:gap-20">
            <div className="space-y-5">
              <h4 className="font-semibold text-xl">Bioskop</h4>
              <ul className="flex flex-col gap-2">
                <a className="hover:underline" href="#">
                  O nama
                </a>
                <a className="hover:underline" href="#">
                  Galerija
                </a>
                <a className="hover:underline" href="#">
                  Kontakt
                </a>
              </ul>
            </div>

            <div className="space-y-5">
              <h4 className="font-semibold text-xl">Filmovi</h4>
              <ul className="flex flex-col gap-2">
                <a className="hover:underline" href="#">
                  Arhiva
                </a>
                <a className="hover:underline" href="#">
                  Repertoar
                </a>
              </ul>
            </div>
          </div>

          <div className="mb-10">
            <a href="#">
              <img
                className="h-14 md:h-32"
                src="https://magtghzmtpusmbfbvwcc.supabase.co/storage/v1/object/sign/slike/ostalo/logo.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbGlrZS9vc3RhbG8vbG9nby5qcGciLCJpYXQiOjE3MTYyODE1OTUsImV4cCI6MzMyNTIyODE1OTV9.r9wzQmFI3R1xtMeM4QCdcKfuGF3wTp6TF82A7WtfpCk&t=2024-05-21T08%3A53%3A13.805Z"
                alt="logo"
              />
            </a>
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
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

            <a href="#">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

            <a href="#">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export { Footer };
