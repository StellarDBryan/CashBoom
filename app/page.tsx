import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gray-50 overflow-hidden -mt-[72px]">
      <section className="min-h-screen flex flex-col md:flex-row gap-7 md:gap-0 items-center md:justify-between pt-20 md:pt-0 px-5 sm:px-10 bg-gradient-to-b from-transparent to-green-100 overflow-hidden">
        <div className="flex flex-col gap-3 w-[90%] sm:w-4/5 md:w-2/5 flex-shrink-0">
          <h2 className="text-green-700/70 text-center md:text-start z-10 font-extrabold text-h4 md:text-h3 lg:text-h2 relative">
            ¡Domina tus finanzas jugando!
            <span className="text-yellow-300 -z-10 absolute inset-0 transform -translate-x-[3px] -translate-y-[2px]">
              ¡Domina tus finanzas jugando!
            </span>
          </h2>
          <p className="text-neutral-500 text-center md:text-start font-semibold text-[1.1rem] sm:text-h6 lg:text-h5">
            CashBoom te enseña a ahorrar, invertir y crecer con cuestionarios gamificados.
          </p>
          <Button
            as={Link}
            href="/login"
            className="w-auto flex flex-row flex-nowrap items-center gap-2 rounded-md px-6 py-2 text-[1.1rem] lg:text-[1.3rem] font-semibold bg-green-600 text-gray-50"
          >
            Empieza gratis
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="transform group-hover:translate-x-1 transition-transform ease-in-out duration-200">
                <path fill="none" stroke="currentColor" strokeWidth="2" d="M2 12h20m-9-9l9 9l-9 9"/>
            </svg>
          </Button>
        </div>
        <Image
          src='/images/common/landingImage.png'
          alt="App Showcase"
          width={800}
          height={600}
          className="w-[800px] sm:w-[550px] lg:w-[750px] h-auto"
        />
      </section>
      
    </main>
  );
}
