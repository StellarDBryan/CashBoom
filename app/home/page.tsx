"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { useSession } from "next-auth/react";
import { levels, questionnaires } from "../api/data";
import { QuestionnaireCard } from "../components/ui/cards";
import { Jersey_15 } from 'next/font/google'; 

const jersey = Jersey_15({
    subsets: ["latin"], 
    weight: '400'
});

const content = {
    user: "¡Hola, ", 
    intro: "Continúa con tu viaje de aprendizaje financiero. ",
    levels: [
        {
            title: "Principiante", 

        }
    ]
};

export interface LectionCard {
    headerIcon: React.ReactNode, 
    body: {
        title: string, 
        intro: string
    }, 
    
}

export default function Page() {

    const { data: session } = useSession();

    return (
        <main className="bg-gray-50 py-5 px-2 md:px-7 overflow-hidden">
            <div className="w-full flex flex-col gap-2 flex-nowrap justify-center text-neutral-800">
                <h4 className={`${jersey.className} font-semibold text-[2.3rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] text-green-700`}>
                    {content.user}{session?.user?.name}!
                </h4>
                <p className="text-medium text-[1.2rem] md:text-[1.3rem]">
                    {content.intro}
                </p>
            </div>
            <Accordion selectionMode="multiple" defaultExpandedKeys={["0"]}>
                {levels.map((level, id) => (
                    <AccordionItem key={id} title={level.title} 
                        classNames={{
                            title: `font-semibold ${jersey.className} text-green-700 text-[1.7rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[3rem]`
                        }}
                    >
                        <div className="w-full pb-8 flex flex-row flex-wrap justify-center sm:justify-start items-center gap-5">
                            {// Validar que se rendericen por LevelID (de momento solo un cuestionario en todos para testing)
                                questionnaires.map((questionnaire, id) => (
                                    <QuestionnaireCard key={id} questionnaire={questionnaire} />
                                ))
                            }
                        </div>
                    </AccordionItem>
                ))}
            </Accordion>
        </main>
    );
}