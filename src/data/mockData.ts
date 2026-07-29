import { Plan, StudyTopic, UserNote } from "../types";

export const MOCK_PLANS: Plan[] = [
  {
    id: "mensal",
    name: "Plano Mensal",
    periodName: "mensal",
    intervalMonths: 1,
    standardPrice: 25,
    firstMonthPrice: 20,
    discountAmount: 5,
    checkoutUrl: "https://pay.kiwify.com.br/1ri4Ef0",
    badge: "Plano Flexível",
    ctaText: "Quero começar assim",
    features: [
      "Acesso irrestrito a todas as apostilas",
      "Banco de questões e resumos ilimitados",
      "Modo offline parcial no celular/laptop",
      "Sincronização em tempo real de notas",
      "Sem fidelidade, cancele a qualquer momento"
    ]
  },
  {
    id: "trimestral",
    name: "Plano Trimestral",
    periodName: "trimestral",
    intervalMonths: 3,
    standardPrice: 50,
    firstMonthPrice: 40,
    discountAmount: 10,
    checkoutUrl: "https://pay.kiwify.com.br/bJkrKJg",
    badge: "R$ 10 OFF no 1º ciclo",
    popular: true,
    ctaText: "Quero economizar e começar",
    features: [
      "Tudo do plano mensal",
      "Equivalente a apenas ~R$ 16,66/mês",
      "Economia garantida na renovação",
      "Acesso imediato às apostilas de plantão",
      "Suporte direto pelo app"
    ]
  },
  {
    id: "semestral",
    name: "Plano Semestral",
    periodName: "semestral",
    intervalMonths: 6,
    standardPrice: 90,
    firstMonthPrice: 70,
    discountAmount: 20,
    checkoutUrl: "https://pay.kiwify.com.br/V8p0Cgx",
    badge: "Maior Economia",
    ctaText: "Quero o melhor custo-benefício",
    features: [
      "Tudo dos outros planos",
      "Equivalente a apenas R$ 15,00/mês",
      "Ideal para o semestre letivo completo",
      "Garante o menor valor por mês",
      "Suporte prioritário na plataforma"
    ]
  }
];

export const MOCK_TOPICS: StudyTopic[] = [
  {
    id: "cardio-insuficiencia-cardiaca",
    discipline: "Cardiologia Clínica",
    title: "Insuficiência Cardíaca Aguda e Crônica (IC)",
    period: "4º Ano / Ciclo Clínico",
    readTimeMinutes: 12,
    blocks: [
      {
        id: "b1",
        type: "paragraph",
        content: "A Insuficiência Cardíaca (IC) é uma síndrome clínica complexa resultante de qualquer prejuízo estrutural ou funcional no enchimento ou na ejeção ventricular."
      },
      {
        id: "b2",
        type: "callout",
        calloutType: "crit",
        title: "Ponto Crítico de Plantão",
        content: "Em paciente com IC agudamente descompensada (perfil B - quente e úmido), a conduta imediata envolve diurético de alça IV (furosemida) e vasodilatador arterial/venoso se PAs > 90 mmHg. Não suspender BB de forma abrupta se o paciente já usava previamente, salvo choque cardiogênico."
      },
      {
        id: "b3",
        type: "heading",
        title: "Classificação por Fração de Ejeção (FEVE)"
      },
      {
        id: "b4",
        type: "table",
        content: "Classificação hemodinâmica da IC segundo a SBC 2023",
        tableData: {
          headers: ["Classificação", "FEVE (%)", "Mecanismo Predominante", "Tratamento Quádruplo"],
          rows: [
            ["ICFER (Reduzida)", "≤ 40%", "Disfunção sistólica", "iSGLT2 + iECA/BRA/ARNI + BB + iMRA"],
            ["ICFElr (Levemente Reduzida)", "41% – 49%", "Mista", "iSGLT2 + Considerar iECA/BB/iMRA"],
            ["ICFEP (Preservada)", "≥ 50%", "Disfunção diastólica", "iSGLT2 + Controle de comorbidades"]
          ]
        }
      },
      {
        id: "b5",
        type: "callout",
        calloutType: "tip",
        title: "Dica Prática de Retenção",
        content: "Lembre-se da quádrupla terapia que reduz mortalidade na ICFER: iSGLT2 (Dapa/Empa), Sacubitril-Valsartana (ARNI) ou iECA/BRA, Betabloqueador (Carvedilol, Bisoprolol ou Succinato de Metoprolol) e Espironolactona (iMRA)."
      },
      {
        id: "b6",
        type: "clinical-key",
        calloutType: "key",
        title: "CRITÉRIOS DE FRAMINGHAM (2 MAIORES OU 1 MAIOR + 2 MENORES)",
        content: "Maiores: DPN, turgência jugular, estertores crepitantes, cardiomegalia ao Rx, EAP, refluxo hepatojugular. Menores: Edema de MMII, tosse noturna, dispneia aos esforços, hepatomegalia, derrame pleural, taquicardia (>120 bpm)."
      }
    ],
    questions: [
      {
        id: "q1",
        title: "Questão 1 — Conduta na IC Aguda",
        questionText: "Paciente de 68 anos dá entrada no PS com dispneia em repouso, ortopneia e edema de MMII 3+/4+. Apresenta PA = 145/90 mmHg, FC = 92 bpm, SatO2 = 89% em ar ambiente e crepitações bibasais até terço médio. Qual a melhor conduta inicial?",
        options: [
          "A) Iniciar noradrenalina e suspender imediatamente o betabloqueador.",
          "B) Administrar Furosemida IV + Oxigenoterapia por máscara + Vasodilatador se necessário.",
          "C) Indicar intubação orotraquial de urgência antes de qualquer medicação.",
          "D) Prescrever apenas repouso e hidratação venosa abundante com SF 0,9%."
        ],
        correctOptionIndex: 1,
        explanation: "O paciente apresenta perfil hemodinâmico 'Quente e Úmido' (Perfil B - congestão com boa perfusão). A conduta correta é descongestionamento rápido com Furosemida IV, suplementação de O2 para manter SatO2 > 92% e considerar vasodilatador venoso/arterial para redução de pós-carga."
      },
      {
        id: "q2",
        title: "Questão 2 — Terapia Modificadora de Prognóstico",
        questionText: "Qual das seguintes classes de medicamentos demonstraram redução de mortalidade cardiovascular em pacientes com IC de fração de ejeção reduzida (ICFER)?",
        options: [
          "A) Digoxina e Furosemida isoladas.",
          "B) iSGLT2, ARNI/iECA, Betabloqueador seletivo e Antagonista de Receptor de Mineralocorticoide.",
          "C) Anlodipino e Nifedipino de libertação rápida.",
          "D) Hidralazina pura sem associação de nitrato."
        ],
        correctOptionIndex: 1,
        explanation: "Os 4 pilares modificadores de prognóstico na ICFER são: iSGLT2 (dapagliflozina/empagliflozina), ARNI ou iECA/BRA, Betabloqueador sustentado e Espironolactona (iMRA)."
      }
    ]
  },
  {
    id: "pediatria-croup-laringite",
    discipline: "Pediatria & Puericultura",
    title: "Laringotraqueobronquite Aguda (Estridulo e Croup)",
    period: "5º Ano / Internato",
    readTimeMinutes: 8,
    blocks: [
      {
        id: "b10",
        type: "paragraph",
        content: "Croup é a causa mais comum de obstrução de vias aéreas superiores na infância (6 meses a 3 anos), com predomínio no outono e inverno, causada principalmente pelo vírus Parainfluenza."
      },
      {
        id: "b11",
        type: "callout",
        calloutType: "warn",
        title: "Sinal do Lápis / Torre na Radiografia",
        content: "O estreitamento subglótico ao Rx cervical em AP produz o 'sinal da torre de igreja' (steeple sign). No entanto, o diagnóstico é prioritariamente CLÍNICO!"
      }
    ],
    questions: [
      {
        id: "q3",
        title: "Questão 1 — Croup Estriduloso",
        questionText: "Lactente de 18 meses com tosse rouca 'de cachorro', estridor inspiratório aos esforços e febrícula há 2 dias. Qual o tratamento de escolha?",
        options: [
          "A) Amoxicilina + Clavulanato por 10 dias.",
          "B) Dexametasona oral (0,6 mg/kg) dose única + Nebulização com Adrenalina se estridor em repouso.",
          "C) Xarope antitussígeno e inalação com soro hipertônico.",
          "D) Corticoide inalatório por 30 dias contínuos."
        ],
        correctOptionIndex: 1,
        explanation: "O tratamento do Croup viral leve a moderado baseia-se em Dexametasona oral (dose única). Se houver estridor em repouso ou tiragem intercostal, associa-se nebulização com adrenalina L-racêmica/padrão."
      }
    ]
  }
];

export const MOCK_USER_NOTES: UserNote[] = [
  {
    id: "n1",
    topicId: "cardio-insuficiencia-cardiaca",
    topicTitle: "Insuficiência Cardíaca Aguda e Crônica (IC)",
    content: "Dica para a discussão de rodada no plantão: verificar sempre K+ e função renal antes de subir dose de espironolactona. Se K+ > 5,5, suspender temporariamente.",
    updatedAt: "Hoje às 11:20"
  },
  {
    id: "n2",
    topicId: "pediatria-croup-laringite",
    topicTitle: "Laringotraqueobronquite Aguda",
    content: "Dexametasona dose única de 0,6 mg/kg (máx 16mg) funciona super rápido. Lembrar de tranquilizar os pais quanto à tosse de cachorro.",
    updatedAt: "Ontem às 22:45"
  }
];
