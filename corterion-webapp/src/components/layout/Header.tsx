"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-sm py-0" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 h-24 flex items-center justify-between transition-all duration-500">
        
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-12 h-12 flex items-center justify-center transition-all duration-500">
            {/* Fallback styling just in case the image is missing */}
            <div className={`absolute inset-0 rounded-full blur transition-colors duration-500 ${scrolled ? 'bg-black/5 group-hover:bg-corterion-cyan/10' : 'bg-white/10 group-hover:bg-white/20'}`} />
            <img 
              src="/logo-icon.png" 
              alt="Corterion Icon" 
              className={`w-10 h-10 object-contain relative z-10 transition-all duration-500 ${scrolled ? '' : 'brightness-0 invert'}`} 
              onError={(e) => { e.currentTarget.style.display = 'none'; }} 
            />
          </div>
          <img 
            src="/logo-text.png" 
            alt="Corterion" 
            className={`h-6 w-auto object-contain transition-all duration-500 ${scrolled ? '' : 'brightness-0 invert'}`} 
            onError={(e) => { e.currentTarget.style.display = 'none'; }} 
          />
        </Link>
        
        {/* TASK BAR / NAVIGATION */}
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

        {/* CTA */}
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
    </header>
  );
}
