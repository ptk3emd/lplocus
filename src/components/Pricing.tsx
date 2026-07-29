import React from "react";
import { Check, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";
import { MOCK_PLANS } from "../data/mockData";

interface PricingProps {
  onSelectPlan?: (planId: string) => void;
}

export const Pricing: React.FC<PricingProps> = () => {
  return (
    <section id="planos" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--line)]">
      
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[var(--radius-pill)] bg-[var(--yellow)] text-[var(--ink-on-accent)] font-extrabold text-xs uppercase tracking-wider mb-4 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5" />
          Planos com Desconto Especial no 1º Mês
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--ink)] tracking-tight text-balance">
          Pronto para estudar como quem entende a sua realidade?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-soft)] font-medium">
          Escolha o plano ideal para o seu momento no curso. Cancele quando quiser, sem letras miúdas.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {MOCK_PLANS.map((plan) => {
          const isPopular = plan.popular;
          return (
            <div
              key={plan.id}
              className={`rounded-[var(--radius-card)] bg-[var(--paper)] border flex flex-col justify-between p-6 relative transition-all duration-200 hover:-translate-y-1 hover:border-[var(--ink-soft)] ${
                isPopular
                  ? "border-2 border-[var(--ink)] shadow-md ring-4 ring-[var(--yellow)]/30"
                  : "border-[var(--line)] shadow-xs"
              }`}
            >
              <div>
                {/* Top Badge Row */}
                <div className="mb-4 flex items-center justify-between gap-2 h-7">
                  {isPopular ? (
                    <span className="px-3 py-1 rounded-[var(--radius-pill)] bg-[var(--yellow)] text-[var(--ink-on-accent)] font-extrabold text-xs tracking-wide">
                      MAIS POPULAR
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-[var(--radius-pill)] bg-[var(--surface)] text-[var(--ink-soft)] font-extrabold text-xs border border-[var(--line)]">
                      {plan.badge}
                    </span>
                  )}
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-extrabold text-[var(--ink)] tracking-tight mb-3">
                  {plan.name}
                </h3>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-[var(--line)]">
                  <div className="flex items-baseline flex-wrap gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)] tracking-tight whitespace-nowrap">
                      <span className="text-xl sm:text-2xl font-bold mr-1">R$</span>
                      {plan.firstMonthPrice}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[var(--muted)] whitespace-nowrap">
                      / 1º mês
                    </span>
                  </div>

                  <div className="mt-2 text-xs font-semibold text-[var(--ink-soft)] flex items-center gap-2">
                    <span className="line-through text-[var(--muted)]">De R$ {plan.standardPrice}</span>
                  </div>

                  <p className="mt-3 text-xs text-[var(--muted)] font-medium leading-relaxed">
                    {plan.intervalMonths === 1
                      ? "Renovação por R$ 25,00/mês. Cancele quando quiser."
                      : plan.intervalMonths === 3
                      ? "Após o 1º mês, R$ 50,00 a cada 3 meses (~R$ 16,66/mês)."
                      : "Após o 1º mês, R$ 90,00 a cada 6 meses (R$ 15,00/mês)."
                    }
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-[var(--ink-soft)]">
                      <div className="w-5 h-5 rounded-full bg-[var(--sage)] flex items-center justify-center shrink-0 mt-0.5 text-emerald-900">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[var(--line)]">
                {/* Kiwify Direct Checkout Button */}
                <a
                  href={plan.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-6 rounded-[var(--radius-lg)] font-extrabold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs ${
                    isPopular
                      ? "bg-[var(--ink)] text-[var(--paper)] hover:opacity-90"
                      : "bg-[var(--yellow)] text-[var(--ink-on-accent)] hover:bg-[var(--yellow-deep)]"
                  }`}
                >
                  <span>{plan.ctaText || "Assinar plano"}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          );
        })}
      </div>

      {/* Guarantee & Security Banner */}
      <div className="mt-10 p-6 rounded-[var(--radius-card)] bg-[var(--surface)] border border-[var(--line)] flex items-center gap-4">
        <div className="w-12 h-12 rounded-[var(--radius-icon)] bg-[var(--sage)] flex items-center justify-center text-emerald-900 shrink-0">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-base font-extrabold text-[var(--ink)]">Garantia Incondicional de 7 Dias</h4>
          <p className="text-xs text-[var(--ink-soft)] font-medium leading-relaxed">
            Acesse as apostilas, crie resumos e responda questões. Se você achar que não ajudou na sua rotina, peça 100% de reembolso na Kiwify sem nenhuma burocracia.
          </p>
        </div>
      </div>

    </section>
  );
};
