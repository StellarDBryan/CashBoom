import { Challenge, Questionnaire, userAnswers } from "@/app/api/data";
import { Button, Card, CardBody, CardFooter, CardHeader, Progress } from "@heroui/react";
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

export function ChallengeCard({ challenge }: { challenge: Challenge }) {

    const userProgress = userAnswers.challenges.find(c => c.challengeId === challenge.id)?.progress ?? 0;

    return(
        <Card className="w-full sm:w-[47%] md:w-[45%] lg:w-[31.5%] flex flex-col p-2 rounded-md shadow-lg hover:shadow-xl hover:shadow-green-300 hover:-translate-y-1 transition-all ease-in-out duration-200 transform">
            <CardHeader className="text-[1.1rem] md:text-[1.25rem] text-neutral-800 font-semibold pb-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256" className="mr-2 text-green-600">
                    <path fill="currentColor" d="M216 96a88 88 0 1 0-144 67.83V240a8 8 0 0 0 11.58 7.16L128 225l44.43 22.21a8.1 8.1 0 0 0 3.57.79a8 8 0 0 0 8-8v-76.17A87.85 87.85 0 0 0 216 96M56 96a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72m16 0a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"/>
                </svg>
                <h6 className="text-wrap-truncate line-clamp-2">
                    {challenge.title}
                </h6>
            </CardHeader>
            <CardBody className="flex flex-col gap-2">
                <p className="text-[1rem] text-neutral-500 font-medium text-wrap truncate line-clamp-2">
                    {challenge.description}
                </p>
                <div className="flex flex-row flex-nowrap items-center gap-2 text-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M264.4 95.01c-35.6-.06-80.2 11.19-124.2 34.09C96.27 152 61.45 182 41.01 211.3c-20.45 29.2-25.98 56.4-15.92 75.8c10.07 19.3 35.53 30.4 71.22 30.4c35.69.1 80.29-11.2 124.19-34c44-22.9 78.8-53 99.2-82.2c20.5-29.2 25.9-56.4 15.9-75.8c-10.1-19.3-35.5-30.49-71.2-30.49m91.9 70.29c-3.5 15.3-11.1 31-21.8 46.3c-22.6 32.3-59.5 63.8-105.7 87.8c-46.2 24.1-93.1 36.2-132.5 36.2c-18.6 0-35.84-2.8-50.37-8.7l10.59 20.4c10.08 19.4 35.47 30.5 71.18 30.5c35.7 0 80.3-11.2 124.2-34.1c44-22.8 78.8-52.9 99.2-82.2c20.4-29.2 26-56.4 15.9-75.7zm28.8 16.8c11.2 26.7 2.2 59.2-19.2 89.7c-18.9 27.1-47.8 53.4-83.6 75.4c11.1 1.2 22.7 1.8 34.5 1.8c49.5 0 94.3-10.6 125.9-27.1c31.7-16.5 49.1-38.1 49.1-59.9s-17.4-43.4-49.1-59.9c-16.1-8.4-35.7-15.3-57.6-20m106.7 124.8c-10.2 11.9-24.2 22.4-40.7 31c-35 18.2-82.2 29.1-134.3 29.1c-21.2 0-41.6-1.8-60.7-5.2c-23.2 11.7-46.5 20.4-68.9 26.1c1.2.7 2.4 1.3 3.7 2c31.6 16.5 76.4 27.1 125.9 27.1s94.3-10.6 125.9-27.1c31.7-16.5 49.1-38.1 49.1-59.9z"/>
                    </svg>
                    <span className="text-[0.9rem] font-bold ">
                        Recompensa: {challenge.reward} CashPoints
                    </span>
                </div>
                <Progress 
                    label={`Progreso`}
                    showValueLabel
                    value={(userProgress * 100)/challenge.required} 
                    radius="sm"
                    size="md"
                    classNames={{
                        label: 'text-[0.9rem] text-neutral-500 font-medium', 
                        track: 'h-[9px]',
                        indicator: 'bg-gradient-to-r from-green-400 to-yellow-300 h-[9px]', 
                        value: 'text-[0.9rem] text-neutral-500 font-medium'
                    }}
                    />
            </CardBody>
            <CardFooter className=" pt-1">
                <Button 
                    isDisabled={userProgress < challenge.required}
                    variant="solid"
                    radius="sm"
                    className={`ml-auto font-semibold text-[1rem]
                        ${userProgress === challenge.required 
                            ? 'bg-yellow-400 text-green-600' 
                            : 'bg-transparent text-neutral-900'
                    } `}>
                    {userProgress === challenge.required
                        ? "Reclamar"
                        : "En progreso..."}
                </Button>
            </CardFooter>
        </Card>
    );
}