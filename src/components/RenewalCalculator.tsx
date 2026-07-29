import React, { useState, useEffect } from "react";
import { Calculator, Calendar, Mail, ShieldCheck, CheckCircle2, ArrowRight, ExternalLink, Send, Sparkles } from "lucide-react";
import { RenewalCalculationResult } from "../types";

interface RenewalCalculatorProps {
  selectedPlanId: string;
  onSelectPlan: (id: string) => void;
  onOpenEmailModal: () => void;
}

export const RenewalCalculator: React.FC<RenewalCalculatorProps> = ({
  selectedPlanId,
  onSelectPlan,
  onOpenEmailModal,
}) => {
  const [calculation, setCalculation] = useState<RenewalCalculationResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("estudante@medicina.br");
  const [userName, setUserName] = useState<string>("Mariana Silva");
  const [sendStatus, setSendStatus] = useState<{ success: boolean; message: string } | null>(null);

  // Fetch renewal calculation from backend
  const fetchRenewalCalculation = async (planId: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/renewals/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId }),
      });
      const data = await res.json();
      setCalculation(data);
    } catch (err) {
      console.error("Erro ao calcular renovação:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRenewalCalculation(selectedPlanId);
  }, [selectedPlanId]);

  // Handle Send Summary Email
  const handleSendSummary = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail) return;

    try {
      const res = await fetch("/api/notifications/send-summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userEmail,
          name: userName,
          planId: selectedPlanId,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setSendStatus({ success: true, message: data.message });
      } else {
        setSendStatus({ success: false, message: data.error || "Erro ao enviar e-mail." });
      }
    } catch (err) {
      setSendStatus({ success: false, message: "Falha de conexão com o servidor." });
    }
  };

  return (
    <section id="calculadora" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Title */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-pill)] bg-[var(--lav)] text-[var(--ink-on-accent)] font-extrabold text-xs uppercase tracking-wider mb-3">
          <Calculator className="w-3.5 h-3.5 text-indigo-700" />
          Gestão Transparente de Assinatura
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)] tracking-tight">
          Cálculo Automático de Renovação & Notificações
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[var(--ink-soft)] font-medium">
          Confira o cronograma exato de cobranças do seu plano, o desconto aplicado no 1º mês e envie um resumo detalhado para o seu e-mail.
        </p>
      </div>

      {/* Plan Selector Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => onSelectPlan("mensal")}
          className={`px-5 py-2.5 rounded-[var(--radius-lg)] text-xs font-extrabold transition-all ${
            selectedPlanId === "mensal"
              ? "bg-[var(--ink)] text-[var(--paper)] shadow-sm"
              : "bg-[var(--paper)] text-[var(--ink)] border border-[var(--line)] hover:bg-[var(--surface-hover)]"
          }`}
        >
          Mensal (R$ 20 1º mês → R$ 25)
        </button>
        <button
          onClick={() => onSelectPlan("trimestral")}
          className={`px-5 py-2.5 rounded-[var(--radius-lg)] text-xs font-extrabold transition-all ${
            selectedPlanId === "trimestral"
              ? "bg-[var(--ink)] text-[var(--paper)] shadow-sm"
              : "bg-[var(--paper)] text-[var(--ink)] border border-[var(--line)] hover:bg-[var(--surface-hover)]"
          }`}
        >
          Trimestral (R$ 40 1º mês → R$ 50)
        </button>
        <button
          onClick={() => onSelectPlan("semestral")}
          className={`px-5 py-2.5 rounded-[var(--radius-lg)] text-xs font-extrabold transition-all ${
            selectedPlanId === "semestral"
              ? "bg-[var(--ink)] text-[var(--paper)] shadow-sm"
              : "bg-[var(--paper)] text-[var(--ink)] border border-[var(--line)] hover:bg-[var(--surface-hover)]"
          }`}
        >
          Semestral (R$ 70 1º mês → R$ 90)
        </button>
      </div>

      {/* Main Calculation Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Schedule Projection Table (2 cols) */}
        <div className="lg:col-span-2 p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--paper)] border border-[var(--line)] shadow-xs">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--line)]">
            <div>
              <h3 className="text-xl font-extrabold text-[var(--ink)]">
                Cronograma de Cobranças Projetado
              </h3>
              <p className="text-xs text-[var(--muted)] mt-1">
                Datas e valores exatos com o desconto do primeiro mês aplicado no checkout Kiwify
              </p>
            </div>
            {calculation && (
              <span className="px-3 py-1 rounded-[var(--radius-pill)] bg-[var(--yellow)] text-[var(--ink-on-accent)] font-extrabold text-xs">
                Economia 1º mês: {calculation.summary.yearlySavings}
              </span>
            )}
          </div>

          {loading ? (
            <div className="py-12 text-center text-xs text-[var(--muted)] animate-pulse">
              Calculando ciclo de renovação via servidor...
            </div>
          ) : calculation ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[var(--line)] text-[var(--muted)] font-extrabold uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-2">Ciclo</th>
                    <th className="py-3 px-2">Data da Cobrança</th>
                    <th className="py-3 px-2">Valor</th>
                    <th className="py-3 px-2">Detalhamento</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  {calculation.schedule.map((item) => (
                    <tr
                      key={item.cycle}
                      className={`hover:bg-[var(--surface-hover)] transition-colors ${
                        item.isFirstCycle ? "bg-[var(--cream)]/60 font-bold" : ""
                      }`}
                    >
                      <td className="py-3.5 px-2 font-extrabold text-[var(--ink)]">
                        #{item.cycle}
                      </td>
                      <td className="py-3.5 px-2 text-[var(--ink-soft)] font-medium">
                        {item.date}
                      </td>
                      <td className="py-3.5 px-2">
                        <span className={`font-extrabold ${item.isFirstCycle ? "text-emerald-700 font-extrabold text-sm" : "text-[var(--ink)]"}`}>
                          {item.formattedAmount}
                        </span>
                      </td>
                      <td className="py-3.5 px-2 text-xs">
                        {item.isFirstCycle ? (
                          <span className="inline-flex items-center gap-1 text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded-md">
                            <Sparkles className="w-3 h-3 text-emerald-600" />
                            {item.note}
                          </span>
                        ) : (
                          <span className="text-[var(--muted)]">{item.note}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Summary Footer */}
              <div className="mt-6 pt-4 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-[var(--ink-soft)]">
                <div>
                  <span>Total estimado em 1 ano (4 ciclos/meses): </span>
                  <strong className="text-[var(--ink)] font-extrabold text-sm">{calculation.summary.totalPaidFirstYear}</strong>
                </div>

                <a
                  href={calculation.summary.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-[var(--radius-lg)] bg-[var(--ink)] text-[var(--paper)] font-extrabold flex items-center gap-1.5 hover:opacity-90 transition-opacity"
                >
                  <span>Ir para Checkout Kiwify ({calculation.summary.firstCharge})</span>
                  <ExternalLink className="w-3 h-3 text-[var(--yellow)]" />
                </a>
              </div>
            </div>
          ) : null}
        </div>

        {/* Email Summary Sender & Notification Preview (1 col) */}
        <div className="p-6 rounded-[var(--radius-card)] bg-[var(--surface)] border border-[var(--line)] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-[var(--radius-icon)] bg-[var(--lav)] flex items-center justify-center text-indigo-900 font-bold">
                <Mail className="w-4 h-4" />
              </div>
              <h4 className="text-base font-extrabold text-[var(--ink)]">
                Enviar Resumo por E-mail
              </h4>
            </div>

            <p className="text-xs text-[var(--ink-soft)] mb-6 font-medium leading-relaxed">
              Receba o extrato do seu plano, datas de renovação e link direto do Kiwify no seu e-mail institucional ou pessoal.
            </p>

            <form onSubmit={handleSendSummary} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[var(--ink)] mb-1">
                  Seu Nome
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Ex: Mariana Silva"
                  className="w-full px-3 py-2 rounded-[var(--radius-lg)] bg-[var(--paper)] border border-[var(--line)] text-xs font-medium text-[var(--ink)] focus:outline-none focus:border-[var(--yellow)]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--ink)] mb-1">
                  Seu E-mail
                </label>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="estudante@medicina.br"
                  className="w-full px-3 py-2 rounded-[var(--radius-lg)] bg-[var(--paper)] border border-[var(--line)] text-xs font-medium text-[var(--ink)] focus:outline-none focus:border-[var(--yellow)]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-[var(--radius-lg)] bg-[var(--ink)] text-[var(--paper)] font-extrabold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-xs"
              >
                <Send className="w-3.5 h-3.5 text-[var(--yellow)]" />
                <span>Enviar Resumo por E-mail</span>
              </button>
            </form>

            {sendStatus && (
              <div className={`mt-4 p-3 rounded-[var(--radius-lg)] text-xs font-bold flex items-center gap-2 ${
                sendStatus.success ? "bg-emerald-100 text-emerald-900" : "bg-red-100 text-red-900"
              }`}>
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{sendStatus.message}</span>
              </div>
            )}
          </div>

          <div className="mt-8 pt-4 border-t border-[var(--line)]">
            <button
              onClick={onOpenEmailModal}
              className="w-full py-2.5 px-3 rounded-[var(--radius-lg)] bg-[var(--paper)] border border-[var(--line)] text-xs font-extrabold text-[var(--ink)] hover:bg-[var(--surface-hover)] flex items-center justify-center gap-2 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>Ver Template do E-mail de Cobrança</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
