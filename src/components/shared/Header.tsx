// src/components/shared/Header.tsx
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
        <span className="text-lg font-bold tracking-tight text-bumiversa-900">
          BUMIVERSA
        </span>
      </div>
    </header>
  );
}
