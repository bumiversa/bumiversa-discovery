// src/components/shared/Footer.tsx
export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 bg-neutral-50 py-8">
      <div className="mx-auto max-w-content px-6 text-center">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} BUMIVERSA. Semua hak dilindungi.
        </p>
      </div>
    </footer>
  );
}
