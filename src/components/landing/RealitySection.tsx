// src/components/landing/RealitySection.tsx
import { pageContent } from "@/lib/content";

export function RealitySection() {
  return (
    <section className="py-16 md:py-24 border-b border-neutral-200 bg-neutral-50">
      <div className="max-w-content mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-850 mb-8">
          {pageContent.reality.title}
        </h2>
        <ul className="space-y-4 max-w-3xl">
          {pageContent.reality.points.map((point, i) => (
            <li key={i} className="flex gap-3 text-neutral-600">
              <span className="text-neutral-400">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
