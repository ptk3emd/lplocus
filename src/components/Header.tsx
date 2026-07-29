import React from "react";
import { BookOpen, Moon, Sun, Type, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

interface HeaderProps {
  currentTab: "landing" | "platform" | "calculator";
  setCurrentTab: (tab: "landing" | "platform" | "calculator") => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
  fontMode: "default" | "dyslexic";
  toggleFont: () => void;
  onOpenEmailModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  theme,
  toggleTheme,
  fontMode,
  toggleFont,
  onOpenEmailModal,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[var(--paper)] border-b border-[var(--line)] backdrop-blur-md bg-opacity-95 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Tagline */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setCurrentTab("landing")} 
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-[var(--radius-icon)] bg-[var(--yellow)] flex items-center justify-center font-extrabold text-[var(--ink-on-accent)] shadow-sm group-hover:scale-105 transition-transform">
              LM
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[var(--ink)] block leading-none">
                Locus <span className="text-[var(--muted)] font-semibold text-sm">Medicina</span>
              </span>
              <span className="text-[11px] text-[var(--muted)] font-medium hidden md:block mt-0.5">
                De estudantes de medicina para estudantes de medicina
              </span>
            </div>
          </button>
        </div>

        {/* View Switcher Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-[var(--bg)] p-1 rounded-[var(--radius-pill)] border border-[var(--line)]">
          <button
            onClick={() => setCurrentTab("landing")}
            className={`px-3.5 py-1.5 rounded-[var(--radius-pill)] text-xs font-bold transition-all ${
              currentTab === "landing"
                ? "bg-[var(--paper)] text-[var(--ink)] shadow-xs"
                : "text-[var(--muted)] hover:text-[var(--ink)]"
            }`}
          >
            Página de Vendas
          </button>
          <button
            onClick={() => setCurrentTab("platform")}
            className={`px-3.5 py-1.5 rounded-[var(--radius-pill)] text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentTab === "platform"
                ? "bg-[var(--paper)] text-[var(--ink)] shadow-xs"
                : "text-[var(--muted)] hover:text-[var(--ink)]"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            Demonstração do App
          </button>
          <button
            onClick={() => setCurrentTab("calculator")}
            className={`px-3.5 py-1.5 rounded-[var(--radius-pill)] text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentTab === "calculator"
                ? "bg-[var(--paper)] text-[var(--ink)] shadow-xs"
                : "text-[var(--muted)] hover:text-[var(--ink)]"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Renovação & Notificações
          </button>
        </nav>

        {/* Actions & Utilities */}
        <div className="flex items-center gap-2">
          {/* Email Summary Preview Trigger */}
          <button
            onClick={onOpenEmailModal}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-lg)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--line)] text-xs font-bold text-[var(--ink)] transition-colors"
            title="Ver preview do e-mail de notificação de cobrança e resumo"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
            <span>Notificação e-mail</span>
          </button>

          {/* Font Toggle */}
          <button
            onClick={toggleFont}
            className={`p-2 rounded-[var(--radius-icon)] border transition-colors ${
              fontMode === "dyslexic"
                ? "bg-[var(--lav)] text-[var(--ink-on-accent)] border-[var(--lav-deep)]"
                : "bg-[var(--paper)] text-[var(--ink-soft)] border-[var(--line)] hover:bg-[var(--surface-hover)]"
            }`}
            title={fontMode === "dyslexic" ? "Fonte Padrão (Urbanist)" : "Fonte para Dislexia (OpenDyslexic)"}
          >
            <Type className="w-4 h-4" />
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-[var(--radius-icon)] bg-[var(--paper)] border border-[var(--line)] text-[var(--ink-soft)] hover:bg-[var(--surface-hover)] transition-colors"
            title={theme === "light" ? "Ativar Modo Escuro (Proteção Ocular)" : "Ativar Modo Claro"}
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          {/* Primary CTA Button */}
          <a
            href="#planos"
            onClick={(e) => {
              if (currentTab !== "landing") {
                setCurrentTab("landing");
              }
            }}
            className="px-4 py-2 rounded-[var(--radius-lg)] bg-[var(--ink)] text-[var(--paper)] text-xs font-extrabold hover:opacity-90 transition-opacity shadow-xs flex items-center gap-1.5"
          >
            <span>Assinar Agora</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--yellow)]" />
          </a>
        </div>
      </div>

      {/* Mobile Nav Bar */}
      <div className="md:hidden flex items-center justify-around bg-[var(--surface)] border-t border-[var(--line)] px-2 py-2">
        <button
          onClick={() => setCurrentTab("landing")}
          className={`px-3 py-1 rounded-[var(--radius-pill)] text-xs font-bold ${
            currentTab === "landing" ? "bg-[var(--yellow)] text-[var(--ink-on-accent)]" : "text-[var(--muted)]"
          }`}
        >
          Landing
        </button>
        <button
          onClick={() => setCurrentTab("platform")}
          className={`px-3 py-1 rounded-[var(--radius-pill)] text-xs font-bold ${
            currentTab === "platform" ? "bg-[var(--yellow)] text-[var(--ink-on-accent)]" : "text-[var(--muted)]"
          }`}
        >
          App Demo
        </button>
        <button
          onClick={() => setCurrentTab("calculator")}
          className={`px-3 py-1 rounded-[var(--radius-pill)] text-xs font-bold ${
            currentTab === "calculator" ? "bg-[var(--yellow)] text-[var(--ink-on-accent)]" : "text-[var(--muted)]"
          }`}
        >
          Renovação
        </button>
      </div>
    </header>
  );
};
