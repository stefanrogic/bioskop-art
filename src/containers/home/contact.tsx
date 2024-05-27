function ContactContainer(): JSX.Element {
  return (
    <section className="lg:h-[720px] flex flex-col lg:flex-row items-center space-y-20 lg:space-y-0 lg:space-x-10 mt-20 min-[900px]:mt-40 scroll-m-20 px-5 min-[900px]:px-20" id="contact">
      <div className="h-[85%] w-full lg:w-1/2 flex flex-col justify-center">
        <div className="flex flex-col items-start">
          <h2 className="font-bold text-gray-700">IMATE PITANJE</h2>
          <h1 className="font-bold text-4xl min-[768px]:text-5xl">KONTAKT</h1>
        </div>
        <form className="mt-10 space-y-7">
          <div className="flex flex-col gap-7 lg:gap-0 lg:flex-row lg:space-x-5">
            <div className="w-full">
              <div className="mb-2 block">
                <span className="text-xl font-semibold">Ime i prezime</span>
              </div>
              <input className="border w-full h-5 p-5" id="name1" type="name" />
            </div>

            <div className="w-full">
              <div className="mb-2 block">
                <span className="text-xl font-semibold">Email</span>
              </div>
              <input className="border w-full h-5 p-5" id="email1" type="email" />
            </div>
          </div>

          <div>
            <div className="mb-2 block">
              <span className="text-xl font-semibold">Predmet poruke</span>
            </div>
            <input className="border w-full h-5 p-5" id="subject1" type="subject" />
          </div>

          <div>
            <div className="mb-2 block">
              <span className="text-xl font-semibold">Poruka</span>
            </div>
            <textarea className="border w-full p-5 resize-none" id="message1" rows={5} />
          </div>

          <button className="w-full h-14 font-bold text-white bg-red-600 hover:bg-red-500 ease-in duration-100">Pošaljite</button>
        </form>
      </div>

      <div className=" w-full lg:w-1/2 flex flex-col pt-10 overflow-hidden text-white font-normal">
        <div className="flex flex-row flex-wrap gap-5 mb-10 min-[900px]:ps-10">
          <div className="p-10 w-full h-42 flex flex-col bg-stone-600 text-white text-center justify-center space-y-5 items-center">
            <div className="rounded-sm">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <h4 className="font-semibold text-xl">Telefon</h4>
            <p className="text-2xl font-light">031/512-640</p>
          </div>

          <div className="p-10 w-full h-42 flex flex-col bg-stone-600 text-white text-center justify-center space-y-5 items-center">
            <div className="rounded-sm">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <h4 className="font-semibold text-xl">E-mail</h4>
            <p className="text-2xl font-light">info@bioskopart.rs</p>
          </div>

          <div className="p-10 w-full h-42 flex flex-col bg-stone-600 text-white text-center justify-center space-y-5 items-center">
            <div className="rounded-sm">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <h4 className="font-semibold text-xl">Adresa</h4>
            <p className="text-2xl font-light">Petra Ćelovića 4, Užice</p>
          </div>

          <div className="flex flex-row justify-center w-full space-x-5 font-semibold">
            <a href="#">
              <div className="bg-blue-600 p-5">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </a>

            <a href="#">
              <div className="bg-black p-5">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </a>

            <a href="#">
              <div className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 p-5">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export { ContactContainer };
