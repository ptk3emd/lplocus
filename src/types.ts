export interface Plan {
  id: "mensal" | "trimestral" | "semestral";
  name: string;
  periodName: string;
  intervalMonths: number;
  standardPrice: number;
  firstMonthPrice: number;
  discountAmount: number;
  checkoutUrl: string;
  badge: string;
  popular?: boolean;
  ctaText?: string;
  features: string[];
}

export interface ScheduleItem {
  cycle: number;
  date: string;
  rawDate: string;
  amount: number;
  formattedAmount: string;
  isFirstCycle: boolean;
  note: string;
}

export interface RenewalCalculationResult {
  plan: Plan;
  schedule: ScheduleItem[];
  summary: {
    firstCharge: string;
    recurringCharge: string;
    billingFrequencyMonths: number;
    totalPaidFirstYear: string;
    yearlySavings: string;
    checkoutUrl: string;
  };
}

export interface EmailTemplateData {
  receipt: {
    subject: string;
    html: string;
  };
  renewalNotice: {
    subject: string;
    html: string;
  };
}

export interface StudyBlock {
  id: string;
  type: "heading" | "paragraph" | "callout" | "table" | "clinical-key";
  title?: string;
  content?: string;
  calloutType?: "note" | "tip" | "warn" | "crit" | "key";
  tableData?: { headers: string[]; rows: string[][] };
}

export interface Question {
  id: string;
  title: string;
  questionText: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  userAnswer?: number;
}

export interface StudyTopic {
  id: string;
  discipline: string;
  title: string;
  period: string;
  readTimeMinutes: number;
  blocks: StudyBlock[];
  questions: Question[];
}

export interface UserNote {
  id: string;
  topicId: string;
  topicTitle: string;
  content: string;
  updatedAt: string;
}
