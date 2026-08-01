import React, { lazy, Suspense } from "react";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { PainPoint } from "./components/PainPoint";
import { FreeSample } from "./components/FreeSample";
import { ProductPreview } from "./components/ProductPreview";
import { FinalCTA } from "./components/FinalCTA";

const Features = lazy(() => import("./components/Features").then((module) => ({ default: module.Features })));
const WhyItWorks = lazy(() => import("./components/WhyItWorks").then((module) => ({ default: module.WhyItWorks })));
const Pricing = lazy(() => import("./components/Pricing").then((module) => ({ default: module.Pricing })));
const FAQ = lazy(() => import("./components/FAQ").then((module) => ({ default: module.FAQ })));

const SectionSkeleton = () => (
  <div className="mx-auto flex min-h-[300px] max-w-7xl animate-pulse flex-col items-center justify-center px-4 py-16" aria-hidden="true">
    <div className="mb-4 h-6 w-48 rounded-[var(--radius-pill)] bg-[var(--surface)]" />
    <div className="h-4 w-96 max-w-full rounded-[var(--radius-pill)] bg-[var(--surface)]" />
  </div>
);

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg)] font-body text-[var(--ink)]">
      <main className="flex-1">
        <Hero />
        <ProductPreview />
        <PainPoint />

        <Suspense fallback={<SectionSkeleton />}>
          <Features />
        </Suspense>
        <FreeSample />

        <Suspense fallback={<SectionSkeleton />}>
          <WhyItWorks />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Pricing />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <FAQ />
        </Suspense>
        <FinalCTA />
      </main>

      <Footer />
      <a href="https://locusmed.pages.dev/" target="_blank" rel="noopener noreferrer" className="fixed bottom-3 left-3 right-3 z-20 flex min-h-12 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--ink)] px-5 text-sm font-extrabold text-[var(--paper)] shadow-lg sm:hidden">Testar amostra grátis</a>
    </div>
  );
}
