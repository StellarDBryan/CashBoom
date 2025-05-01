interface question {
    id: number, 
    question: string, 
    description: string,
    options: string[], 
    answer: number
};

export interface Questionnaire {
    id: number,
    levelId: number,
    title: string,
    intro: string,
    icon?: React.ReactNode,
    questions: question[]
}

export interface Challenge {
  id: number, 
  title: string, 
  description: string, 
  type: string, 
  required: number,
  reward: number
}

interface QuestionnaireAnswers {
  questionnaireId: number, 
  answersGiven: number[]
}

interface ChallengesProgress {
  challengeId: number, 
  progress: number
}

export interface UsersAnswered {
  questionnaires: QuestionnaireAnswers[], 
  challenges: ChallengesProgress[]
}

export const levels = [
    {
      id: 1,
      title: "Principiante",
      difficulty: 1,
      description: "Empieza tu viaje financiero desde lo más básico.",
    },
    {
      id: 2,
      title: "Novato",
      difficulty: 1,
      description: "Aprende los fundamentos para mejorar tus finanzas.",
    },
    {
      id: 3,
      title: "Intermedio",
      difficulty: 2,
      description: "Profundiza en el manejo de dinero y ahorro.",
    },
    {
      id: 4,
      title: "Avanzado",
      difficulty: 2,
      description: "Domina conceptos de inversión y crecimiento.",
    },
    {
      id: 5,
      title: "Experto",
      difficulty: 3,
      description: "Convierte tus conocimientos en estrategias financieras reales.",
    },
    {
      id: 6,
      title: "Maestro",
      difficulty: 5,
      description: "Alcanza la maestría en libertad financiera.",
    },
  ];
  
export const questionnaires: Questionnaire[] = [
    {
        id: 1, 
        levelId: 1,
        title: "Conceptos Básicos de Finanzas", 
        intro: "Aprende los fundamentos financieros escenciales. ", 
        questions: [
            {
                id: 1, 
                question: "¿Qué es el ahorro?", 
                description: "El ahorro es una parte fundamental de las finanzas personales. Selecciona la definición correcta: ", 
                options: [
                    "Gastar todo el dinero que se gana inmediatamente. ", 
                    "Guardar dinero para gastos futuros, metas o emergencias. ", 
                    "Invertir todo el dinero en activos de alto riesgo. ", 
                    "Pedir préstamos para comprar cosas que no podemos pagar. "
                ], 
                answer: 1
            }
        ], 
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-gray-50 bg-green-700 p-2 rounded-full w-[50px] h-[50px]">
              <g fill="none">
                <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                <path fill="currentColor" d="m11.287 4.717l.307-.13c2.85-1.268 5.68-1.237 7.531-.996l.41.058l.372.063l.333.065l.29.063c.864.198 1.404.937 1.464 1.731l.006.15v11.585c0 1.027-.976 1.701-1.893 1.49l-.28-.062l-.325-.062l-.365-.06a14 14 0 0 0-.616-.079l-.453-.04c-1.483-.104-3.414.001-5.355.79l-.307.13c-2.63 1.17-5.244 1.234-7.087 1.047l-.444-.05l-.41-.06l-.372-.063l-.172-.032l-.45-.095c-.865-.198-1.405-.937-1.465-1.731L2 18.279V6.694c0-1.027.976-1.702 1.893-1.49l.28.062l.325.062l.365.06c1.536.23 3.972.326 6.424-.671M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4"/>
              </g> 
            </svg>
        )
    }, 
    {
      id: 1, 
      levelId: 1,
      title: "Conceptos Básicos de Finanzas", 
      intro: "Aprende los fundamentos financieros escenciales. ", 
      questions: [
          {
              id: 1, 
              question: "¿Qué es el ahorro?", 
              description: "El ahorro es una parte fundamental de las finanzas personales. Selecciona la definición correcta: ", 
              options: [
                  "Gastar todo el dinero que se gana inmediatamente. ", 
                  "Guardar dinero para gastos futuros, metas o emergencias. ", 
                  "Invertir todo el dinero en activos de alto riesgo. ", 
                  "Pedir préstamos para comprar cosas que no podemos pagar. "
              ], 
              answer: 1
          }
      ], 
      icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-gray-50 bg-green-700 p-2 rounded-full w-[50px] h-[50px]">
            <g fill="none">
              <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
              <path fill="currentColor" d="m11.287 4.717l.307-.13c2.85-1.268 5.68-1.237 7.531-.996l.41.058l.372.063l.333.065l.29.063c.864.198 1.404.937 1.464 1.731l.006.15v11.585c0 1.027-.976 1.701-1.893 1.49l-.28-.062l-.325-.062l-.365-.06a14 14 0 0 0-.616-.079l-.453-.04c-1.483-.104-3.414.001-5.355.79l-.307.13c-2.63 1.17-5.244 1.234-7.087 1.047l-.444-.05l-.41-.06l-.372-.063l-.172-.032l-.45-.095c-.865-.198-1.405-.937-1.465-1.731L2 18.279V6.694c0-1.027.976-1.702 1.893-1.49l.28.062l.325.062l.365.06c1.536.23 3.972.326 6.424-.671M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4"/>
            </g> 
          </svg>
      )
  }, 
  {
    id: 1, 
    levelId: 1,
    title: "Conceptos Básicos de Finanzas", 
    intro: "Aprende los fundamentos financieros escenciales. ", 
    questions: [
        {
            id: 1, 
            question: "¿Qué es el ahorro?", 
            description: "El ahorro es una parte fundamental de las finanzas personales. Selecciona la definición correcta: ", 
            options: [
                "Gastar todo el dinero que se gana inmediatamente. ", 
                "Guardar dinero para gastos futuros, metas o emergencias. ", 
                "Invertir todo el dinero en activos de alto riesgo. ", 
                "Pedir préstamos para comprar cosas que no podemos pagar. "
            ], 
            answer: 1
        }
    ], 
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-gray-50 bg-green-700 p-2 rounded-full w-[50px] h-[50px]">
          <g fill="none">
            <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
            <path fill="currentColor" d="m11.287 4.717l.307-.13c2.85-1.268 5.68-1.237 7.531-.996l.41.058l.372.063l.333.065l.29.063c.864.198 1.404.937 1.464 1.731l.006.15v11.585c0 1.027-.976 1.701-1.893 1.49l-.28-.062l-.325-.062l-.365-.06a14 14 0 0 0-.616-.079l-.453-.04c-1.483-.104-3.414.001-5.355.79l-.307.13c-2.63 1.17-5.244 1.234-7.087 1.047l-.444-.05l-.41-.06l-.372-.063l-.172-.032l-.45-.095c-.865-.198-1.405-.937-1.465-1.731L2 18.279V6.694c0-1.027.976-1.702 1.893-1.49l.28.062l.325.062l.365.06c1.536.23 3.972.326 6.424-.671M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4"/>
          </g> 
        </svg>
    )
  }, 
  {
    id: 1, 
    levelId: 1,
    title: "Conceptos Básicos de Finanzas", 
    intro: "Aprende los fundamentos financieros escenciales. ", 
    questions: [
        {
            id: 1, 
            question: "¿Qué es el ahorro?", 
            description: "El ahorro es una parte fundamental de las finanzas personales. Selecciona la definición correcta: ", 
            options: [
                "Gastar todo el dinero que se gana inmediatamente. ", 
                "Guardar dinero para gastos futuros, metas o emergencias. ", 
                "Invertir todo el dinero en activos de alto riesgo. ", 
                "Pedir préstamos para comprar cosas que no podemos pagar. "
            ], 
            answer: 1
        }
    ], 
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-gray-50 bg-green-700 p-2 rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px]">
          <g fill="none">
            <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
            <path fill="currentColor" d="m11.287 4.717l.307-.13c2.85-1.268 5.68-1.237 7.531-.996l.41.058l.372.063l.333.065l.29.063c.864.198 1.404.937 1.464 1.731l.006.15v11.585c0 1.027-.976 1.701-1.893 1.49l-.28-.062l-.325-.062l-.365-.06a14 14 0 0 0-.616-.079l-.453-.04c-1.483-.104-3.414.001-5.355.79l-.307.13c-2.63 1.17-5.244 1.234-7.087 1.047l-.444-.05l-.41-.06l-.372-.063l-.172-.032l-.45-.095c-.865-.198-1.405-.937-1.465-1.731L2 18.279V6.694c0-1.027.976-1.702 1.893-1.49l.28.062l.325.062l.365.06c1.536.23 3.972.326 6.424-.671M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4"/>
          </g> 
        </svg>
    )
  }
];

export const challenges: Challenge[] = [
  {
    id: 1,
    title: "Completar una lección", 
    description: "Completa al menos una lección financiera para ganar puntos extra.", 
    type: "Cuestionario", 
    required: 1, 
    reward: 30
  }
];

export const userAnswers: UsersAnswered = {
  questionnaires: [], 
  challenges: []
};