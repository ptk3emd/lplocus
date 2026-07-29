import React from "react";
import { MessageSquare, Star, CheckCircle2 } from "lucide-react";

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: "t1",
      name: "Lucas Ferreira",
      detail: "6º Período — UFMG",
      avatarInitials: "LF",
      quote: "O Locus salvou meu ciclo clínico. Eu passava mais tempo organizando material e caçando arquivo no WhatsApp do que estudando. Ter o resumo e as questões juntas no mesmo capítulo mudou minha retenção.",
      verified: true
    },
    {
      id: "t2",
      name: "Camila Prado",
      detail: "Internato — UNIFESP",
      avatarInitials: "CP",
      quote: "No internato, o tempo entre uma rodada e outra é minúsculo. A leitura offline no celular me permitiu revisar condutas e responder questões rápido na sala de descanso.",
      verified: true
    },
    {
      id: "t3",
      name: "Gabriel Vasconcelos",
      detail: "8º Período — UFRJ",
      avatarInitials: "GV",
      quote: "A indicação veio de um amigo de turma e foi certeiro. As apostilas são diretas, sem enroca, e o banco de questões me dá a certeza de que tô fixando o conteúdo.",
      verified: true
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--line)]">
      
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-pill)] bg-[var(--lav)] text-[var(--ink-on-accent)] font-extrabold text-xs uppercase tracking-wider mb-4 shadow-2xs">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Prova Social</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)] tracking-tight mb-4">
          Quem já usa, confirma
        </h2>
        <p className="text-base sm:text-lg font-medium text-[var(--ink-soft)] text-balance">
          Estudantes de medicina de diversas faculdades que trocaram a bagunça de PDFs por uma rotina organizada.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="p-6 rounded-[var(--radius-card)] bg-[var(--paper)] border border-[var(--line)] shadow-xs flex flex-col justify-between hover:border-[var(--ink-soft)] transition-all"
          >
            <div>
              {/* Stars */}
              <div className="flex text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-sm font-medium text-[var(--ink-soft)] leading-relaxed mb-6">
                "{t.quote}"
              </p>
            </div>

            {/* Author info */}
            <div className="pt-4 border-t border-[var(--line)] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--lav)] text-[var(--ink-on-accent)] font-extrabold text-xs flex items-center justify-center shrink-0">
                {t.avatarInitials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-extrabold text-[var(--ink)] truncate">{t.name}</h4>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                </div>
                <p className="text-xs font-semibold text-[var(--muted)] truncate">{t.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
