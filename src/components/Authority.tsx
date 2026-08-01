import React from "react";
import { GraduationCap } from "lucide-react";

export const Authority: React.FC = () => (
  <section className="mx-auto max-w-7xl border-t border-[var(--line)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
    <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-[auto_1fr] sm:items-start">
      <span className="flex h-14 w-14 items-center justify-center rounded-[var(--radius-icon)] bg-[var(--yellow)] text-[var(--ink)]"><GraduationCap className="h-7 w-7" aria-hidden="true" /></span>
      <div><span className="text-xs font-extrabold tracking-wider text-[var(--info-accent)]">FEITO POR VETERANOS</span><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">Quem montou isso?</h2><div className="mt-5 max-w-3xl space-y-4 text-base font-medium leading-relaxed text-[var(--ink-soft)] sm:text-lg"><p>O 8Book foi organizado por veteranos do 8º período de Medicina que já passaram por boa parte dos conteúdos, provas e rotinas que os alunos mais novos estão enfrentando agora.</p><p>A ideia não é vender fórmula mágica. É compartilhar, de forma mais organizada, materiais que ajudam a revisar, focar e ganhar tempo.</p></div><p className="mt-6 text-base font-extrabold leading-relaxed text-[var(--ink)]">É aquele material de veterano que todo mundo procura — só que mais limpo, organizado e fácil de acessar.</p></div>
    </div>
  </section>
);
