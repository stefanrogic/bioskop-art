import { MovieCard } from "@/components/custom/movie-card";
import { getMovies } from "@/lib/db";
import Link from "next/link";

export default async function AboutPage() {
  const repertoarData = await getMovies("id, naziv, poster, slug, datum_pocetka, datum_zavrsetka, tag");

  return (
    <>
      <section className="flex flex-col gap-[50px] mt-[100px]" id="repertoar">
        <div className="flex flex-col md:flex-row justify-between px-5 xl:px-20">
          <div className="flex flex-row gap-10 items-center w-full">
            <div className="flex flex-row gap-10 justify-center items-center w-full">
              <div className="hidden md:block h-[0.5px]  bg-[#db0b0b] flex-1"></div>
              <h1 className="font-bold text-4xl lg:text-5xl text-center">O NAMA</h1>
              <div className="hidden md:block h-[0.5px] bg-[#db0b0b] flex-1"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[20px] px-5 xl:px-20">
          <p>CINEMA CITY centar počeo je sa radom 31. maja 2007. godine.</p>

          <p>Centar atrijumskog oblika je veličine 1.543 m2 . Sastoji se iz dve nezavisne celine. To su Bioskop ART i tržni centar sa 19 lokala raznorodnih sadržaja.</p>

          <div>
            <p>Bioskop ART raspolaže sa dve bioskopske sale:</p>
            <ul>
              <li>Sala 1 – 169 mesta</li>
              <li> Sala 2 – 68 mesta</li>
            </ul>
          </div>

          <p>Sale su opremljene luksuznim sedištima poznate turske firme UROSAN.</p>

          <p>Projekciona tehnika nemačke firme KINOTON i zvučni sistem K.C.S. (Kelonik cinema sound) obezbeđuju optimalne uslove za odvijanje bioskopskih projekcija.</p>

          <div>
            <p>Dolby surround zvučni sistem sa:</p>
            <ul>
              <li>Sala 1- osam zvučnika postavljenih na 3 zida bioskopa i 7 velikih zvučnika postavljenih iza platna dimenzija 7,4 x 3,2m</li>
              <li>Sala 2- četiri zvučnika postavljenih na 3 zida bioskopa i 7 velikih zvučnika postavljenih iza platna dimenzija 6,8 x 3,0m</li>
            </ul>
          </div>

          <p>Obe sale su opremljene sa digitalnim čitačem zvuka i Dolby procesorima koji sve kontrolišu, obezbeđuju najviši mogući kvalitet zvuka.</p>

          <p>Preteći svetske trendove u martu 2014. godine Sala 1 je opremljena vrhunskom digitalnom tehnikom za 2D i 3D projekcije. </p>

          <p>
            Jedinstveni smo po tome što posedujemo trenutno najbrže polarizacione DepthQ 3D modulatore. U kombinaciji sa našim Harkness silverscreen platnom, Barco digitalni projektor, DepthQ postiže apsolutno zadivljujuću reprodukciju boje i
            najuverljiviji utisak treće dimenzije, bez zamaranja vaših očiju!
          </p>

          <p>
            Najsavremeniji Dolby Digital  procesor zvuka, u kombinaciji sa JBL zvučnim sistemom, profesionalno je optimizovan kako bi publici obezbedio novi nivo zvuka. Ne samo da ćete gledati film, već ćete biti potpuno uživljeni u akciju na platnu!
            Radno vreme tržnog centra je od 08h do 21h, a radno vreme blagajne bioskopa je od 17h do 22h, a bioskop radi do kraja poslednje projekcije.
          </p>

          <p>Bioskop ART zadržava pravo izmene repertoara bez predhodne najave. Hvala na razumevanju. Ulaznice se kupuju na dan projekcije i važe samo za taj dan.</p>
        </div>
      </section>
      <section className="flex flex-col gap-[50px] mt-[100px]" id="repertoar">
        <div className="flex flex-col md:flex-row justify-between px-5 xl:px-20">
          <div className="flex flex-row gap-10 items-center w-full">
            <div className="flex flex-row gap-10 justify-center items-center w-full">
              <div className="hidden md:block h-[0.5px]  bg-[#db0b0b] flex-1"></div>
              <h1 className="font-bold text-4xl lg:text-5xl text-center">GALERIJA</h1>
              <div className="hidden md:block h-[0.5px] bg-[#db0b0b] flex-1"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[50px] px-5 xl:px-20">
          <div className="w-full aspect-video bg-gray-400"></div>
        </div>
      </section>
    </>
  );
}
