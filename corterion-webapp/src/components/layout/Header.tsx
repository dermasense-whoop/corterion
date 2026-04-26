"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen
          ? "bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-sm py-0" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 h-24 flex items-center justify-between transition-all duration-500 relative z-50">
        
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-3 md:gap-4 group shrink-0" onClick={() => setMobileMenuOpen(false)}>
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-500 shrink-0">
            {/* Fallback styling just in case the image is missing */}
            <div className={`absolute inset-0 rounded-full blur transition-colors duration-500 ${scrolled || mobileMenuOpen ? 'bg-black/5 group-hover:bg-corterion-cyan/10' : 'bg-white/10 group-hover:bg-white/20'}`} />
            <img 
              src="/logo-icon.png" 
              alt="Corterion Icon" 
              className={`w-8 h-8 md:w-10 md:h-10 object-contain relative z-10 transition-all duration-500 shrink-0 ${scrolled || mobileMenuOpen ? '' : 'brightness-0 invert'}`} 
              onError={(e) => { e.currentTarget.style.display = 'none'; }} 
            />
          </div>
          <img 
            src="/logo-text.png" 
            alt="Corterion" 
            className={`h-5 md:h-6 w-auto object-contain transition-all duration-500 shrink-0 ${scrolled || mobileMenuOpen ? '' : 'brightness-0 invert'}`} 
            onError={(e) => { e.currentTarget.style.display = 'none'; }} 
          />
        </Link>
        
        {/* DESKTOP TASK BAR / NAVIGATION */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/" className={`text-sm font-semibold tracking-wide transition-colors ${scrolled ? 'text-slate-600 hover:text-corterion-navy' : 'text-white/80 hover:text-white'}`}>
            Home
          </Link>
          <Link href="/about" className={`text-sm font-semibold tracking-wide transition-colors ${scrolled ? 'text-slate-600 hover:text-corterion-navy' : 'text-white/80 hover:text-white'}`}>
            About Us
          </Link>
          <div className="group relative">
            <span className={`text-sm font-semibold tracking-wide transition-colors cursor-pointer pb-2 ${scrolled ? 'text-slate-600 hover:text-corterion-navy' : 'text-white/80 hover:text-white'}`}>
              Products
            </span>
            <div className="absolute top-full left-0 mt-2 w-48 py-2 rounded-xl bg-white border border-black/5 shadow-xl opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all">
              <Link href="/scalpx" className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-corterion-navy hover:bg-slate-50">ScalpX™</Link>
              <Link href="/skinx" className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-corterion-navy hover:bg-slate-50">SkinX™</Link>
            </div>
          </div>
          <Link href="/contact" className={`text-sm font-semibold tracking-wide transition-colors ${scrolled ? 'text-slate-600 hover:text-corterion-navy' : 'text-white/80 hover:text-white'}`}>
            Contact Us
          </Link>
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <Link href="/request-demo">
            <button className={`relative overflow-hidden group px-6 py-3 rounded-full border transition-all duration-300 ${
              scrolled 
                ? 'border-corterion-navy bg-corterion-navy text-white hover:bg-transparent hover:text-corterion-navy'
                : 'border-white bg-white text-corterion-navy hover:bg-transparent hover:text-white'
            }`}>
              <span className="relative z-10 flex items-center gap-2 text-sm font-bold tracking-wide transition-colors">
                Request Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
          className="md:hidden p-2 z-50 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className={`w-6 h-6 ${scrolled || mobileMenuOpen ? 'text-corterion-navy' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? 'text-corterion-navy' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* MOBILE FULL-SCREEN MENU OVERLAY */}
      <div 
        className={`md:hidden fixed inset-0 top-0 left-0 w-full h-[100dvh] bg-white transition-transform duration-500 ease-in-out z-40 ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 pb-20 pt-24 overflow-y-auto">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-serif text-corterion-navy">
            Home
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-serif text-corterion-navy">
            About Us
          </Link>
          
          <div className="flex flex-col items-center gap-5 mt-4">
            <span className="text-sm font-bold tracking-widest text-slate-400 uppercase">Products</span>
            <Link href="/scalpx" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-serif text-corterion-navy">ScalpX™</Link>
            <Link href="/skinx" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-serif text-corterion-navy">SkinX™</Link>
          </div>
          
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-serif text-corterion-navy mt-4">
            Contact Us
          </Link>
          
          <div className="w-full max-w-xs h-px bg-slate-100 my-6" />
          
          <Link href="/request-demo" onClick={() => setMobileMenuOpen(false)} className="w-full max-w-xs">
            <button className="w-full py-4 rounded-full bg-corterion-navy text-white font-bold tracking-wide flex items-center justify-center gap-2 shadow-xl shadow-corterion-navy/20 active:scale-95 transition-transform">
              Request Demo <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
