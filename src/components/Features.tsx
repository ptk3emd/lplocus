import React from "react";
import { BookMarked, BarChart3, FileText, HelpCircle, WifiOff, ArrowRight } from "lucide-react";

interface FeaturesProps {
  onSelectFeature: (featureKey: string) => void;
}

export const Features: React.FC<FeaturesProps> = ({ onSelectFeature }) => {
  const featureItems = [
    {
      key: "apostilas",
      icon: BookMarked,
      accentBg: "bg-[var(--lav)]",
      title: "Apostilas Estruturadas",
      description: "Conteúdo oficial organizado em blocos diretos, com tabelas e destaques cirúrgicos e clínicos para rápida absorção."
    },
    {
      key: "progresso",
      icon: BarChart3,
      accentBg: "bg-[var(--sage)]",
      title: "Progresso Visível",
      description: "Acompanhe a porcentagem concluída por disciplina e mantenha a constância com mapa de frequência diária."
    },
    {
      key: "resumos",
      icon: FileText,
      accentBg: "bg-[var(--yellow)]",
      title: "Resumos Pessoais",
      description: "Crie e edite seus apontamentos diretamente no capítulo. Adicione condutas e observações do preceptor sem se perder."
    },
    {
      key: "questoes",
      icon: HelpCircle,
      accentBg: "bg-[var(--peach)]",
      title: "Dúvidas e Questões",
      description: "Pratique com questões por tema e gabarito comentado ao vivo, anotando pontos-chave no próprio ambiente."
    },
    {
      key: "offline",
      icon: WifiOff,
      accentBg: "bg-[var(--mist)]",
      title: "Leitura Offline",
      description: "Apostilas abertas permanecem salvas em cache local para você continuar estudando em salas de espera e hospitais."
    }
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--line)]">
      
      {/* Section Header */}
      <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)] tracking-tight">
          Como funciona
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[var(--ink-soft)] font-medium leading-relaxed">
          Sem curva de aprendizado ou distrações. Apenas o essencial para transformar sua rotina médica de estudos.
        </p>
      </div>

      {/* Grid of 5 Features - Balanced & Clean Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.key}
              className="p-6 rounded-[var(--radius-card)] bg-[var(--paper)] border border-[var(--line)] flex flex-col justify-between hover:border-[var(--ink-soft)] transition-all group"
            >
              <div>
                {/* Header Icon */}
                <div className={`w-12 h-12 rounded-[var(--radius-icon)] ${item.accentBg} flex items-center justify-center mb-6`}>
                  <Icon className="w-6 h-6 text-[var(--ink)]" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-extrabold text-[var(--ink)] tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-[var(--ink-soft)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-6 border-t border-[var(--line)]">
                <button
                  onClick={() => onSelectFeature(item.key)}
                  className="text-xs font-extrabold text-[var(--ink)] group-hover:text-indigo-600 flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Testar na plataforma</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

