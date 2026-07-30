import React, { useEffect, useRef, useState } from "react";
import { AlertTriangle, Check, Copy, Mail, RefreshCw, X } from "lucide-react";
import { EmailTemplateData } from "../types";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanId: string;
}

export const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose, selectedPlanId }) => {
  const [activeTemplate, setActiveTemplate] = useState<"receipt" | "renewalNotice">("receipt");
  const [templates, setTemplates] = useState<EmailTemplateData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);

  const loadTemplates = () => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);
    setTemplates(null);

    fetch("/api/notifications/templates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({ planId: selectedPlanId, userEmail: "estudante@medicina.br", userName: "Dr(a). Mariana Silva" }),
    })
      .then(async (response) => {
        if (!response.ok) throw new Error("Não foi possível carregar a prévia agora.");
        const data = await response.json();
        if (!data.templates) throw new Error("A prévia veio incompleta. Tente novamente.");
        setTemplates(data.templates);
      })
      .catch((requestError: unknown) => {
        if (requestError instanceof DOMException && requestError.name === "AbortError") return;
        setError(requestError instanceof Error ? requestError.message : "Não foi possível carregar a prévia agora.");
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  };

  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const previousBodyOverflow = document.body.style.overflow;
    const abort = loadTemplates();
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableNodes = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>;
      const focusableElements: HTMLElement[] = Array.from(focusableNodes)
        .filter((element) => !element.hasAttribute("hidden"));

      if (focusableElements.length === 0) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      abort();
      document.body.style.overflow = previousBodyOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.requestAnimationFrame(() => previouslyFocused?.focus());
    };
  }, [isOpen, selectedPlanId]);

  if (!isOpen) return null;

  const currentEmail = templates?.[activeTemplate] ?? null;
  const handleCopyHtml = async () => {
    if (!currentEmail) return;
    try {
      await navigator.clipboard.writeText(currentEmail.html);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Não foi possível copiar o HTML. Selecione o conteúdo manualmente e tente de novo.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--overlay-scrim)] p-4 backdrop-blur-xs" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section ref={dialogRef} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="email-preview-title" className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--line)] bg-[var(--paper)] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[var(--line)] bg-[var(--surface)] p-5">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-icon)] bg-[var(--info-surface)] text-[var(--info-ink)]"><Mail className="h-4 w-4" /></span>
            <div>
              <h3 id="email-preview-title" className="text-base font-extrabold text-[var(--ink)]">Prévia de e-mails de cobrança</h3>
              <p className="text-xs text-[var(--muted)]">Veja com clareza o que chega antes e depois da renovação.</p>
            </div>
          </div>
          <button ref={closeButtonRef} onClick={onClose} aria-label="Fechar prévia de e-mails" className="min-h-11 min-w-11 rounded-[var(--radius-icon)] p-2 text-[var(--muted)] transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"><X className="h-5 w-5" /></button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] bg-[var(--bg)] p-3">
          <div className="flex gap-2" role="tablist" aria-label="Tipo de e-mail">
            <button role="tab" aria-selected={activeTemplate === "receipt"} onClick={() => setActiveTemplate("receipt")} className={`min-h-11 rounded-[var(--radius-pill)] px-3.5 py-1.5 text-xs font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)] ${activeTemplate === "receipt" ? "bg-[var(--paper)] text-[var(--ink)] shadow-xs" : "text-[var(--muted)] hover:text-[var(--ink)]"}`}>Confirmação</button>
            <button role="tab" aria-selected={activeTemplate === "renewalNotice"} onClick={() => setActiveTemplate("renewalNotice")} className={`min-h-11 rounded-[var(--radius-pill)] px-3.5 py-1.5 text-xs font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)] ${activeTemplate === "renewalNotice" ? "bg-[var(--paper)] text-[var(--ink)] shadow-xs" : "text-[var(--muted)] hover:text-[var(--ink)]"}`}>Lembrete de renovação</button>
          </div>
          <button onClick={handleCopyHtml} disabled={!currentEmail} className="flex min-h-11 items-center gap-1.5 rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--paper)] px-3 py-1.5 text-xs font-bold text-[var(--ink)] transition-colors hover:bg-[var(--surface-hover)] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]">
            {copied ? <Check className="h-3.5 w-3.5 text-[var(--success-accent)]" /> : <Copy className="h-3.5 w-3.5" />} {copied ? "Copiado" : "Copiar HTML"}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto bg-[var(--bg)] p-6" aria-live="polite">
          {loading && <div className="py-20 text-center text-sm font-medium text-[var(--muted)]">Carregando prévia de cobrança…</div>}
          {error && !loading && <div className="mx-auto max-w-md space-y-4 rounded-[var(--radius-lg)] border border-[var(--warning-border)] bg-[var(--warning-surface)] p-5 text-center text-[var(--warning-ink)]"><AlertTriangle className="mx-auto h-6 w-6" /><p className="text-sm font-bold">{error}</p><button onClick={() => loadTemplates()} className="inline-flex min-h-11 items-center gap-2 rounded-[var(--radius-lg)] bg-[var(--ink)] px-4 py-2 text-xs font-extrabold text-[var(--paper)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"><RefreshCw className="h-3.5 w-3.5" />Tentar novamente</button></div>}
          {currentEmail && !loading && <div className="space-y-4"><p className="rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--paper)] p-3 text-xs font-semibold text-[var(--ink)]"><span className="font-bold text-[var(--muted)]">Assunto: </span>{currentEmail.subject}</p><div className="rounded-2xl border border-[var(--line)] bg-[var(--email-canvas)] p-4 shadow-sm sm:p-8" dangerouslySetInnerHTML={{ __html: currentEmail.html }} /></div>}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-[var(--line)] bg-[var(--surface)] p-4"><p className="text-xs font-medium text-[var(--muted)]">Pressione Esc para fechar.</p><button onClick={onClose} className="min-h-11 rounded-[var(--radius-lg)] bg-[var(--ink)] px-5 py-2 text-xs font-extrabold text-[var(--paper)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]">Fechar prévia</button></div>
      </section>
    </div>
  );
};
