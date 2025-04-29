import { Questionnaire } from "@/app/api/data";
import { Card, CardBody, CardFooter, CardHeader, Progress } from "@heroui/react";
import Link from "next/link";


export function QuestionnaireCard({ questionnaire }: { questionnaire: Questionnaire }){

    return(
        <Card as={Link} href={`/questionnaire/${questionnaire.id}`} className="w-full sm:w-[47%] md:w-[45%] lg:w-[31.5%] p-1 bg-gray-50 roumded-md shadow-neutral-400 shadow-lg hover:shadow-xl hover:shadow-green-300 hover:-translate-y-1 transition-all duration-200 ease-in-out transform">
            <CardHeader className="pb-0">
                {questionnaire.icon}
            </CardHeader>
            <CardBody className="flex flex-col gap-2">
                <h6 className="text-[1.1rem] md:text-[1.2rem] text-green-800 font-semibold text-wrap line-clamp-2 truncate">
                    {questionnaire.title}
                </h6>
                <p className="text-[0.9rem] md:text-regular text-gray-600 font-medium text-wrap line-clamp-2 truncate ">
                    {questionnaire.intro}
                </p>
                <Progress />
            </CardBody>
            <CardFooter className="flex flex-row items-center justify-between text-sm1">
                <p className="text-neutral-600">
                    0% Completado
                </p>
                <p className="text-neutral-600">
                    0/{questionnaire.questions.length} preguntas
                </p>
            </CardFooter>
        </Card>
    );
}