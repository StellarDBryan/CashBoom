"use client";

import { addToast, Button, Card, CardBody, CardFooter, CardHeader, cn } from "@heroui/react";
import { Jersey_15 } from "next/font/google";

const jersey = Jersey_15({
    subsets: ["latin"], 
    weight: '400'
});

const plans = [
    {
      name: 'Inversionista Inicial',
      price: '$99 MXN',
      features: [
        'Todo lo anterior.',
        '+20 cuestionarios sobre inversión básica (fondos, CETES, Afore, riesgo).',
        'Módulo exclusivo de simulador de inversión.',
        'Recompensas semanales (puntos, monedas).',
        'Acceso anticipado a retos financieros.',
      ],
      color: 'amber',
    },
    {
      name: 'Trader Financiero',
      price: '$149 MXN',
      features: [
        'Todo lo anterior.',
        'Cuestionarios y lecciones avanzadas sobre acciones, criptomonedas, diversificación.',
        'Estadísticas de desempeño avanzado.',
        'Modo desafío: juegos tipo “time attack”.',
        'Asesorías grabadas de expertos (micro-clases de 5 min).',
        'Badge especial en perfil.',
      ],
      color: 'blue',
    },
    {
      name: 'Maestro del Dinero',
      price: '$249 MXN',
      features: [
        'Acceso total a todos los cuestionarios y módulos.',
        'Rutas de formación completas: de principiante a experto.',
        'Acceso prioritario a futuros cursos en video o certificaciones.',
        'Interacción con comunidad VIP (foros o chats).',
        'Certificado digital de finalización.',
        'Soporte personalizado.',
      ],
      color: 'red',
    },
  ];

export default function Page() {
    return (
        <main className="flex flex-col items-center gap-4 py-5 px-3 md:px-8 min-h-screen w-full bg-gray-50 overflow-hidden" >
            <h2 className={`${jersey.className} text-green-700 text-[2.8rem] md:text-[3.5rem]`}>
                Tienda
            </h2>
            <p className="text-h6 md:text-h5 font-medium max-w-[90%]">
                Explora nuestros planes para comprar más lecciones de formación financiera. 
            </p>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
                {plans.map((plan, index) => (
                    <Card
                    key={index}
                    className={cn(
                        'p-4 border-2 shadow-lg transition-all hover:shadow-2xl hover:scale-[1.01]',
                        `border-${plan.color}-500 hover:shadow-${plan.color}-500`
                    )}
                    >
                        <CardHeader className="flex flex-col items-center gap-2">
                            <h3 className={`${jersey.className} text-center text-[2rem] sm:text-[2.3rem] md:text-[2.7rem] font-bold text-green-700`}>{plan.name}</h3>
                            <span className="text-h4 sm:text-h3 font-semibold text-neutral-600">{plan.price}</span>
                        </CardHeader>
                        <CardBody>
                            <ul className="list-none space-y-2">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex flex-row items-start gap-2 text-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-green-600">
                                            <path fill="currentColor" d="M22 4v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-2h2v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4z"/>
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardBody>
                        <CardFooter>
                            <Button
                                onPress={() => {
                                    addToast({
                                        color: 'primary',
                                        timeout: 2200, 
                                        title: '¡Compra exitosa!', 
                                        description: 'Nuevas lecciones están disponibles en Inicio. '
                                    });
                                }}
                                className="flex flex-row flex-nowrap items-center gap-2 px-6 py-2 border-b-2 border-transparent hover:border-green-600 rounded-none text-[1.2rem] bg-inherit text-green-600 font-semibold mx-auto"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                    <path fill="currentColor" d="M4 7a1 1 0 0 0 0 2h2.22l2.624 10.5c.223.89 1.02 1.5 1.937 1.5h12.47c.903 0 1.67-.6 1.907-1.47L27.75 10h-2.094l-2.406 9H10.78L8.157 8.5A1.984 1.984 0 0 0 6.22 7zm18 14c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m-9 0c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m3-14v5h-3l4 4l4-4h-3V7zm-3 16c.564 0 1 .436 1 1s-.436 1-1 1s-1-.436-1-1s.436-1 1-1m9 0c.564 0 1 .436 1 1s-.436 1-1 1s-1-.436-1-1s.436-1 1-1"/>
                                </svg>
                                Comprar plan
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </main>
    );
}