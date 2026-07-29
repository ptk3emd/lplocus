import React from "react";
import { Check, Shield, Zap, ArrowDown, BookOpen } from "lucide-react";

interface HeroProps {
  onGoToPlatform: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGoToPlatform }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        
        {/* Eyebrow / Kicker Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[var(--radius-pill)] bg-[var(--lav)] text-[var(--ink-on-accent)] font-extrabold text-xs tracking-wider uppercase shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Feito por quem também tá na correria da faculdade
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--ink)] text-balance leading-tight sm:leading-[1.2]">
          Locus Medicina <br className="hidden sm:inline" />
          <span className="relative inline-block">
            De estudantes de medicina{" "}
            <mark className="highlight font-extrabold">para estudantes de medicina.</mark>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-[var(--ink-soft)] font-medium max-w-2xl mx-auto leading-relaxed text-balance">
          A plataforma que organiza todo o seu estudo sem complicação. Se um colega te mandou aqui, é porque ela também tava cansada de estudar por PDF perdido no grupo do WhatsApp.
        </p>

        {/* Primary CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="#planos"
            className="w-full sm:w-auto px-8 py-4 rounded-[var(--radius-lg)] bg-[#fcfd76] text-[#151515] font-extrabold text-base hover:bg-[#f1f268] active:scale-[0.98] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <span className="text-[#151515]">Começar agora</span>
            <Check className="w-5 h-5 text-[#1c1c1c] group-hover:scale-110 transition-transform" />
          </a>

          <button
            onClick={onGoToPlatform}
            className="w-full sm:w-auto px-6 py-4 rounded-[var(--radius-lg)] bg-[var(--paper)] border border-[var(--line)] text-[var(--ink)] font-bold text-base hover:bg-[var(--surface-hover)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
          >
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <span>Ver a plataforma por dentro</span>
          </button>
        </div>

      </div>
    </section>
  );
};
