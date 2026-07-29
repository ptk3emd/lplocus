import React, { useState } from "react";
import { HelpCircle, ChevronDown, ShieldCheck } from "lucide-react";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Isso realmente funciona ou é só mais um resumo bonito?",
      answer: "O Locus foi estruturado em blocos de estudo ativo com tabelas clínicas, destaques práticos e questões integradas por tema. Não é um PDF passivo: é uma ferramenta construída especificamente para acelerar a retenção do conteúdo médico."
    },
    {
      question: "Já uso outro aplicativo/apostila, por que trocar?",
      answer: "Diferente de plataformas genéricas ou pastas bagunçadas de WhatsApp, o Locus integra resumos personalizáveis no próprio capítulo, suporte a leitura offline em hospitais e banco de questões direto na matéria. Tudo sem distrações."
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim! Não há fidelidade ou contrato de permanência. Você pode cancelar a renovação a qualquer momento com 1 clique pela Kiwify, e ainda conta com nossa garantia incondicional de reembolso total em 7 dias."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-[var(--line)]">
      
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-pill)] bg-[var(--lav)] text-[var(--ink-on-accent)] font-extrabold text-xs uppercase tracking-wider mb-4 shadow-2xs">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Dúvidas Frequentes</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)] tracking-tight mb-3">
          Perguntas Frequentes
        </h2>
        <p className="text-base font-medium text-[var(--ink-soft)]">
          Tudo o que você precisa saber antes de se juntar ao Locus Medicina.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-[var(--radius-card)] bg-[var(--paper)] border border-[var(--line)] overflow-hidden transition-all shadow-2xs"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-5 sm:p-6 text-left font-extrabold text-sm sm:text-base text-[var(--ink)] flex items-center justify-between gap-4 hover:bg-[var(--surface-hover)] transition-colors cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[var(--muted)] shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-indigo-600" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm font-medium text-[var(--ink-soft)] leading-relaxed border-t border-[var(--line)]/50 pt-4 bg-[var(--surface)]/50">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
};
