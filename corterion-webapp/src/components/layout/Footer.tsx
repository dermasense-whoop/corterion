import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-black/5 bg-slate-50 mt-auto">
      <div className="container mx-auto px-6 py-16">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12 border-b border-black/5 pb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="font-serif text-3xl font-bold tracking-[0.1em] text-corterion-navy">CORTERION</span>
            <p className="text-sm font-medium tracking-widest text-slate-500 uppercase">CERTAINTY. ENGINEERED.</p>
          </div>
          
          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 text-sm font-bold text-corterion-navy uppercase tracking-wider">
            <Link href="/about" className="hover:text-corterion-cyan transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-corterion-cyan transition-colors">Contact</Link>
            <Link href="/request-demo" className="hover:text-corterion-cyan transition-colors">Request Demo</Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Legal / Cookies */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-xs font-semibold text-slate-500">
            <span>© {new Date().getFullYear()} Corterion Systems. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-corterion-navy transition-colors">Privacy Policy</Link>
              <button className="hover:text-corterion-navy transition-colors">Cookie Settings</button>
            </div>
          </div>
          
          {/* Social Icons (Inline SVGs) */}
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-corterion-navy hover:bg-corterion-navy hover:text-white transition-colors shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-corterion-navy hover:bg-corterion-navy hover:text-white transition-colors shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-corterion-navy hover:bg-corterion-navy hover:text-white transition-colors shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
