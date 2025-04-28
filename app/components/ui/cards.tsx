import { Questionnaire } from "@/app/api/data";
import { Button, Card, CardBody, CardFooter, CardHeader, Progress } from "@heroui/react";


export function QuestionnaireCard({ questionnaire }: { questionnaire: Questionnaire }){

    return(
        <Card as={Button} className="w-1/3 bg-gray-50 roumded-md drop-shadow-md">
            <CardHeader className="pb-0">
                {questionnaire.icon}
            </CardHeader>
            <CardBody className="flex flex-col gap-1">
                <h6 className="text-[1.1rem] text-green-800 font-semibold truncate">
                    {questionnaire.title}
                </h6>
                <p className="text-regular text-gray-600 font-medium truncate ">
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