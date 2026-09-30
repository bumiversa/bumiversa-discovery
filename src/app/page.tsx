// src/app/page.tsx
import { HeroSection } from "@/components/landing/HeroSection";
import { RealitySection } from "@/components/landing/RealitySection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { BoundarySection } from "@/components/landing/BoundarySection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { NetworkSlider } from "@/components/shared/NetworkSlider";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <RealitySection />
      <ProcessSection />
      <BoundarySection />
      <FinalCtaSection />

      {/* Network Slider: Context = 'discovery' */}
      <NetworkSlider currentContext="discovery" />
    </main>
  );
}
