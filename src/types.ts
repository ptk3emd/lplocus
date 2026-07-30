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
