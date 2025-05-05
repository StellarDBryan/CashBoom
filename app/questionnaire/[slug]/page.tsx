"use client";

import { questionnaires } from "@/app/api/data"
import { Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
    Radio, 
    RadioGroup, 
    cn, 
    Button, 
    Pagination, 
    addToast, 
    useDisclosure, 
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter} from "@heroui/react";
import { useState } from "react";
import { Jersey_15 } from 'next/font/google'; 
import { useRouter } from "next/navigation";
import { useUserStats } from "@/app/UserStatsContext";
import { saveCorrectAnswers } from "@/app/UserProgressContext";

const jersey = Jersey_15({
    subsets: ["latin"], 
    weight: '400'
});

export default function Page({ params }: { params: { slug: string } }) {
    const router = useRouter();

    const [ step, setStep ] = useState(0);
    const [ answers, setAnswers ] = useState<number[]>([]);
    const [ questionsAnswered, setQuestionsAnswered ] = useState<number[]>([]);
    const [ showCorrectAnswer, setShowCorrectAnswer ] = useState(false);
    const [ selectedAnswer, setSelectedAnswer ] = useState<number | null>(null);
    const [ correctAnswers, setCorrectAnswers ] = useState(0);

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const { lives, loseLife, gainPoints } = useUserStats();

    const questionnaire = questionnaires.find(q => q.id === Number(params.slug));
    const currentQuestion = questionnaire?.questions[step];

    const handleCheckAnswer = () => {
        if (selectedAnswer !== null) {
            setShowCorrectAnswer(true);
            setAnswers(prev => [...prev, selectedAnswer]);
            setQuestionsAnswered(prev => [...prev, step]);

            if (selectedAnswer === currentQuestion?.answer) {
                addToast({
                    title: "¡Correcto! +10 CashPoints", 
                    color: 'success', 
                    timeout: 2000
                });
                gainPoints(10);
                setCorrectAnswers(prev => prev + 1);
            } else {
                loseLife();
                addToast({
                    title: "¡Incorrecto! -1 Vida", 
                    color: 'danger', 
                    timeout: 2000
                });
            }
        }
    };

    const handlePageChange = (newStep: number) => {
        setStep(newStep);
        setShowCorrectAnswer(false);
        if (questionsAnswered.includes(newStep)) {
            setSelectedAnswer(answers[questionsAnswered.indexOf(newStep)]);
        } else {
            setSelectedAnswer(null);
        }
    };

    const isQuestionAnswered = questionsAnswered.includes(step);
    const currentAnswer = answers[questionsAnswered.indexOf(step)];

    return(
        <main className="w-full bg-gray-50 flex flex-col gap-2 py-5 px-2 md:px-8 overflow-hidden relative">
            <div className="object-cover absolute right-[16%] opacity-30 bottom-[20%] transform scale-[9] -rotate-12 pointer-events-none">
                {questionnaire?.icon}
            </div>
            <h2 className={`${jersey.className} md:ml-[10%] lg:ml-[16.6666665%] text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] font-semibold text-green-700`}>
                {questionnaire?.title}
            </h2>
            <div className="flex flex-col gap-3 w-[95%] sm:w-[90%] md:w-4/5 lg:w-2/3 mx-auto">
                <p className="text-h6 text-neutral-700 font-medium text-wrap">
                    {questionnaire?.intro}
                </p>
                <Card className="w-full p-5 rounded-lg bg-inherit shadow-none">
                    <CardHeader className="text-[1.25rem] md:text-[1.5rem] font-semibold">
                        {currentQuestion?.question}
                    </CardHeader>
                    <CardBody className="flex flex-col gap-5">
                        <p className="text-[1.1rem] md:text-[1.2rem] font-medium">
                            {currentQuestion?.description}
                        </p>
                        <div>
                            <RadioGroup 
                                isReadOnly={isQuestionAnswered || showCorrectAnswer}
                                value={isQuestionAnswered ? currentQuestion?.options[currentAnswer] : undefined}
                                onValueChange={(value) => {
                                    setSelectedAnswer(currentQuestion?.options.findIndex(o => o === value) ?? null);
                                    setShowCorrectAnswer(false);
                                }}
                                classNames={{
                                    wrapper: 'flex flex-col gap-5'
                                }}
                            >
                                {currentQuestion?.options.map((option, id) => (
                                    <Radio key={`${currentQuestion.id}-${id}`} value={option}
                                        classNames={{
                                            base: cn(
                                                'flex flex-row-reverse justify-between gap-3 font-medium rounded-lg px-2 py-4 text-wrap border-2 boder-black', 
                                                !showCorrectAnswer && 'data-[selected=true]:border-success data-[selected=true]:bg-green-600/10',
                                                showCorrectAnswer && id === currentQuestion?.answer && 'border-success bg-green-600/10 animate-pulse',
                                                showCorrectAnswer && id === selectedAnswer && id !== currentQuestion?.answer && 'border-danger bg-red-600/30 animate-pulse'
                                            ),
                                            label: 'text-[1.1rem]', 
                                            wrapper: 'bg-gray-100'
                                        }}
                                    >
                                        {option}
                                    </Radio>
                                ))}
                            </RadioGroup>
                        </div>
                    </CardBody>
                    <CardFooter>
                        {!showCorrectAnswer && !isQuestionAnswered && 
                        <Button 
                            className="flex flex-row items-center gap-2 py-2 px-6 rounded-lg bg-green-600 text-[1.1rem] font-semibold text-gray-50"
                            onPress={handleCheckAnswer}
                            isDisabled={selectedAnswer === null || isQuestionAnswered}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M18 5v6h-1v1h-2v1h-1v2H9v-3h1v-1h1v-1h2V9h1V7h-1V6h-2v1h-1v1H9v1H8V8H7V7H6V6H5V5h1V4h1V3h2V2h6v1h1v1h1v1zm-5 13h1v3h-1v1h-3v-1H9v-3h1v-1h3z"/>
                            </svg>
                            Comprovar
                        </Button>}
                        {(showCorrectAnswer || isQuestionAnswered) && step < questionnaire!.questions.length - 1 ? 
                        <Button 
                            onPress={() => handlePageChange(step+1)}
                            className="flex flex-row flex-nowrap items-center group gap-2 px-6 py-4 text-[1.1rem] font-semibold text-neutral-700 bg-gray-200 rounded-lg">
                            Continuar
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="transform group-hover:translate-x-1 transition-transform ease-in-out duration-200">
                                <path fill="none" stroke="currentColor" strokeWidth="2" d="M2 12h20m-9-9l9 9l-9 9"/>
                            </svg>
                        </Button> : ''}
                        {step === questionnaire!.questions.length - 1 && answers.length === questionnaire!.questions.length && 
                            <Button 
                                onPress={onOpen}
                                className="flex flex-row items-center gap-2 py-2 px-6 rounded-lg bg-green-600 text-[1.1rem] font-semibold text-gray-50"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="m21.29 5.89l-10 10a.996.996 0 0 1-1.41 0l-2.83-2.83a.996.996 0 1 1 1.41-1.41l2.12 2.12l9.29-9.29a.996.996 0 0 1 1.41 0c.4.39.4 1.02.01 1.41m-5.52-3.15c-1.69-.69-3.61-.93-5.61-.57c-4.07.73-7.32 4.01-8.01 8.08a10.01 10.01 0 0 0 11.19 11.66c3.96-.51 7.28-3.46 8.32-7.31c.4-1.47.44-2.89.21-4.22c-.13-.8-1.12-1.11-1.7-.54c-.23.23-.33.57-.27.89c.22 1.33.12 2.75-.52 4.26c-1.16 2.71-3.68 4.7-6.61 4.97c-5.1.47-9.33-3.85-8.7-8.98c.43-3.54 3.28-6.42 6.81-6.91c1.73-.24 3.37.09 4.77.81a1.003 1.003 0 0 0 .93-1.78c-.27-.12-.54-.25-.81-.36"/>
                                </svg>
                                Finalizar
                            </Button>}
                    </CardFooter>
                </Card>
                <Pagination 
                    className="mx-auto"
                    initialPage={1} 
                    page={step + 1}
                    total={questionnaire!.questions.length}
                    color="success"
                    onChange={(page) => handlePageChange(page - 1)}
                />
            </div>
            <Modal placement="center" isOpen={lives === 0} isDismissable={false} hideCloseButton>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>
                                Perdiste
                            </ModalHeader>
                            <ModalBody>
                                ¡Perdiste todas tus vidas! Podrás continuar cuando obtegas más vidas. 
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    onPress={() => {
                                        onClose();
                                        router.push('/home');
                                        saveCorrectAnswers(questionnaire!.id, correctAnswers);
                                    }}
                                    className="flex flex-row items-center gap-2 py-2 px-6 rounded-lg bg-green-600 text-[1.1rem] font-semibold text-gray-50"
                                >
                                    Continuar
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="transform group-hover:translate-x-1 transition-transform ease-in-out duration-200">
                                        <path fill="none" stroke="currentColor" strokeWidth="2" d="M2 12h20m-9-9l9 9l-9 9"/>
                                    </svg>
                                </ Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Modal placement="center" isDismissable={false} isOpen={isOpen} onOpenChange={onOpenChange} >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>
                                ¡Lección Completada!
                            </ModalHeader>
                            <ModalBody>
                                Has respondido correctamente {correctAnswers} de {questionnaire?.questions.length} preguntas
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    onPress={() => {
                                        onClose();
                                        router.push('/home');
                                        saveCorrectAnswers(questionnaire!.id, correctAnswers);
                                    }}
                                    className="flex flex-row items-center gap-2 py-2 px-6 rounded-lg bg-green-600 text-[1.1rem] font-semibold text-gray-50"
                                >
                                    Continuar
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="transform group-hover:translate-x-1 transition-transform ease-in-out duration-200">
                                        <path fill="none" stroke="currentColor" strokeWidth="2" d="M2 12h20m-9-9l9 9l-9 9"/>
                                    </svg>
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </main>
    );
  }
