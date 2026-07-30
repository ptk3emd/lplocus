import React from "react";
import { ExternalLink, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { MOCK_PLANS } from "../data/mockData";

interface PricingProps {
  onOpenEmailPreview: (planId: string) => void;
}

const planGuidance: Record<string, string> = {
  mensal: "Para experimentar sem compromisso.",
  trimestral: "Para atravessar o próximo ciclo com previsibilidade.",
  semestral: "Para quem quer cobrir o semestre inteiro."
};

export const Pricing: React.FC<PricingProps> = ({ onOpenEmailPreview }) => (
  <section id="planos" className="mx-auto max-w-7xl border-t border-[var(--line)] px-4 py-16 scroll-mt-24 sm:px-6 sm:py-24 lg:px-8">
    <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
      <div className="mb-4 inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-[var(--yellow)] px-3.5 py-1.5 text-xs font-extrabold tracking-wider text-[var(--ink-on-accent)] shadow-2xs">
        <Sparkles className="h-3.5 w-3.5" />
        Desconto especial no primeiro ciclo
      </div>
      <h2 className="text-balance text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-5xl">Escolha o ritmo que cabe no seu semestre.</h2>
      <p className="mt-4 text-base font-medium text-[var(--ink-soft)] sm:text-lg">Todos os planos incluem apostilas, questões comentadas, resumos pessoais e leitura offline parcial. Cancele quando quiser.</p>
    </div>

    <div className="grid items-stretch gap-6 md:grid-cols-3">
      {MOCK_PLANS.map((plan) => {
        const isPopular = plan.popular;
        const monthlyEquivalent = (plan.standardPrice / plan.intervalMonths).toLocaleString("pt-BR", { minimumFractionDigits: 2 });

        return (
          <article key={plan.id} className={`relative flex flex-col rounded-[var(--radius-card)] border bg-[var(--paper)] p-6 ${isPopular ? "border-2 border-[var(--ink)] shadow-md" : "border-[var(--line)] shadow-xs"}`}>
            <div className="min-h-8">
              {isPopular && <span className="inline-flex rounded-[var(--radius-pill)] bg-[var(--yellow)] px-3 py-1 text-xs font-extrabold tracking-wide text-[var(--ink-on-accent)]">RECOMENDADO</span>}
            </div>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-[var(--ink)]">{plan.name}</h3>
            <p className="mt-2 min-h-10 text-sm font-medium leading-relaxed text-[var(--ink-soft)]">{planGuidance[plan.id]}</p>

            <div className="mt-6 border-y border-[var(--line)] py-5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--muted)]">Hoje</p>
              <p className="mt-1 text-4xl font-extrabold tracking-tight text-[var(--ink)]"><span className="mr-1 text-xl">R$</span>{plan.firstMonthPrice}</p>
              <p className="mt-1 text-xs font-medium text-[var(--muted)]">Primeiro ciclo · de R$ {plan.standardPrice}</p>
            </div>

            <div className="mt-5 space-y-1.5 text-sm">
              <p className="font-extrabold text-[var(--ink)]">Depois: R$ {plan.standardPrice} a cada {plan.intervalMonths === 1 ? "mês" : `${plan.intervalMonths} meses`}</p>
              <p className="font-medium text-[var(--ink-soft)]">Equivale a R$ {monthlyEquivalent}/mês</p>
            </div>

            <a
              href={plan.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-lg)] px-6 py-3.5 text-sm font-extrabold shadow-2xs transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)] ${isPopular ? "bg-[var(--ink)] text-[var(--paper)]" : "bg-[var(--yellow)] text-[var(--ink-on-accent)]"}`}
            >
              {plan.ctaText || "Assinar plano"}
              <ExternalLink className="h-4 w-4" />
            </a>
          </article>
        );
      })}
    </div>

    <div className="mt-8 grid gap-4 border-t border-[var(--line)] pt-8 sm:grid-cols-[1fr_auto] sm:items-center">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-icon)] bg-[var(--success-surface)] text-[var(--success-ink)]"><ShieldCheck className="h-5 w-5" /></span>
        <p className="text-sm font-medium leading-relaxed text-[var(--ink-soft)]"><span className="font-extrabold text-[var(--ink)]">7 dias de garantia.</span> Acesse, estude e peça reembolso pela Kiwify se não fizer sentido para sua rotina.</p>
      </div>
      <button onClick={() => onOpenEmailPreview("trimestral")} className="flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-lg)] px-3 py-2 text-sm font-extrabold text-[var(--ink)] underline decoration-[var(--lav-deep)] decoration-2 underline-offset-4 hover:text-[var(--ink-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]">
        <Mail className="h-4 w-4" />
        Ver e-mail de renovação
      </button>
    </div>
  </section>
);
