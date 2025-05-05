"use client";

import { BlogPost, Challenge, Questionnaire, userAnswers } from "@/app/api/data";
import { getUserAnswers } from "@/app/UserProgressContext";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Progress } from "@heroui/react";
import Link from "next/link";
import { useEffect, useState } from "react";


export function QuestionnaireCard({ questionnaire }: { questionnaire: Questionnaire }){

    const [progress, setProgress] = useState<number | null>(null);
    const [isClient, setIsClient] = useState(false); // <- Flag para saber si ya estás en cliente

    useEffect(() => {
        setIsClient(true);
        const data = getUserAnswers();
        const entry = data.questionnaires.find(q => q.questionnaireId === questionnaire.id)
        setProgress(entry?.answeredCorrectly || 0)
    }, []);

    if (!isClient) return null;

    return(
        <Card as={Link} href={`/questionnaire/${questionnaire.id}`} className="w-full sm:w-[47%] md:w-[45%] lg:w-[31.5%] p-1 bg-gray-50 rounded-2xl shadow-neutral-400 shadow-lg hover:shadow-xl hover:shadow-green-300 hover:-translate-y-1 transition-all duration-200 ease-in-out transform">
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
                <Progress 
                    value={progress ? (progress * 100)/questionnaire.questions.length : 0} 
                    size="md"
                    radius="sm"  
                    classNames={{
                        track: 'h-[9px]',
                        indicator: 'bg-gradient-to-r from-green-400 to-yellow-300 h-[9px]'
                    }}  
                />
            </CardBody>
            <CardFooter className="flex flex-row items-center justify-between text-sm1">
                <p className="text-neutral-600">
                    {progress ? (progress * 100)/questionnaire.questions.length : 0}% Completado
                </p>
                <p className="text-neutral-600">
                    {progress ? progress : 0}/{questionnaire.questions.length} preguntas
                </p>
            </CardFooter>
        </Card>
    );
}

export function ChallengeCard({ challenge }: { challenge: Challenge }) {

    const userProgress = userAnswers.challenges.find(c => c.challengeId === challenge.id)?.progress ?? 0;

    return(
        <Card className="w-full sm:w-[47%] md:w-[45%] lg:w-[31.5%] flex flex-col p-2 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-green-300 hover:-translate-y-1 transition-all ease-in-out duration-200 transform">
            <CardHeader className="text-[1.1rem] md:text-[1.25rem] text-neutral-800 font-semibold pb-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256" className="mr-2 text-green-600">
                    <path fill="currentColor" d="M216 96a88 88 0 1 0-144 67.83V240a8 8 0 0 0 11.58 7.16L128 225l44.43 22.21a8.1 8.1 0 0 0 3.57.79a8 8 0 0 0 8-8v-76.17A87.85 87.85 0 0 0 216 96M56 96a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72m16 0a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"/>
                </svg>
                <h6 className="text-wrap-truncate line-clamp-2">
                    {challenge.title}
                </h6>
            </CardHeader>
            <CardBody className="flex flex-col gap-2">
                <p className="text-[1rem] text-neutral-500 font-medium text-wrap truncate line-clamp-2 min-h-[48px]">
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
                            ? 'bg-green-600 text-gray-50' 
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

export function BlogPostCard({ blogPost }: { blogPost: BlogPost }){

    // const [liked, setLiked] = useState(false);

    return(
        <Card className="w-full sm:w-[47%] md:w-[45%] lg:w-[31.5%] p-1 md:p-3 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-green-300 hover:-translate-y-1 transition-all ease-in-out duration-200 transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="212" height="300" viewBox="0 0 352 512" className="absolute -right-1 -top-2 text-green-500/10 transform rotate-45">
                <path fill="currentColor" d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a32 32 0 0 0 5.36-17.69l.04-38.35H96.01zM0 176c0 44.37 16.45 84.85 43.56 115.78c16.52 18.85 42.36 58.23 52.21 91.45c.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78c9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176C352 78.61 272.91-.3 175.45 0C73.44.31 0 82.97 0 176m176-80c-44.11 0-80 35.89-80 80c0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112c8.84 0 16 7.16 16 16s-7.16 16-16 16"/>
            </svg>
            <CardHeader className="pb-1 text-[1.1rem] text-neutral-800 font-semibold text-wrap line-clamp-2 truncate min-h-[54px]">
                {blogPost.title}
            </CardHeader>
            <CardBody className="flex flex-col gap-2 pt-0">
                <p className="text-[0.9rem] font-medium text-neutral-600 text-wrap">
                    {blogPost.content}
                </p>
                <div className="flex flex-row flex-wrap items-center gap-2 max-h-[60px]">
                    {blogPost.tags.map((tag, id) => (
                        <span key={id} className="bg-green-400/30 rounded-full py-1 px-2 text-[0.8rem] font-medium text-green-700">
                            {tag}
                        </span>
                    ))}
                </div>
            </CardBody>
            <Divider className="w-[95%] mx-auto" />
            <CardFooter className="pb-0 flex flex-row flex-nowrap justify-between">
                <p className="text-[0.8rem] font-medium text-neutral-500">
                    Por: {blogPost.author}
                </p>
                <div className="flex flex-row flex-nowrap gap-0 md:gap-2 items-center">
                    <Button
                        className="flex flex-row flex-nowrap items-center gap-1 rounded-lg text-[0.8rem] font-semibold text-neutral-500 bg-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                            <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 6.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C7.52 3 8.08 3 9.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C18 4.52 18 5.08 18 6.2v13.305c0 .486 0 .729-.101.862a.5.5 0 0 1-.37.198c-.167.01-.369-.125-.773-.394L12 17l-4.756 3.17c-.404.27-.606.405-.774.395a.5.5 0 0 1-.369-.198C6 20.234 6 19.991 6 19.505z"/>
                        </svg>
                        <span className="hidden md:inline-flex">Guardar</span>
                    </Button>
                    <Button className="flex flex-row flex-nowrap items-center gap-2 rounded-lg text-[0.8rem] font-semibold text-neutral-500 bg-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M2.5 209.1C1 221.1 0 233.3 0 245.7c0 109 59.7 203.9 148.1 254.2l16.5-34.8V227.4l-18.3-18.3zM512 227.4c0-18.3-18.3-36.6-36.6-36.6H329.1c9.1-36.6 18.3-73.1 18.3-91.4c0-36.6-18.3-73.1-27.4-82.3c-.2-.2-9.1-9.1-27.4-9.1c-27.4 0-27.4 27.4-27.4 27.4c0 .5-9.1 45.7-9.1 64s-36.6 91.4-54.9 109.7l-18.3 9.1v256l18.3 9.1h201.1c36.6 0 54.9-18.3 54.9-36.6s-18.3-36.6-36.6-36.6c36.6 0 54.9-18.3 54.9-36.6s-18.3-36.6-36.6-36.6c36.6 0 54.9-18.3 54.9-36.6s-18.3-36.6-36.6-36.6c36.5.3 54.8-18 54.8-36.3"/>
                        </svg>
                        {blogPost.likes}
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}