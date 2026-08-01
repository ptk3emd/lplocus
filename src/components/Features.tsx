import React from "react";
import { BookMarked, BarChart3, FileText, HelpCircle, WifiOff } from "lucide-react";

const featureItems = [
  { icon: BookMarked, accent: "bg-[var(--lav)]", title: "Apostilas estruturadas", description: "Conteúdo organizado em blocos diretos, com linguagem clara e foco no que ajuda na revisão." },
  { icon: FileText, accent: "bg-[var(--yellow)]", title: "Resumos por tema", description: "Materiais separados por assunto para você encontrar rápido o que precisa estudar." },
  { icon: HelpCircle, accent: "bg-[var(--peach)]", title: "Dúvidas e questões", description: "Questões e pontos-chave para sair da leitura passiva e testar se realmente fixou." },
  { icon: BarChart3, accent: "bg-[var(--sage)]", title: "Progresso visível", description: "Acompanhe sua evolução e tenha mais clareza do que já foi estudado." },
  { icon: WifiOff, accent: "bg-[var(--mist)]", title: "Acesso em qualquer dispositivo", description: "Seu guia de estudos na palma da mão: revise pelo celular, tablet ou computador, onde der e quando precisar." }
];

export const Features: React.FC = () => (
  <section id="como-funciona" className="mx-auto max-w-7xl border-t border-[var(--line)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"><h2 className="text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">Como funciona</h2><p className="mt-3 text-base font-medium leading-relaxed text-[var(--ink-soft)] sm:text-lg">Tudo em um lugar simples, para encontrar o que importa e seguir estudando.</p></div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">{featureItems.map(({ icon: Icon, accent, title, description }) => <article key={title} className="rounded-[var(--radius-card)] border border-[var(--line)] bg-[var(--paper)] p-6"><div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-[var(--radius-icon)] ${accent}`}><Icon className="h-6 w-6 text-[var(--ink)]" aria-hidden="true" /></div><h3 className="mb-3 text-xl font-extrabold tracking-tight text-[var(--ink)]">{title}</h3><p className="text-sm font-medium leading-relaxed text-[var(--ink-soft)]">{description}</p></article>)}</div>
  </section>
);
