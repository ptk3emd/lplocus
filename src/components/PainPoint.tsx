import React from "react";
import { SearchX } from "lucide-react";

export const PainPoint: React.FC = () => (
  <section className="mx-auto max-w-7xl border-t border-[var(--line)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <div className="flex h-20 w-20 items-center justify-center rounded-[var(--radius-card)] bg-[var(--peach)] text-[var(--ink)] sm:h-24 sm:w-24"><SearchX className="h-10 w-10" aria-hidden="true" /></div>
      <div><h2 className="text-balance text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-5xl">Cansado de resumo perdido, slide infinito e zero noção do que focar?</h2><div className="mt-6 max-w-2xl space-y-4 text-base font-medium leading-relaxed text-[var(--ink-soft)] sm:text-lg"><p>Medicina já tem conteúdo demais para você ainda perder horas procurando PDF em grupo, tentando descobrir qual resumo presta ou refazendo material do zero na véspera da prova.</p><p>O 8Book nasceu para organizar o essencial e te ajudar a estudar com mais clareza.</p></div></div>
    </div>
  </section>
);
