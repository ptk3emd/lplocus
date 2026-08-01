import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

export const Hero: React.FC = () => (
  <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-24 lg:px-8">
    <div className="mx-auto max-w-4xl space-y-6 text-center">
      <img src="/mainlogo.svg" alt="8Book — Locus Med" className="mx-auto h-auto w-32 sm:w-40" />
      <span className="inline-flex rounded-[var(--radius-pill)] bg-[var(--lav)] px-3 py-1 text-xs font-extrabold tracking-wider text-[var(--ink)]">FEITO POR VETERANOS DO 8ºP</span>
      <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-[var(--ink)] sm:text-5xl sm:leading-[1.15] md:text-6xl">Menos tempo procurando material. Mais direção para estudar Medicina.</h1>
      <p className="mx-auto max-w-2xl text-balance text-lg font-medium leading-relaxed text-[var(--ink-soft)] sm:text-xl">O 8Book, produto da Locus Med, reúne resumos, apostilas, questões e materiais de apoio organizados por veteranos do 8º período, em uma plataforma simples para estudar com mais clareza.</p>
      <div className="flex flex-col items-center justify-center gap-3 pt-4 sm:flex-row"><a href="https://locusmed.pages.dev/" target="_blank" rel="noopener noreferrer" className="group flex min-h-12 w-full items-center justify-center gap-2.5 rounded-[var(--radius-lg)] bg-[var(--yellow)] px-8 py-4 text-base font-extrabold text-[var(--ink-on-accent)] shadow-md transition-all hover:bg-[var(--yellow-deep)] hover:shadow-lg active:scale-[0.98] sm:w-auto">Testar gratuitamente <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" /></a><a href="#planos" className="flex min-h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--paper)] px-8 py-3.5 text-base font-bold text-[var(--ink)] transition-colors hover:bg-[var(--surface-hover)] sm:w-auto">Ver planos <ExternalLink className="h-4 w-4 text-[var(--info-accent)]" aria-hidden="true" /></a></div>
      <p className="mx-auto max-w-2xl text-sm font-semibold leading-relaxed text-[var(--muted)]">Acesse a amostra grátis antes de decidir. Sem promessa milagrosa — só material organizado por quem já passou pelos conteúdos.</p>
    </div>
  </section>
);
