import React from "react";
import { GraduationCap, Clock, Flame, ShieldAlert, HeartPulse } from "lucide-react";

export const WhyItWorks: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--line)]">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Signature Container */}
        <div className="p-8 sm:p-12 rounded-[var(--radius-card)] bg-[var(--paper)] border border-[var(--line)] shadow-xs relative overflow-hidden">
          
          {/* Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-pill)] bg-[var(--lav)] text-[var(--ink-on-accent)] font-extrabold text-xs uppercase tracking-wider mb-6">
            <HeartPulse className="w-3.5 h-3.5" />
            Nossa Proposta de Valor
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)] tracking-tight mb-6">
            Por que funciona?
          </h2>

          {/* Core Copy */}
          <p className="text-lg sm:text-xl font-medium text-[var(--ink-soft)] leading-relaxed text-balance mb-8">
            Porque foi construído por quem vive a rotina exaustiva do curso de medicina. A gente sabe que tempo é escasso e que o material precisa estar sempre à mão, limpo e confiável — nada de firulas, só o estudo direto que realmente rende.
          </p>

          {/* 3 Real-Life Use Contexts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[var(--line)]">
            
            <div className="p-4 rounded-[var(--radius-sm)] bg-[var(--surface)] border border-[var(--line)]">
              <div className="w-8 h-8 rounded-full bg-[var(--mist)] flex items-center justify-center text-[var(--ink)] mb-2">
                <Clock className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-extrabold text-[var(--ink)] mb-1">5 a 25 minutos livres</h4>
              <p className="text-xs text-[var(--muted)]">Entre aulas, rondas de enfermagem e trocas de plantão.</p>
            </div>

            <div className="p-4 rounded-[var(--radius-sm)] bg-[var(--surface)] border border-[var(--line)]">
              <div className="w-8 h-8 rounded-full bg-[var(--peach)] flex items-center justify-center text-[var(--ink)] mb-2">
                <Flame className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-extrabold text-[var(--ink)]">Alta Carga Cognitiva</h4>
              <p className="text-xs text-[var(--muted)]">Sem tempo para procurar PDFs perdidos em grupos de WhatsApp.</p>
            </div>

            <div className="p-4 rounded-[var(--radius-sm)] bg-[var(--surface)] border border-[var(--line)]">
              <div className="w-8 h-8 rounded-full bg-[var(--sage)] flex items-center justify-center text-[var(--ink)] mb-2">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-extrabold text-[var(--ink)]">Retenção de Longo Prazo</h4>
              <p className="text-xs text-[var(--muted)]">Foco em fixar o raciocínio clínico para a prova e a prática.</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
