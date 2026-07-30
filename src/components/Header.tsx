import React from "react";
import { BookOpen, CheckCircle2, Moon, Sun, Type } from "lucide-react";

interface HeaderProps {
  currentTab: "landing" | "platform";
  setCurrentTab: (tab: "landing" | "platform") => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
  fontMode: "default" | "dyslexic";
  toggleFont: () => void;
  onSubscribe: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  theme,
  toggleTheme,
  fontMode,
  toggleFont,
  onSubscribe,
}) => (
  <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--paper)]/95 backdrop-blur-md transition-colors">
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
      <button
        onClick={() => setCurrentTab("landing")}
        className="group flex shrink-0 items-center gap-2.5 rounded-[var(--radius-icon)] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
        aria-label="Ir para a página inicial da Locus Medicina"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-icon)] bg-[var(--yellow)] font-extrabold text-[var(--ink-on-accent)] shadow-sm transition-transform group-hover:scale-105">LM</span>
        <span className="hidden sm:block">
          <span className="block leading-none text-lg font-extrabold tracking-tight text-[var(--ink)]">Locus <span className="text-sm font-semibold text-[var(--muted)]">Medicina</span></span>
          <span className="mt-0.5 hidden text-[11px] font-medium text-[var(--muted)] lg:block">De estudantes de medicina para estudantes de medicina</span>
        </span>
      </button>

      <nav className="hidden items-center md:flex" aria-label="Navegação principal">
        <button
          onClick={() => setCurrentTab("platform")}
          aria-current={currentTab === "platform" ? "page" : undefined}
          className={`flex min-h-11 items-center gap-1.5 rounded-[var(--radius-pill)] px-3.5 py-2 text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)] ${currentTab === "platform" ? "bg-[var(--surface-hover)] text-[var(--ink)]" : "text-[var(--ink-soft)] hover:bg-[var(--surface)] hover:text-[var(--ink)]"}`}
        >
          <BookOpen className="h-3.5 w-3.5 text-emerald-600" />
          Demonstração do App
        </button>
      </nav>

      <div className="flex items-center justify-end gap-1.5 sm:gap-2">
        <button
          onClick={toggleFont}
          aria-label={fontMode === "dyslexic" ? "Usar fonte padrão" : "Ativar fonte para dislexia"}
          aria-pressed={fontMode === "dyslexic"}
          className={`min-h-11 min-w-11 rounded-[var(--radius-icon)] border p-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)] ${fontMode === "dyslexic" ? "border-[var(--lav-deep)] bg-[var(--lav)] text-[var(--ink-on-accent)]" : "border-[var(--line)] bg-[var(--paper)] text-[var(--ink-soft)] hover:bg-[var(--surface-hover)]"}`}
        >
          <Type className="h-4 w-4" />
        </button>
        <button
          onClick={toggleTheme}
          aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
          className="min-h-11 min-w-11 rounded-[var(--radius-icon)] border border-[var(--line)] bg-[var(--paper)] p-2 text-[var(--ink-soft)] transition-colors hover:bg-[var(--surface-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
        >
          {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </button>
        <button
          onClick={onSubscribe}
          className="flex min-h-11 items-center gap-1.5 rounded-[var(--radius-lg)] bg-[var(--ink)] px-3 py-2 text-xs font-extrabold text-[var(--paper)] shadow-xs transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)] sm:px-4"
        >
          <span>Assinar Agora</span>
          <CheckCircle2 className="h-3.5 w-3.5 text-[var(--yellow)]" />
        </button>
      </div>
    </div>

    <nav className="flex border-t border-[var(--line)] bg-[var(--surface)] px-4 md:hidden" aria-label="Navegação principal">
      <button
        onClick={() => setCurrentTab("platform")}
        aria-current={currentTab === "platform" ? "page" : undefined}
        className="flex min-h-11 items-center gap-2 text-xs font-bold text-[var(--ink-soft)] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--ink)]"
      >
        <BookOpen className="h-4 w-4 text-emerald-600" />
        Ver a demonstração
      </button>
    </nav>
  </header>
);
