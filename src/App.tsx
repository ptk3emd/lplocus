import React, { useState, lazy, Suspense } from "react";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

// Lazy load below-the-fold and conditional components for LCP optimization & bundle splitting
const Features = lazy(() => import("./components/Features").then(m => ({ default: m.Features })));
const WhyItWorks = lazy(() => import("./components/WhyItWorks").then(m => ({ default: m.WhyItWorks })));
const Testimonials = lazy(() => import("./components/Testimonials").then(m => ({ default: m.Testimonials })));
const Pricing = lazy(() => import("./components/Pricing").then(m => ({ default: m.Pricing })));
const FAQ = lazy(() => import("./components/FAQ").then(m => ({ default: m.FAQ })));
const PlatformPreview = lazy(() => import("./components/PlatformPreview").then(m => ({ default: m.PlatformPreview })));
const EmailModal = lazy(() => import("./components/EmailModal").then(m => ({ default: m.EmailModal })));

// Minimal non-shifting fallback loaders
const SectionSkeleton = () => (
  <div className="py-16 px-4 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[300px] animate-pulse">
    <div className="h-6 w-48 bg-[var(--surface)] rounded-[var(--radius-pill)] mb-4"></div>
    <div className="h-4 w-96 max-w-full bg-[var(--surface)] rounded-[var(--radius-pill)]"></div>
  </div>
);

export default function App() {
  const [currentTab, setCurrentTab] = useState<"landing" | "platform">("landing");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [fontMode, setFontMode] = useState<"default" | "dyslexic">("default");
  const [selectedPlanId, setSelectedPlanId] = useState<string>("trimestral");
  const [initialFeature, setInitialFeature] = useState<string>("apostilas");
  const [isEmailModalOpen, setIsEmailModalOpen] = useState<boolean>(false);

  // Select feature from "Como funciona" to test in App Demo
  const handleSelectFeature = (featureKey: string) => {
    setInitialFeature(featureKey);
    setCurrentTab("platform");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = () => {
    setCurrentTab("landing");
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.getElementById("planos")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  };

  const handleOpenEmailPreview = (planId: string) => {
    setSelectedPlanId(planId);
    setIsEmailModalOpen(true);
  };

  return (
    <div data-theme={theme} data-font={fontMode} className="min-h-screen bg-[var(--bg)] text-[var(--ink)] flex flex-col font-body transition-colors">
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        theme={theme}
        toggleTheme={() => setTheme(currentTheme => currentTheme === "light" ? "dark" : "light")}
        fontMode={fontMode}
        toggleFont={() => setFontMode(currentFont => currentFont === "default" ? "dyslexic" : "default")}
        onSubscribe={handleSubscribe}
      />
      
      {/* Main Content Area */}
      <main className="flex-1">
        
        {currentTab === "landing" && (
          <>
            {/* Above-the-fold critical component loaded synchronously for optimal LCP */}
            <Hero onGoToPlatform={() => setCurrentTab("platform")} />

            {/* Below-the-fold components lazy loaded */}
            <Suspense fallback={<SectionSkeleton />}>
              <Features onSelectFeature={handleSelectFeature} />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
              <WhyItWorks />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
              <Testimonials />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
              <Pricing onOpenEmailPreview={handleOpenEmailPreview} />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
              <FAQ />
            </Suspense>
          </>
        )}

        {currentTab === "platform" && (
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <div className="p-4 rounded-[var(--radius-lg)] bg-[var(--yellow)] text-[var(--ink-on-accent)] flex flex-wrap items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold">
                  <span>Você está testando as funcionalidades da Plataforma Locus Medicina ao vivo.</span>
                </div>
                <button
                  onClick={() => setCurrentTab("landing")}
                  className="px-3 py-1.5 rounded-[var(--radius-pill)] bg-[var(--ink)] text-[var(--paper)] text-xs font-bold hover:opacity-90 cursor-pointer"
                >
                  Voltar para os Planos
                </button>
              </div>
            </div>

            <Suspense fallback={<SectionSkeleton />}>
              <PlatformPreview initialFeature={initialFeature} />
            </Suspense>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
              <Suspense fallback={<SectionSkeleton />}>
                <Pricing onOpenEmailPreview={handleOpenEmailPreview} />
              </Suspense>
            </div>
          </div>
        )}

      </main>

      {/* Email Notification Preview Modal (Lazy) */}
      {isEmailModalOpen && (
        <Suspense fallback={null}>
          <EmailModal
            isOpen={isEmailModalOpen}
            onClose={() => setIsEmailModalOpen(false)}
            selectedPlanId={selectedPlanId}
          />
        </Suspense>
      )}

      {/* Footer */}
      <Footer />

    </div>
  );
}
