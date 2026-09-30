// src/lib/network-catalog.ts

export const networkNodes = {
  discovery: {
    name: "Digital Discovery",
    url: "https://discovery.bumiversa.dev",
    description:
      "Belum yakin solusi apa yang dibutuhkan? Mulai dari pemetaan masalah dan akar kebutuhan bisnis Anda.",
    cta: "Mulai Digital Discovery",
    bestFor: ["website", "utility"],
  },
  website: {
    name: "Website Profil Bisnis",
    url: "https://website.bumiversa.dev",
    description:
      "Bangun rumah digital yang modern, terstruktur, dan dirancang untuk membangun kepercayaan.",
    cta: "Jelajahi Layanan Website",
    bestFor: ["discovery", "utility"],
  },
  utility: {
    name: "Global Utility Network",
    url: "https://bumiversa.dev",
    description:
      "Akses alat digital praktis langsung dari browser untuk meningkatkan produktivitas harian.",
    cta: "Gunakan Alat Digital",
    bestFor: ["website", "discovery"],
  },
} as const;

export type NetworkNodeId = keyof typeof networkNodes;

export function getRelevantRecommendations(currentContext: NetworkNodeId) {
  return Object.entries(networkNodes)
    .filter(([id, node]) => {
      return (
        id !== currentContext &&
        (node.bestFor as readonly string[]).includes(currentContext)
      );
    })
    .slice(0, 2) // Maksimal 2 rekomendasi untuk menjaga fokus
    .map(([id, node]) => ({
      id: id as NetworkNodeId,
      ...node,
    }));
}
