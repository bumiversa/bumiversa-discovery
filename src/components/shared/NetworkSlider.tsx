"use client";

import { useRef } from "react";
import {
  getRelevantRecommendations,
  type NetworkNodeId,
} from "@/lib/network-catalog";

interface NetworkSliderProps {
  currentContext: NetworkNodeId;
}

export function NetworkSlider({ currentContext }: NetworkSliderProps) {
  const recommendations = getRelevantRecommendations(currentContext);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (recommendations.length === 0) return null;

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth =
        scrollContainerRef.current.firstElementChild?.clientWidth || 300;

      const scrollAmount =
        direction === "left" ? -cardWidth : cardWidth;

      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="border-t border-neutral-200 bg-neutral-100 py-20 md:py-28">
      <div className="mx-auto max-w-content px-6">
        {/* Network Header */}
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-12">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                Jaringan BUMIVERSA
              </span>
            </div>

            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-bumiversa-900 md:text-4xl">
              Satu pintu bisa membawa Anda ke pintu yang lain.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
              Jika kebutuhan Anda berlanjut ke area lain, berikut beberapa
              bagian dari jaringan BUMIVERSA yang mungkin relevan.
            </p>
          </div>

          {/* Manual Navigation */}
          <div className="hidden shrink-0 gap-2 md:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 transition-all duration-200 hover:border-accent hover:text-accent"
              aria-label="Geser jaringan ke kiri"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() => scroll("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 transition-all duration-200 hover:border-accent hover:text-accent"
              aria-label="Geser jaringan ke kanan"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollContainerRef}
          className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:mx-0 md:px-0 md:pb-2 [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {recommendations.map((node, index) => (
            <a
              key={node.id}
              href={`${node.url}?utm_source=${currentContext}&utm_medium=network_slider&utm_campaign=bumiversa_network`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[300px] w-[86vw] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-bumiversa-900/10 bg-bumiversa-900 p-8 text-white shadow-[0_12px_40px_rgba(0,0,64,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,64,0.18)] sm:w-[400px] md:w-[calc(50%-12px)] md:p-10"
            >
              {/* Decorative Node Number */}
              <span className="absolute -right-4 -top-7 select-none text-[9rem] font-bold leading-none text-white/[0.035]">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Gold accent */}
              <span className="absolute left-0 top-0 h-1 w-20 bg-accent transition-all duration-300 group-hover:w-32" />

              <div className="relative flex flex-1 flex-col">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                    Network Node {String(index + 1).padStart(2, "0")}
                  </span>

                  <svg
                    className="h-5 w-5 text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 17L17 7M7 7h10v10"
                    />
                  </svg>
                </div>

                <h3 className="max-w-md text-2xl font-semibold tracking-tight md:text-3xl">
                  {node.name}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65 md:text-base">
                  {node.description}
                </p>

                <div className="mt-auto pt-8">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-200 group-hover:text-accent">
                    {node.cta}
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M5 12h14M13 6l6 6-6 6"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile navigation hint */}
        <div className="mt-6 flex items-center justify-between md:hidden">
          <span className="text-xs text-neutral-400">
            Geser untuk menjelajahi jaringan
          </span>

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600"
              aria-label="Geser jaringan ke kiri"
            >
              ←
            </button>

            <button
              onClick={() => scroll("right")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600"
              aria-label="Geser jaringan ke kanan"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
