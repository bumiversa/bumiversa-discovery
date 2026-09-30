// src/components/landing/ProcessSection.tsx
import { pageContent } from "@/lib/content";

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-content mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-bumiversa-900 mb-16 text-center">
          {pageContent.process.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pageContent.process.steps.map((step, i) => (
            <div key={i} className="relative p-8 bg-neutral-50 rounded-lg border border-neutral-100 hover:border-accent/30 transition-colors duration-300">
              {/* Gold Accent Number */}
              <span className="text-4xl font-bold text-accent/20 absolute top-4 right-6">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-bumiversa-900 mb-3 relative z-10">
                {step.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed relative z-10">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
