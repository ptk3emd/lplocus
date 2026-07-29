import React from "react";
import { ShieldCheck, Heart, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--paper)] border-t border-[var(--line)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="w-6 h-6 rounded-[var(--radius-icon)] bg-[var(--yellow)] flex items-center justify-center font-extrabold text-[var(--ink-on-accent)] text-xs">
              LM
            </div>
            <span className="font-extrabold text-base text-[var(--ink)]">Locus Medicina</span>
          </div>
          <p className="text-xs text-[var(--muted)] font-medium max-w-sm">
            De estudantes de medicina para estudantes de medicina. A plataforma que organiza todo o seu estudo sem complicação.
          </p>
        </div>

        {/* Links & Security */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--ink-soft)] font-semibold">
          <a href="#como-funciona" className="hover:text-[var(--ink)] transition-colors">Como funciona</a>
          <a href="#planos" className="hover:text-[var(--ink)] transition-colors">Planos & Preços</a>
          <a href="https://pay.kiwify.com.br/1ri4Ef0" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink)] transition-colors flex items-center gap-1">
            <span>Checkout Kiwify</span>
            <ExternalLink className="w-3 h-3 text-[var(--muted)]" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-[var(--muted)] font-medium text-center md:text-right">
          <p>© {new Date().getFullYear()} Locus Medicina. Todos os direitos reservados.</p>
          <p className="text-[11px] mt-0.5">Processamento seguro por Kiwify Tecnologia.</p>
        </div>

      </div>
    </footer>
  );
};
