import React from "react";
import { Check } from "lucide-react";

export const Hero: React.FC = () => (
  <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-24 lg:px-8">
    <div className="mx-auto max-w-4xl space-y-6 text-center">
      <div className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-[var(--lav)] px-3.5 py-1.5 text-xs font-extrabold tracking-wider text-[var(--ink-on-accent)] shadow-2xs">
        <span className="h-2 w-2 rounded-full bg-[var(--success-accent)]" />
        Feito por quem também tá na correria da faculdade
      </div>

      <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-[var(--ink)] sm:text-5xl sm:leading-[1.15] md:text-6xl">
        Locus Medicina
        <span className="mt-1 block">
          de estudantes <mark className="highlight font-extrabold">para estudantes.</mark>
        </span>
      </h1>

      <p className="mx-auto max-w-2xl text-balance text-lg font-medium leading-relaxed text-[var(--ink-soft)] sm:text-xl">
        Apostilas, questões e seus próprios resumos no mesmo lugar — para estudar no ritmo da faculdade, não no ritmo do grupo do WhatsApp.
      </p>

      <div className="flex justify-center pt-4">
        <a
          href="#planos"
          className="group flex min-h-12 w-full items-center justify-center gap-2.5 rounded-[var(--radius-lg)] bg-[var(--yellow)] px-8 py-4 text-base font-extrabold text-[var(--ink-on-accent)] shadow-md transition-all hover:bg-[var(--yellow-deep)] hover:shadow-lg active:scale-[0.98] sm:w-auto"
        >
          Começar agora
          <Check className="h-5 w-5 transition-transform group-hover:scale-110" />
        </a>
      </div>
    </div>
  </section>
);
