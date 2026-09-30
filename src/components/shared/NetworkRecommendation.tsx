// src/components/shared/NetworkRecommendation.tsx
import { getRelevantRecommendations, type NetworkNodeId } from "@/lib/network-catalog";

interface NetworkRecommendationProps {
  currentContext: NetworkNodeId;
}

export function NetworkRecommendation({ currentContext }: NetworkRecommendationProps) {
  const recommendations = getRelevantRecommendations(currentContext);

  // Jika tidak ada rekomendasi yang relevan, jangan render apa-apa
  if (recommendations.length === 0) return null;

  return (
    <section className="bg-neutral-50 border-t border-neutral-200 py-20 md:py-24">
      <div className="max-w-content mx-auto px-6">

        {/* Header Section */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-[1px] bg-accent" />
          <span className="text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
            Bagian dari Jaringan BUMIVERSA
          </span>
        </div>

        {/* Grid Rekomendasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.map((node) => (
            <a
              key={node.id}
              href={`${node.url}?utm_source=${currentContext}&utm_medium=network_rec&utm_campaign=bumiversa_network`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 bg-white border border-neutral-200 rounded-lg hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-bumiversa-900 group-hover:text-accent transition-colors mb-3">
                {node.name}
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed text-sm md:text-base">
                {node.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-bumiversa-500 group-hover:text-accent transition-colors">
                <span>{node.cta}</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
