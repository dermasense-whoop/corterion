export function Footer() {
  return (
    <footer className="w-full border-t border-corterion-cyan/10 bg-corterion-navy-dark mt-auto">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold tracking-[0.2em] text-white">CORTERION</span>
          <p className="text-xs tracking-widest text-corterion-slate/50">CERTAINTY. ENGINEERED.</p>
        </div>
        <p className="text-sm text-corterion-slate/60">
          © {new Date().getFullYear()} Corterion Systems. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
