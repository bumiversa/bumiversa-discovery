// src/components/landing/HeroSection.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { pageContent, siteConfig } from "@/lib/content";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Refs untuk elemen visual convergence
  const scatter1Ref = useRef<HTMLDivElement>(null);
  const scatter2Ref = useRef<HTMLDivElement>(null);
  const scatter3Ref = useRef<HTMLDivElement>(null);
  const alignmentLineRef = useRef<HTMLDivElement>(null);
  const clarityDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const points = [
        scatter1Ref.current,
        scatter2Ref.current,
        scatter3Ref.current,
      ];

      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.6,
      });

      // Fase 1: Scatter
      // Titik mulai tersebar dan samar.
      tl.fromTo(
        points,
        {
          x: (i) => (i === 0 ? -30 : i === 1 ? 40 : -20),
          y: (i) => (i === 0 ? -40 : i === 1 ? 30 : 50),
          opacity: 0.1,
        },
        {
          x: 0,
          y: 0,
          opacity: 0.4,
          duration: 2,
          stagger: 0.3,
          ease: "power2.inOut",
        }
      )

        // Fase 2: Relationship & Alignment
        // Garis perlahan menghubungkan elemen.
        .fromTo(
          alignmentLineRef.current,
          {
            scaleY: 0,
            opacity: 0,
          },
          {
            scaleY: 1,
            opacity: 0.6,
            duration: 1.4,
            ease: "power2.inOut",
            transformOrigin: "center center",
          },
          "-=0.5"
        )

        // Fase 3: Clarity
        // Titik emas hadir sebagai penanda kejelasan.
        .fromTo(
          clarityDotRef.current,
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.2"
        )

        // Beri waktu agar keadaan jernih dapat diamati.
        .to({}, { duration: 1.8 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-navy-grid py-24 md:py-32 overflow-hidden">
      {/* Subtle ambient glow untuk kedalaman */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-content mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

          {/* KOLOM KIRI: Narasi Discovery */}
          <div className="flex-1 text-center md:text-left">
            <span className="text-[11px] md:text-xs font-bold tracking-[0.25em] text-accent uppercase mb-4 block">
              {pageContent.hero.eyebrow}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
              {pageContent.hero.headline}
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
              {pageContent.hero.subheadline}
            </p>

            {/* CTA: Menggunakan Gold sebagai momen kejelasan/aksi */}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Halo BUMIVERSA, saya mengunjungi halaman Discovery. ${pageContent.hero.ctaText}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-yellow-500 text-bumiversa-900 font-semibold py-3.5 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/40"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {pageContent.hero.ctaText}
            </a>
          </div>

          {/* KOLOM KANAN: Visual Metaphor "Convergence / Alignment" */}
          <div className="flex-1 w-full max-w-[350px] mx-auto md:mx-0">
            <div className="relative h-[300px] md:h-[350px] w-full flex items-center justify-center">

              {/* Elemen Scatter (Default: sudah di tengah, GSAP akan menganimasikan FROM posisi acak) */}
              <div ref={scatter1Ref} className="absolute w-2 h-2 rounded-full bg-white/40 top-[30%] left-[30%]" />
              <div ref={scatter2Ref} className="absolute w-2 h-2 rounded-full bg-white/40 bottom-[30%] right-[30%]" />
              <div ref={scatter3Ref} className="absolute w-2 h-2 rounded-full bg-white/40 top-[60%] left-[60%]" />

              {/* Elemen Alignment (Garis vertikal penghubung) */}
              <div
                ref={alignmentLineRef}
                className="absolute w-[1px] h-[120px] bg-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />

              {/* Elemen Clarity (Titik Emas di pusat pertemuan) */}
              <div
                ref={clarityDotRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent shadow-[0_0_20px_rgba(234,179,8,0.6)]"
              />

              {/* Label arsitektural kecil */}
              <div className="absolute bottom-4 right-0 text-[9px] tracking-widest text-white/30 uppercase">
                Clarity
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
