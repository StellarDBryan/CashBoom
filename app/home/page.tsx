"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { useSession } from "next-auth/react";
import { levels, questionnaires } from "../api/data";
import { QuestionnaireCard } from "../components/ui/cards";

const content = {
    user: "¡Hola, ", 
    intro: "Contunua con tu viaje de aprendizaje financiero. ",
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
        <main className="bg-gray-50 py-5 px-7">
            <div className="w-full flex flex-col flex-nowrap justify-center text-neutral-800">
                <h4 className="font-semibold text-h4">
                    {content.user}{session?.user?.name}!
                </h4>
                <p className="text-medium text-h6">
                    {content.intro}
                </p>
            </div>
            <Accordion selectionMode="multiple">
                {levels.map((level, id) => (
                    <AccordionItem key={id} title={level.title} 
                        classNames={{
                            title: "font-semibold text-green-700 text-[1.4rem]"
                        }}
                    >
                        {// Validar que se rendericen por LevelID (de momento solo un cuestionario en todos para testing)
                            questionnaires.map((questionnaire, id) => (
                                <QuestionnaireCard key={id} questionnaire={questionnaire} />
                            ))
                        }
                    </AccordionItem>
                ))}
            </Accordion>
        </main>
    );
}