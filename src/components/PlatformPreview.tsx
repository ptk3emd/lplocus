import React, { useState } from "react";
import { BookMarked, BarChart3, FileText, HelpCircle, Wifi, WifiOff, CheckCircle2, Save, Sparkles, ChevronRight, Check, AlertTriangle, Layers } from "lucide-react";
import { MOCK_TOPICS, MOCK_USER_NOTES } from "../data/mockData";
import { StudyTopic, UserNote } from "../types";

interface PlatformPreviewProps {
  initialFeature?: string;
}

export const PlatformPreview: React.FC<PlatformPreviewProps> = ({ initialFeature }) => {
  const [activeTab, setActiveTab] = useState<"apostila" | "progresso" | "resumos" | "questoes">(
    initialFeature === "progresso"
      ? "progresso"
      : initialFeature === "resumos"
      ? "resumos"
      : initialFeature === "questoes"
      ? "questoes"
      : "apostila"
  );

  const [selectedTopic, setSelectedTopic] = useState<StudyTopic>(MOCK_TOPICS[0]);
  const [userNotes, setUserNotes] = useState<UserNote[]>(MOCK_USER_NOTES);
  const [newNoteText, setNewNoteText] = useState<string>("");
  const [isOfflineMode, setIsOfflineMode] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set(["pediatria-croup-laringite"]));

  // Handle Note Save
  const handleSaveNote = () => {
    if (!newNoteText.trim()) return;
    const newNote: UserNote = {
      id: "note-" + Date.now(),
      topicId: selectedTopic.id,
      topicTitle: selectedTopic.title,
      content: newNoteText,
      updatedAt: "Agora (Sincronizado)",
    };
    setUserNotes([newNote, ...userNotes]);
    setNewNoteText("");
  };

  // Toggle Topic Completion
  const toggleTopicCompletion = (topicId: string) => {
    const next = new Set(completedTopics);
    if (next.has(topicId)) {
      next.delete(topicId);
    } else {
      next.add(topicId);
    }
    setCompletedTopics(next);
  };

  return (
    <section id="demo-app" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Container Shell */}
      <div className="rounded-[var(--radius-card)] bg-[var(--paper)] border border-[var(--line)] shadow-md overflow-hidden">
        
        {/* App Workspace Top Bar */}
        <div className="bg-[var(--surface)] border-b border-[var(--line)] px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          
          {/* Active File / Subject Breadcrumb */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs font-extrabold text-[var(--ink)]">
              {selectedTopic.discipline}
            </span>
            <span className="text-[var(--muted)] text-xs">/</span>
            <span className="text-xs font-semibold text-[var(--ink-soft)] truncate max-w-[200px] sm:max-w-xs">
              {selectedTopic.title}
            </span>
          </div>

          {/* Offline Mode Simulator Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOfflineMode(!isOfflineMode)}
              className={`px-3 py-1.5 rounded-[var(--radius-pill)] text-xs font-bold flex items-center gap-1.5 transition-colors ${
                isOfflineMode
                  ? "bg-amber-100 text-amber-900 border border-amber-300"
                  : "bg-[var(--paper)] text-[var(--ink-soft)] border border-[var(--line)] hover:bg-[var(--surface-hover)]"
              }`}
            >
              {isOfflineMode ? (
                <>
                  <WifiOff className="w-3.5 h-3.5 text-amber-700" />
                  <span>Modo Hospital (Offline Parcial Ativo)</span>
                </>
              ) : (
                <>
                  <Wifi className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Conectado (Online)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Feature Navigation Bar */}
        <div className="bg-[var(--paper)] border-b border-[var(--line)] px-4 sm:px-6 py-2.5 flex overflow-x-auto gap-2">
          <button
            onClick={() => setActiveTab("apostila")}
            className={`px-4 py-2 rounded-[var(--radius-lg)] text-xs font-extrabold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === "apostila"
                ? "bg-[var(--ink)] text-[var(--paper)] shadow-xs"
                : "bg-[var(--surface)] text-[var(--ink-soft)] hover:text-[var(--ink)]"
            }`}
          >
            <BookMarked className="w-3.5 h-3.5 text-[var(--yellow)]" />
            <span>Apostila Estruturada</span>
          </button>

          <button
            onClick={() => setActiveTab("progresso")}
            className={`px-4 py-2 rounded-[var(--radius-lg)] text-xs font-extrabold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === "progresso"
                ? "bg-[var(--ink)] text-[var(--paper)] shadow-xs"
                : "bg-[var(--surface)] text-[var(--ink-soft)] hover:text-[var(--ink)]"
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Progresso Visível</span>
          </button>

          <button
            onClick={() => setActiveTab("resumos")}
            className={`px-4 py-2 rounded-[var(--radius-lg)] text-xs font-extrabold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === "resumos"
                ? "bg-[var(--ink)] text-[var(--paper)] shadow-xs"
                : "bg-[var(--surface)] text-[var(--ink-soft)] hover:text-[var(--ink)]"
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Resumos Pessoais ({userNotes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("questoes")}
            className={`px-4 py-2 rounded-[var(--radius-lg)] text-xs font-extrabold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === "questoes"
                ? "bg-[var(--ink)] text-[var(--paper)] shadow-xs"
                : "bg-[var(--surface)] text-[var(--ink-soft)] hover:text-[var(--ink)]"
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
            <span>Dúvidas e Questões</span>
          </button>
        </div>

        {/* Workspace Main Body */}
        <div className="p-6 sm:p-8 min-h-[480px]">
          
          {/* TAB 1: APOSTILA ESTRUTURADA */}
          {activeTab === "apostila" && (
            <div className="max-w-3xl mx-auto space-y-6">
              
              {/* Topic Title & Meta */}
              <div className="pb-4 border-b border-[var(--line)] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="px-2.5 py-1 rounded-[var(--radius-pill)] bg-[var(--lav)] text-[var(--ink-on-accent)] font-extrabold text-[11px] uppercase tracking-wider">
                    {selectedTopic.period}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink)] mt-2">
                    {selectedTopic.title}
                  </h2>
                  <p className="text-xs text-[var(--muted)] mt-1">
                    Tempo estimado de leitura: {selectedTopic.readTimeMinutes} min • Atualizado conforme diretrizes da SBC/SBP
                  </p>
                </div>

                <button
                  onClick={() => toggleTopicCompletion(selectedTopic.id)}
                  className={`px-4 py-2 rounded-[var(--radius-lg)] font-bold text-xs flex items-center gap-2 transition-colors ${
                    completedTopics.has(selectedTopic.id)
                      ? "bg-[var(--sage)] text-emerald-950 border border-emerald-300"
                      : "bg-[var(--surface)] text-[var(--ink)] border border-[var(--line)] hover:bg-[var(--surface-hover)]"
                  }`}
                >
                  <CheckCircle2 className={`w-4 h-4 ${completedTopics.has(selectedTopic.id) ? "text-emerald-700" : "text-[var(--muted)]"}`} />
                  <span>{completedTopics.has(selectedTopic.id) ? "Estudado ✓" : "Marcar como Estudado"}</span>
                </button>
              </div>

              {/* Render Structured Blocks */}
              <div className="space-y-6">
                {selectedTopic.blocks.map((block) => {
                  if (block.type === "paragraph") {
                    return (
                      <p key={block.id} className="text-base text-[var(--ink-soft)] font-medium leading-relaxed">
                        {block.content}
                      </p>
                    );
                  }

                  if (block.type === "heading") {
                    return (
                      <h3 key={block.id} className="text-xl font-extrabold text-[var(--ink)] pt-4 pb-1 border-b border-[var(--line)]">
                        {block.title}
                      </h3>
                    );
                  }

                  if (block.type === "callout") {
                    const calloutBg =
                      block.calloutType === "crit"
                        ? "bg-[var(--peach)] text-orange-950 border-orange-200"
                        : block.calloutType === "warn"
                        ? "bg-[var(--cream)] text-amber-950 border-amber-200"
                        : "bg-[var(--sage)] text-emerald-950 border-emerald-200";

                    return (
                      <div key={block.id} className={`p-5 rounded-[var(--radius-lg)] border ${calloutBg} space-y-2`}>
                        <div className="flex items-center gap-2 font-extrabold text-xs uppercase tracking-wider">
                          <AlertTriangle className="w-4 h-4 shrink-0" />
                          <span>{block.title}</span>
                        </div>
                        <p className="text-sm font-semibold leading-relaxed">
                          {block.content}
                        </p>
                      </div>
                    );
                  }

                  if (block.type === "clinical-key") {
                    return (
                      <div key={block.id} className="p-6 rounded-[var(--radius-lg)] bg-[var(--ink)] text-[var(--paper)] space-y-2 shadow-xs">
                        <div className="text-[11px] font-extrabold text-[var(--yellow)] uppercase tracking-widest">
                          {block.title}
                        </div>
                        <p className="text-sm font-medium leading-relaxed text-zinc-200">
                          {block.content}
                        </p>
                      </div>
                    );
                  }

                  if (block.type === "table" && block.tableData) {
                    return (
                      <div key={block.id} className="overflow-x-auto border border-[var(--line)] rounded-[var(--radius-lg)]">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead className="bg-[var(--surface)] text-[var(--ink)] font-extrabold border-b border-[var(--line)]">
                            <tr>
                              {block.tableData.headers.map((h, i) => (
                                <th key={i} className="p-3">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[var(--line)]">
                            {block.tableData.rows.map((r, i) => (
                              <tr key={i} className="hover:bg-[var(--surface-hover)]">
                                {r.map((c, j) => (
                                  <td key={j} className="p-3 font-medium text-[var(--ink-soft)]">{c}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }

                  return null;
                })}
              </div>

            </div>
          )}

          {/* TAB 2: PROGRESSO VISÍVEL */}
          {activeTab === "progresso" && (
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Top Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-[var(--radius-card)] bg-[var(--surface)] border border-[var(--line)]">
                  <p className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider">Sequência Atual</p>
                  <div className="text-3xl font-extrabold text-[var(--ink)] mt-1 flex items-center gap-2">
                    <span>14 Dias</span>
                  </div>
                  <p className="text-[11px] text-[var(--muted)] mt-1">Estudando diariamente sem falhar</p>
                </div>

                <div className="p-5 rounded-[var(--radius-card)] bg-[var(--surface)] border border-[var(--line)]">
                  <p className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider">Tópicos Concluídos</p>
                  <div className="text-3xl font-extrabold text-emerald-700 mt-1">
                    {completedTopics.size} / {MOCK_TOPICS.length + 18}
                  </div>
                  <p className="text-[11px] text-[var(--muted)] mt-1">Disciplinas do Semestre</p>
                </div>

                <div className="p-5 rounded-[var(--radius-card)] bg-[var(--surface)] border border-[var(--line)]">
                  <p className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider">Tempo de Leitura</p>
                  <div className="text-3xl font-extrabold text-indigo-700 mt-1">
                    18.5 horas
                  </div>
                  <p className="text-[11px] text-[var(--muted)] mt-1">Registrado este mês</p>
                </div>
              </div>

              {/* Heatmap Grid Simulation */}
              <div className="p-6 rounded-[var(--radius-card)] bg-[var(--paper)] border border-[var(--line)] space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-extrabold text-[var(--ink)]">
                    Constância de Estudo (Últimas 12 Semanas)
                  </h3>
                  <span className="text-xs text-[var(--muted)] font-medium">Locus Heatmap</span>
                </div>

                <div className="grid grid-cols-12 gap-2">
                  {Array.from({ length: 84 }).map((_, idx) => {
                    const level = idx % 5 === 0 ? "bg-[var(--yellow)]" : idx % 3 === 0 ? "bg-[var(--lav)]" : idx % 2 === 0 ? "bg-[var(--sage)]" : "bg-[var(--line)]";
                    return (
                      <div
                        key={idx}
                        className={`w-full aspect-square rounded-[var(--radius-xs)] ${level} hover:scale-110 transition-transform`}
                        title={`Dia ${idx + 1}: Atividade registrada`}
                      />
                    );
                  })}
                </div>
                
                <div className="flex items-center justify-between text-[11px] text-[var(--muted)] font-medium">
                  <span>Menos ativo</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-xs bg-[var(--line)]" />
                    <span className="w-3 h-3 rounded-xs bg-[var(--lav)]" />
                    <span className="w-3 h-3 rounded-xs bg-[var(--sage)]" />
                    <span className="w-3 h-3 rounded-xs bg-[var(--yellow)]" />
                  </div>
                  <span>Mais ativo</span>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: RESUMOS PESSOAIS */}
          {activeTab === "resumos" && (
            <div className="max-w-3xl mx-auto space-y-6">
              
              <div className="p-6 rounded-[var(--radius-card)] bg-[var(--surface)] border border-[var(--line)] space-y-4">
                <h3 className="text-base font-extrabold text-[var(--ink)] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-600" />
                  <span>Novo Resumo sobre "{selectedTopic.title}"</span>
                </h3>

                <textarea
                  value={newNoteText}
                  onChange={(e) => setNewNoteText(e.target.value)}
                  placeholder="Escreva seus esquemas, condutas de aula e observações aqui..."
                  rows={4}
                  className="w-full p-4 rounded-[var(--radius-lg)] bg-[var(--paper)] border border-[var(--line)] text-sm font-medium text-[var(--ink)] focus:outline-none focus:border-[var(--yellow)]"
                />

                <div className="flex justify-end">
                  <button
                    onClick={handleSaveNote}
                    className="px-5 py-2.5 rounded-[var(--radius-lg)] bg-[var(--ink)] text-[var(--paper)] text-xs font-extrabold flex items-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <Save className="w-3.5 h-3.5 text-[var(--yellow)]" />
                    <span>Salvar Resumo Pessoal</span>
                  </button>
                </div>
              </div>

              {/* Saved Notes List */}
              <div className="space-y-4">
                <h4 className="text-sm font-extrabold text-[var(--ink)]">Resumos Sincronizados</h4>
                {userNotes.map((note) => (
                  <div key={note.id} className="p-5 rounded-[var(--radius-lg)] bg-[var(--paper)] border border-[var(--line)] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-extrabold text-[var(--ink)]">{note.topicTitle}</span>
                      <span className="text-[var(--muted)]">{note.updatedAt}</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-[var(--ink-soft)] leading-relaxed">
                      {note.content}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 4: QUESTÕES INTEGRADAS */}
          {activeTab === "questoes" && (
            <div className="max-w-3xl mx-auto space-y-6">
              {selectedTopic.questions.map((q) => {
                const selected = selectedAnswers[q.id];
                const isAnswered = selected !== undefined;
                const isCorrect = selected === q.correctOptionIndex;

                return (
                  <div key={q.id} className="p-6 rounded-[var(--radius-card)] bg-[var(--paper)] border border-[var(--line)] space-y-4">
                    <h3 className="text-base font-extrabold text-[var(--ink)]">{q.title}</h3>
                    <p className="text-sm font-semibold text-[var(--ink-soft)] leading-relaxed">{q.questionText}</p>

                    <div className="space-y-2 pt-2">
                      {q.options.map((opt, optIdx) => {
                        const isOptionSelected = selected === optIdx;
                        let optionStyle = "bg-[var(--surface)] border-[var(--line)] text-[var(--ink)]";

                        if (isAnswered) {
                          if (optIdx === q.correctOptionIndex) {
                            optionStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                          } else if (isOptionSelected && !isCorrect) {
                            optionStyle = "bg-red-100 border-red-300 text-red-950 font-bold";
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => setSelectedAnswers({ ...selectedAnswers, [q.id]: optIdx })}
                            className={`w-full text-left p-3.5 rounded-[var(--radius-lg)] border text-xs sm:text-sm font-medium transition-colors ${optionStyle}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <div className={`p-4 rounded-[var(--radius-lg)] border text-xs leading-relaxed ${
                        isCorrect ? "bg-emerald-50 border-emerald-200 text-emerald-950" : "bg-amber-50 border-amber-200 text-amber-950"
                      }`}>
                        <p className="font-extrabold mb-1">{isCorrect ? "Resposta Correta!" : "Gabarito Comentado:"}</p>
                        <p className="font-medium">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
