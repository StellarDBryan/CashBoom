import { Button, Card, CardBody, CardFooter } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    src: '/images/common/online-learning.png', 
    alt: 'Online Learning', 
    phrase: 'Aprende mientras juegas'
  }, 
  {
    src: '/images/common/expertise.png', 
    alt: 'Expertise', 
    phrase: 'Educación hecha por expertos'
  }, 
  {
    src: '/images/common/fire.png', 
    alt: 'Flame', 
    phrase: 'Sistema de rachas y recompensas'
  }, 
  {
    src: '/images/common/learning.png', 
    alt: 'Learning', 
    phrase: 'Desde lo básico hasta inversiones'
  }
];


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
            className="w-auto flex flex-row flex-nowrap items-center gap-2 rounded-md px-6 py-2 text-[1.1rem] lg:text-[1.3rem] font-semibold bg-gradient-to-r from-green-500 to-yellow-400 text-gray-50"
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
          loading="lazy"
          width={800}
          height={600}
          className="w-[800px] sm:w-[550px] lg:w-[750px] h-auto"
        />
      </section>

      <section className="flex flex-col items-center justify-center py-10 gap-10 bg-gradient-to-b from-green-100 to-gray-50 w-full overflow-hidden">
        <h2 className="text-h5 sm:text-h3 md:text-h2 z-10 font-extrabold text-green-600 relative">
          ¿Por qué usar CashBoom?
          <span className="text-yellow-300 -z-10 absolute inset-0 transform -translate-x-[3px] -translate-y-[2px]">
            ¿Por qué usar CashBoom?
          </span>
        </h2>
        <div className="flex flex-row flex-wrap gap-5 items-center justify-center">
          {benefits.map((benefit, id) => (
            <Card key={`Benefit ${id}`} className="rounded-2xl shadow-lg w-[160px] sm:w-[170px] md:w-[200px] lg:w-[250px] py-5 bg-gradient-to-b from-gray-50 to-yellow-50">
              <CardBody className="mx-auto">
                <Image 
                  src={benefit.src}
                  alt={`${benefit.alt} Icon`}
                  width={100}
                  height={100}
                  className="w-[70%] mx-auto"
                />
              </CardBody>
              <CardFooter className="flex justify-center text-center font-semibold text-[1rem] sm:text-[1.1rem] md:text-[1.25rem] lg:text-[1.5rem] text-green-600">
                {benefit.phrase}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      
    </main>
  );
}
