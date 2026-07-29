import React, { useState, useEffect } from "react";
import { X, Mail, ShieldCheck, Copy, Check, ExternalLink } from "lucide-react";
import { EmailTemplateData } from "../types";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanId: string;
}

export const EmailModal: React.FC<EmailModalProps> = ({
  isOpen,
  onClose,
  selectedPlanId,
}) => {
  const [activeTemplate, setActiveTemplate] = useState<"receipt" | "renewalNotice">("receipt");
  const [templates, setTemplates] = useState<EmailTemplateData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      fetch("/api/notifications/templates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planId: selectedPlanId,
          userEmail: "estudante@medicina.br",
          userName: "Dr(a). Mariana Silva",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setTemplates(data.templates);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Erro ao carregar templates de e-mail:", err);
          setLoading(false);
        });
    }
  }, [isOpen, selectedPlanId]);

  if (!isOpen) return null;

  const currentEmail = templates ? templates[activeTemplate] : null;

  const handleCopyHtml = () => {
    if (currentEmail) {
      navigator.clipboard.writeText(currentEmail.html);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[var(--paper)] border border-[var(--line)] rounded-[var(--radius-card)] max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-[var(--line)] bg-[var(--surface)] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-[var(--radius-icon)] bg-[var(--lav)] flex items-center justify-center text-indigo-900 font-bold">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-[var(--ink)]">
                Template do E-mail de Notificação de Cobrança
              </h3>
              <p className="text-xs text-[var(--muted)]">
                Preview responsivo do e-mail enviado ao usuário
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[var(--surface-hover)] text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Template Switcher */}
        <div className="p-3 bg-[var(--bg)] border-b border-[var(--line)] flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTemplate("receipt")}
              className={`px-3.5 py-1.5 rounded-[var(--radius-pill)] text-xs font-bold transition-all ${
                activeTemplate === "receipt"
                  ? "bg-[var(--paper)] text-[var(--ink)] shadow-xs"
                  : "text-[var(--muted)] hover:text-[var(--ink)]"
              }`}
            >
              1. Confirmação de Assinatura
            </button>
            <button
              onClick={() => setActiveTemplate("renewalNotice")}
              className={`px-3.5 py-1.5 rounded-[var(--radius-pill)] text-xs font-bold transition-all ${
                activeTemplate === "renewalNotice"
                  ? "bg-[var(--paper)] text-[var(--ink)] shadow-xs"
                  : "text-[var(--muted)] hover:text-[var(--ink)]"
              }`}
            >
              2. Lembrete de Renovação
            </button>
          </div>

          <button
            onClick={handleCopyHtml}
            className="px-3 py-1.5 rounded-[var(--radius-lg)] bg-[var(--paper)] border border-[var(--line)] text-xs font-bold text-[var(--ink)] flex items-center gap-1.5 hover:bg-[var(--surface-hover)] transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copiado!" : "Copiar HTML"}</span>
          </button>
        </div>

        {/* Modal Body / HTML Live Render */}
        <div className="p-6 overflow-y-auto flex-1 bg-[var(--bg)]">
          {loading ? (
            <div className="py-20 text-center text-xs text-[var(--muted)] animate-pulse">
              Carregando template de notificação...
            </div>
          ) : currentEmail ? (
            <div className="space-y-4">
              <div className="p-3 rounded-[var(--radius-lg)] bg-[var(--paper)] border border-[var(--line)] text-xs font-semibold text-[var(--ink)]">
                <span className="text-[var(--muted)] font-bold">Assunto: </span>
                {currentEmail.subject}
              </div>

              {/* Render HTML content safely inside styled preview container */}
              <div
                className="bg-white rounded-2xl p-4 sm:p-8 shadow-sm border border-[var(--line)]"
                dangerouslySetInnerHTML={{ __html: currentEmail.html }}
              />
            </div>
          ) : null}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[var(--line)] bg-[var(--surface)] flex items-center justify-between">
          <p className="text-xs text-[var(--muted)] font-medium">
            Notificações geradas com layout "O Caderno Clínico Pastel"
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-[var(--radius-lg)] bg-[var(--ink)] text-[var(--paper)] text-xs font-extrabold"
          >
            Fechar Preview
          </button>
        </div>

      </div>
    </div>
  );
};
