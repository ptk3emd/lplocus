import React, { lazy, Suspense } from "react";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { PainPoint } from "./components/PainPoint";
import { FreeSample } from "./components/FreeSample";
import { Authority } from "./components/Authority";

const Features = lazy(() => import("./components/Features").then((module) => ({ default: module.Features })));
const WhyItWorks = lazy(() => import("./components/WhyItWorks").then((module) => ({ default: module.WhyItWorks })));
const Testimonials = lazy(() => import("./components/Testimonials").then((module) => ({ default: module.Testimonials })));
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
        <PainPoint />

        <Suspense fallback={<SectionSkeleton />}>
          <Features />
        </Suspense>
        <FreeSample />

        <Suspense fallback={<SectionSkeleton />}>
          <WhyItWorks />
        </Suspense>

        <Authority />

        <Suspense fallback={<SectionSkeleton />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Pricing />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <FAQ />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
