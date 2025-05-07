export interface Question {
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
    questions: Question[]
}

export interface Challenge {
  id: number, 
  title: string, 
  description: string, 
  type: string, 
  required: number,
  reward: number
}

export interface BlogPost {
  id: number, 
  title: string, 
  content: string, 
  tags: string[], 
  author: string, 
  likes: number
}

interface QuestionnaireAnswers {
  questionnaireId: number, 
  answeredCorrectly: number
}

interface ChallengesProgress {
  challengeId: number, 
  progress: number
}

interface BlogSaved {
  postId: number,
  savedPost: boolean, 
  likedPost: boolean
}

export interface UsersAnswered {
  questionnaires: QuestionnaireAnswers[], 
  challenges: ChallengesProgress[], 
  savedBlogPost: BlogSaved[] 
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
        }, 
        {
          id: 2, 
          question: "¿Cuál es la diferencia entre ingresos y gastos?", 
          description: "Es importante entender estos conceptos básicos para poder gestionar tus finanzas. Selecciona la respuesta correcta: ", 
          options: [
            "Los ingresos son gastos pequeños y los gastos con ingresos grandes. ", 
            "Los ingresos y gastos son lo mismo, solo cambia el momento en que ocurren.", 
            "Los ingresos son el dinero que entra a tus cuentas y los gastos son el dinero que sale. ", 
            "Los ingresos solo son el sueldo y los gastos solo son las compras en tiendas. "
          ], 
          answer: 2
        }, 
        {
          id: 3, 
          question: "¿Qué es un presupuesto?", 
          description: "Un presupuesto es una herramienta fundamental para la salud financiera. Selecciona la definición más adecuada: ", 
          options: [
            "Un documento que solo usan las grandes empresas. ", 
            "Un plan financiero que estima ingresos y gastos durante un período determinado.", 
            "Una lista de todas las deudas que tienes actualmente. ", 
            "Una estrategia para invertir en bolsa de valores. "
          ], 
          answer: 1
        }, 
        {
          id: 4, 
          question: "¿Qué es la tasa de interés?", 
          description: "La tasa de interés afecta tus préstamos y ahorros. Selecciona la respuesta correcta: ", 
          options: [
            "La cantidad de dinero que debes pagar a tu familia cuando te prestan dinero. ", 
            "Un impuesto que solo pagan las personas con altos ingresos. ", 
            "El porcentaje que se cobra o paga por el uso del dinero durante un tiempo específico. ", 
            "El precio de compra venta de acciones en la bolsa. "
          ], 
          answer: 2
        }, 
        {
          id: 5, 
          question: "¿Qué es la liquidez?", 
          description: "La liquidez es un concepto financiero importante. ¿Cuál es su significado? ", 
          options: [
            "La cantidad de dinero físico que (billetes y monedas) que tienes en efectivo. ", 
            "La facilidad con la que un activo puede convertirse en dinero sin perder valor. ", 
            "La cantidad de dinero que tienes invertido en bienes inmuebles. ", 
            "El valor total de tus deudas pendientes actualmente. "
          ], 
          answer: 1
        }, 
        {
          id: 6, 
          question: "¿Qué es la inflación?", 
          description: "La inflación afecta nuestro poder adquisitivo. Selecciona la definición correcta: ", 
          options: [
            "El aumento general de precios y la disminución del poder adquisitivo del dinero. ", 
            "El aumento en el valor de las propiedades inmobiliarias únicamente. ", 
            "La disminución de las tasas de interés bancarias. ", 
            "El aumento de los salarios en un país. "
          ], 
          answer: 0
        }, 
        {
          id: 7, 
          question: "¿Qué es el patrimonio neto?", 
          description: "El patrimonio neto es una métrica importante para evaluar tu situación financiera. ¿Cómo se calcula? ", 
          options: [
            "Sumando todos tus ingresos mensuales. ", 
            "Restando el valor de tus pasivos (deudas) al valor de tus activos (lo que posees). ", 
            "Multiplicando tus ingresos por 12 meses. ", 
            "Sumando el valor de todas tus propiedades inmobiliarias. "
          ], 
          answer: 1
        }, 
        {
          id: 8, 
          question: "¿Qué es una tarjeta de crédito?", 
          description: "Las tarjetas de crédito son instrumentos financieros comunes. ¿Cuál es su característica principal? ", 
          options: [
            "Una tarjeta que te permite gastar todo el dinero que tienes en tu cuenta bancaria. ", 
            "Una tarjeta que te permite utilizar dinero prestado por el banco con un límite establecido. ", 
            "Una tarjeta que solo se puede usar para compras en tiendas específicas. ", 
            "Una tarjeta que te da acceso a todas tus cuentas de inversión. "
          ], 
          answer: 1
        }, 
        {
          id: 9, 
          question: "¿Qué es la diversificación en finanzas?", 
          description: "La diversificación es un principio importante para la inversión. ¿Qué significa?", 
          options: [  
            "Tener múltiples cuentas bancarias en diferentes países para evitar impuestos. ", 
            "Distribuir el dinero en diferentes tipos de inversiones para reducir el riesgo. ", 
            "Cambiar frecuentemente de trabajo para aumentar los ingresos. ", 
            "Invertir todo tu dinero en un solo negocio prometedor. "
          ], 
          answer: 1
        }, 
        {
          id: 10, 
          question: "¿Qué es la educación financiera?", 
          description: "La educación financiera es clave para el bienestar económico. ¿Cuál es su definición más adecuada?", 
          options: [
            "Estudiar economía en la universidad. ", 
            "El proceso de aprender cómo administrar el dinero y tomar decisiones financieras informadas. ", 
            "Conocer los nombres de todos los bancos de tu país. ", 
            "Memorizar las tasas de interés de todos los productos financieros disponibles. "
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
  }, 
  {
    id: 2, 
    levelId: 1, 
    title: "Ahorro Inteligente", 
    intro: "Descubre estrategias para ahorrar eficientemente. ", 
    questions: [
      {
        id: 11, 
        question: "¿Qué es la regla 50/30/20 para el ahorro?", 
        description: "Esta regla puede ayudarte a organizar tus finanzas de manera efectiva. Selecciona la explicación correcta:", 
        options: [
          "Ahorrar el 50% de tus ingresos, gastar 30% en ocio y 20% en necesidades básicas.",
          "Usar 50% para necesidades básicas, 30% para deseos personales y 20% para ahorro e inversión.",
          "Invertir 50% en la bolsa, 30% en bienes raíces y mantener 20% en efectivo.",
          "Pagar 50% de tus deudas, usar 30% para gastos diarios y 20% para ahorros de emergencia."
        ], 
        answer: 1
      }, 
      {
        id: 12, 
        question: "¿Qué es un fondo de emergencia?", 
        description: "Un fondo de emergencia es fundamental para la estabilidad financiera. ¿Cuál de estas afirmaciones es correcta?", 
        options: [
          "Dinero que solo se usa para vacaciones y lujos.",
          "Un préstamo que puedes pedir al banco en caso de emergencia.",
          "Dinero ahorrado para cubrir gastos inesperados o pérdida de ingresos.",
          "Una inversión de alto riesgo que solo debe usarse en casos extremos."
        ], 
        answer: 2
      }, 
      {
        id: 13, 
        question: "¿Cuánto se recomienda tener en un fondo de emergencia?", 
        description: "Expertos financieros suelen recomendar una cantidad específica. ¿Cuál es la recomendación más común?",
        options: [
          "El equivalente a 1 semana de gastos.",
          "Entre 3 y 6 meses de gastos básicos.",
          "Al menos 2 años completos de salario.",
          "El 10% de tus ingresos anuales."
        ], 
        answer: 1
      }, 
      {
        id: 14, 
        question: "¿Qué es el interés compuesto?", 
        description: "El interés compuesto es conocido como la \"octava maravilla del mundo\". ¿Qué lo hace tan especial?",
        options: [
          "Es un tipo de interés que solo ofrecen los bancos más grandes.",
          "Es ganar intereses sobre el capital inicial más los intereses acumulados previamente.",
          "Es un interés que se paga solo cuando cumples ciertas condiciones del banco.",
          "Es una tasa preferencial que se ofrece a personas con altos ingresos."
        ], 
        answer: 1
      }, 
      {
        id: 15, 
        question: "¿Qué es el \"costo de oportunidad\" en el ahorro?", 
        description: "Este concepto te ayuda a evaluar tus decisiones financieras. ¿Qué significa?",
        options: [
          "El costo adicional que pagas por ahorrar en una cuenta bancaria premium.",
          "El valor de lo que renuncias cuando tomas una decisión financiera en lugar de otra.",
          "El costo de la consulta con un asesor financiero profesional.",
          "El valor exacto del dinero que podrías ganar si inviertes en bolsa."
        ], 
        answer: 1
      }, {
        id: 16, 
        question: "¿Qué son las metas financieras SMART?", 
        description: "Las metas SMART te ayudan a definir objetivos de ahorro efectivos. ¿Qué significa el acrónimo SMART?",
        options: [
          "Simple, Mágico, Asombroso, Rápido, Trascendental",
          "Específico, Medible, Alcanzable, Relevante, Temporal",
          "Sostenible, Monetario, Ambicioso, Robusto, Tentador",
          "Sistemático, Memorable, Adaptable, Riguroso, Tangible"
        ],
        answer: 1
      }, 
      {
        id: 17, 
        question: "¿Qué método de ahorro se conoce como \"Pagar primero a ti mismo\"?", 
        description: "Esta es una estrategia efectiva para asegurar el ahorro. ¿En qué consiste?",
        options: [
          "Gastar primero en tus gustos personales antes de pagar cuentas.",
          "Separar una parte de tus ingresos para ahorro antes de gastar en cualquier otra cosa.",
          "Darte un bono cada vez que cumples una meta financiera.",
          "Pagar todas tus deudas antes de comenzar a ahorrar."
        ], 
        answer: 1
      }, 
      {
        id: 18, 
        question: "¿Qué es el ahorro automático?", 
        description: "Esta técnica facilita el hábito del ahorro. ¿En qué consiste?", 
        options: [
          "Un robot que controla tus gastos y te impide gastar de más.",
          "Configurar transferencias programadas de tu cuenta corriente a tu cuenta de ahorro.",
          "Una máquina que convierte automáticamente las monedas en billetes.",
          "Un sistema que redondea tus compras al peso más cercano."
        ], 
        answer: 1
      }, 
      {
        id: 19, 
        question: "¿Qué es la \"Regla de 72\" en finanzas?", 
        description: "Esta regla es útil para planificar el crecimiento de tus ahorros. ¿Para qué sirve?",
        options: [
          "Determina que debes ahorrar 72% de tus ingresos para jubilarte cómodamente.",
          "Estima el tiempo que tardará tu dinero en duplicarse dividiendo 72 entre la tasa de interés anual.",
          "Establece que necesitas ahorrar durante 72 meses antes de hacer cualquier inversión.",
          "Define que 72% de tus ahorros deben estar en inversiones seguras y 28% en inversiones de riesgo."
        ], 
        answer: 1
      }, 
      {
        id: 20, 
        question: "¿Qué es la liquidez en relación con el ahorro?", 
        description: "Al elegir diferentes instrumentos de ahorro, la liquidez es un factor importante. ¿Qué significa esto?",
        options: [
          "La cantidad total de dinero que tienes ahorrado.",
          "La facilidad y rapidez con la que puedes convertir tus ahorros en efectivo sin perder valor.",
          "El tipo de moneda en que guardas tus ahorros (dólares, euros, etc.).",
          "El banco o institución financiera donde tienes tu cuenta de ahorro."
        ],
        answer: 1
      }
    ], 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-gray-50 bg-blue-800 p-2 rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px]">
        <path fill="currentColor" d="M10.802 22.5H5.198l-.788-3.544C3.09 18.37 1.444 17.353.295 16.21L0 15.916V8.501h1.934l.953-1.59l-1.248-3.12l1.134-.265c1.114-.258 2.57-.193 3.994.592l.02-.011a23 23 0 0 1 .712-.408a15 15 0 0 1 1.504-.741c.457-.185.892-.34 1.314-.468a6.5 6.5 0 0 0 12.25 4.35l.093.16c2.465 4.268 1.425 9.596-2.226 12.657l-.632 2.844h-5.604l-.445-2h-2.506zM4.5 11.5h2.004V9.496H4.5z"/>
        <path fill="currentColor" d="M16.5 0a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9"/>
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
  }, 
  {
    id: 2,
    title: "Racha de 3 días", 
    description: "Mantén una racha de aprendizaje de 3 días consecutivos.", 
    type: "Días de racha", 
    required: 3, 
    reward: 30
  }, 
  {
    id: 3, 
    title: "Responder correctamente 10 preguntas", 
    description: "Responde correctamente a 10 preguntas en cualquier lección.", 
    type: "Preguntas", 
    required: 10, 
    reward: 25
  }, 
  {
    id: 4, 
    title: "Desbloquear 3 lecciones", 
    description: "Desbloquea 3 lecciones diferentes completando las anteriores. ", 
    type: "Lecciones desbloqueadas", 
    required: 3, 
    reward: 75
  }, 
  {
    id: 5, 
    title: "Invitar a un amigo", 
    description: "Invita a un amigo a unirse a CashBoom y ambos ganarán puntos.", 
    type: "Invitación", 
    required: 1, 
    reward: 100
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1, 
    title: "La regla 50/30/20 para presupuestos", 
    content: "Para mantener tus finanzas en orden, considera usar la regla 50/30/20: dedica el 50% de tus ingresos a necesidades básicas, 30% a deseos personales y 20% a ahorro e inversión. Esta simple regla te ayudará a mantener un equilibrio saludable en tus finanzas.", 
    tags: ['Presupuesto', 'Ahorro'], 
    author: "Experto Financiero", 
    likes: 42
  }, 
  {
    id: 2, 
    title: "Fondo de emergencia: tu salva vidas financiero", 
    content: "Antes de invertir o gastar en lujos, asegúrate de tener un fondo de emergencia que cubra de 3 a 6 meses de gastos básicos. Este fondo te protegerá de imprevistos como problemas de salud, reparaciones urgentes o pérdida de empleo.", 
    tags: ['Emergencias', 'Planificación'], 
    author: 'Asesor Financiero', 
    likes: 37
  }, 
  {
    id: 3, 
    title: "El poder del interés compuesto", 
    content: "Einstein llamó al interés compuesto \"la octava maravilla del mundo\". Si empiezas a ahorrar e invertir joven, incluso pequeñas cantidades pueden crecer significativamente con el tiempo gracias a este efecto. Recuerda: el tiempo en el mercado es más importante que intentar cronometrar el mercado.", 
    tags: ['Inversión', 'Crecimiento'], 
    author: 'Educador Financiero', 
    likes: 56
  }, 
  {
    id: 4, 
    title: "Automatiza tus finanzas", 
    content: "La mejor forma de mantener hábitos financieros saludables es automatizarlos. Configura transferencias automáticas para ahorros, inversiones y pagos de deudas. Lo que no ves, no lo gastas. La automatización reduce la tentación de usar ese dinero para otros fines. ", 
    tags: ['Hábitos', 'Tecnología'], 
    author: 'Especialista en Fintech', 
    likes: 71
  }, 
  {
    id: 5, 
    title: "La importancia de diversificación", 
    content: "\"No pongas todos los huevos en la misma canasta\" es especialmente cierto en inversiones. Diversifica entre diferentes clases de activos (acciones, bonos, efectivo, bienes raíces) para reducir el riesgo y aumentar la estabilidad de tus inversiones a largo plazo.", 
    tags: ['Inversión', 'Riesgo'], 
    author: 'Analista en Inversiones', 
    likes: 45
  }
];

export const userAnswers: UsersAnswered = {
  questionnaires: [], 
  challenges: [], 
  savedBlogPost: []
};