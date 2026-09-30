// src/components/landing/BoundarySection.tsx
import { pageContent } from "@/lib/content";

export function BoundarySection() {
  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-content mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-bumiversa-900 mb-12 text-center">
          {pageContent.boundary.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto">
          {/* Will Get */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-bumiversa-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Yang Akan Anda Dapatkan:
            </h3>
            <ul className="space-y-4">
              {pageContent.boundary.willGet.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-700">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Will Not */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-neutral-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neutral-300" />
              Yang Tidak Akan Kami Lakukan:
            </h3>
            <ul className="space-y-4">
              {pageContent.boundary.willNot.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-500">
                  <svg className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
