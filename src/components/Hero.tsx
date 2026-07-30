import React from "react";
import { BookOpen, Check, CheckCircle2, ChevronRight, WifiOff } from "lucide-react";

interface HeroProps {
  onGoToPlatform: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGoToPlatform }) => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 md:pb-20 md:pt-20 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.94fr)_minmax(420px,0.86fr)] lg:gap-10">
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-[var(--lav)] px-3.5 py-1.5 text-xs font-extrabold tracking-wider text-[var(--ink-on-accent)] shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Feito por quem também tá na correria da faculdade
          </div>

          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-[var(--ink)] sm:text-5xl sm:leading-[1.15] md:text-6xl">
            Locus Medicina <span className="relative inline-block">de estudantes <mark className="highlight font-extrabold">para estudantes.</mark></span>
          </h1>

          <p className="mx-auto max-w-2xl text-balance text-lg font-medium leading-relaxed text-[var(--ink-soft)] sm:text-xl lg:mx-0">
            Apostilas, questões e seus próprios resumos no mesmo lugar — para você estudar no ritmo da faculdade, não no ritmo do grupo do WhatsApp.
          </p>

          <div className="flex flex-col items-center gap-3.5 pt-4 sm:flex-row lg:items-start">
            <a
              href="#planos"
              className="group flex w-full items-center justify-center gap-2.5 rounded-[var(--radius-lg)] bg-[var(--yellow)] px-8 py-4 text-base font-extrabold text-[var(--ink-on-accent)] shadow-md transition-all hover:bg-[var(--yellow-deep)] hover:shadow-lg active:scale-[0.98] sm:w-auto"
            >
              Começar agora
              <Check className="h-5 w-5 transition-transform group-hover:scale-110" />
            </a>
            <button
              onClick={onGoToPlatform}
              className="flex w-full items-center justify-center gap-2 rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--paper)] px-6 py-4 text-base font-bold text-[var(--ink)] shadow-2xs transition-all hover:bg-[var(--surface-hover)] active:scale-[0.98] sm:w-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
            >
              <BookOpen className="h-4 w-4 text-indigo-600" />
              Ver a plataforma por dentro
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl text-left lg:max-w-none">
          <div className="overflow-hidden rounded-[var(--radius-card)] border border-[var(--line)] bg-[var(--paper)] shadow-[var(--shadow)]">
            <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--surface)] px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="truncate text-xs font-extrabold text-[var(--ink)]">Cardiologia Clínica <span className="font-medium text-[var(--muted)]">/ Insuficiência Cardíaca</span></p>
                <p className="mt-0.5 text-[11px] font-medium text-[var(--muted)]">Questão comentada · 4º ano / Ciclo Clínico</p>
              </div>
              <span className="flex shrink-0 items-center gap-1.5 rounded-[var(--radius-pill)] bg-[var(--cream)] px-2.5 py-1.5 text-[11px] font-extrabold text-amber-950">
                <WifiOff className="h-3.5 w-3.5" />
                Offline parcial
              </span>
            </div>

            <div className="space-y-5 p-5 sm:p-6">
              <div className="flex items-center gap-2 text-xs font-extrabold text-[var(--ink-soft)]">
                <span className="flex h-6 w-6 items-center justify-center rounded-[var(--radius-icon)] bg-[var(--lav)] text-[var(--ink-on-accent)]">1</span>
                Conduta na IC aguda
              </div>

              <p className="text-sm font-semibold leading-relaxed text-[var(--ink)] sm:text-base">
                Paciente com dispneia, ortopneia, edema 3+/4+ e PA 145/90. Qual é a melhor conduta inicial?
              </p>

              <div className="space-y-2">
                <div className="rounded-[var(--radius-control)] border border-[var(--line)] bg-[var(--surface)] px-3.5 py-3 text-xs font-medium text-[var(--ink-soft)] sm:text-sm">A) Suspender o betabloqueador imediatamente.</div>
                <div className="flex items-start gap-2.5 rounded-[var(--radius-control)] border border-emerald-300 bg-[var(--sage)] px-3.5 py-3 text-xs font-bold leading-relaxed text-emerald-950 sm:text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                  <span>B) Furosemida IV + oxigênio; considerar vasodilatador.</span>
                </div>
              </div>

              <div className="border-t border-[var(--line)] pt-4">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-[var(--ink-soft)]">Por que esta é a resposta</p>
                <p className="mt-1.5 text-xs font-medium leading-relaxed text-[var(--ink-soft)] sm:text-sm">O gabarito explica a conduta e mantém o ponto crítico de plantão junto da questão — sem abrir mais uma aba.</p>
              </div>
            </div>

            <button
              onClick={onGoToPlatform}
              className="flex w-full items-center justify-between border-t border-[var(--line)] bg-[var(--surface)] px-5 py-3.5 text-left text-xs font-extrabold text-[var(--ink)] transition-colors hover:bg-[var(--surface-hover)] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--ink)]"
            >
              Explorar apostilas, questões e resumos
              <ChevronRight className="h-4 w-4 text-[var(--muted)]" />
            </button>
          </div>
          <p className="mt-3 text-center text-xs font-medium text-[var(--muted)] lg:text-left">Uma prévia da experiência dentro da plataforma.</p>
        </div>
      </div>
    </section>
  );
};
