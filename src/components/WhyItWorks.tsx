import React from "react";
import { Clock, Compass, GraduationCap, HeartPulse } from "lucide-react";

const reasons = [
  { icon: Clock, title: "Menos tempo procurando", text: "Pare de perder horas caçando PDF solto em grupo." },
  { icon: Compass, title: "Mais direção para revisar", text: "Conteúdo organizado para facilitar sua rotina de estudo." },
  { icon: GraduationCap, title: "De aluno para aluno", text: "Feito por quem já passou pelo mesmo caminho." }
];

export const WhyItWorks: React.FC = () => (
  <section className="mx-auto max-w-7xl border-t border-[var(--line)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"><div className="mx-auto max-w-4xl rounded-[var(--radius-card)] border border-[var(--line)] bg-[var(--paper)] p-8 sm:p-12"><div className="mb-6 inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-[var(--lav)] px-3 py-1 text-xs font-extrabold tracking-wider text-[var(--ink)]"><HeartPulse className="h-3.5 w-3.5" aria-hidden="true" /> NOSSA PROPOSTA DE VALOR</div><h2 className="text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">Por que funciona?</h2><div className="mt-6 max-w-3xl space-y-4 text-lg font-medium leading-relaxed text-[var(--ink-soft)]"><p>Porque foi construído por quem vive a rotina da Medicina por dentro.</p><p>Os materiais foram organizados por veteranos que já passaram por provas, seminários, ambulatórios, conteúdos extensos e aquela sensação de não saber por onde começar.</p><p>O 8Book não promete milagre. Ele entrega organização, direção e materiais de apoio para você estudar com menos caos.</p></div><div className="mt-10 grid gap-4 border-t border-[var(--line)] pt-6 sm:grid-cols-3">{reasons.map(({ icon: Icon, title, text }) => <div key={title}><Icon className="mb-3 h-5 w-5 text-[var(--info-accent)]" aria-hidden="true" /><h3 className="text-sm font-extrabold text-[var(--ink)]">{title}</h3><p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{text}</p></div>)}</div></div></section>
);
