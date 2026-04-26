"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/40 backdrop-blur-3xl border-b border-corterion-cyan/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* LOGO SECTION - Ready for the user's uploaded images */}
        <Link href="/" className="flex items-center gap-4 group">
          {/* We use an image tag here so you get the exact logo and font you requested. 
              Please place your cropped icon as 'logo-icon.png' and the text as 'logo-text.png' in the public/ folder. */}
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Fallback styling just in case the image is missing */}
            <div className="absolute inset-0 bg-white/5 rounded-full blur group-hover:bg-corterion-cyan/10 transition-colors" />
            <img src="/logo-icon.png" alt="Corterion Icon" className="w-10 h-10 object-contain relative z-10" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          </div>
          <img src="/logo-text.png" alt="Corterion" className="h-6 w-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          
          {/* Text fallback if images fail to load */}
          <span className="text-2xl font-bold tracking-[0.25em] text-white leading-none absolute opacity-0">CORTERION</span>
        </Link>
        
        {/* TASK BAR / NAVIGATION */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-sm font-medium tracking-wide text-corterion-slate/80 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium tracking-wide text-corterion-slate/80 hover:text-white transition-colors">
            About Us
          </Link>
          <div className="group relative">
            <span className="text-sm font-medium tracking-wide text-corterion-slate/80 hover:text-white transition-colors cursor-pointer pb-2">
              Products
            </span>
            <div className="absolute top-full left-0 mt-2 w-48 py-2 rounded-xl bg-corterion-navy border border-white/10 shadow-2xl opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all">
              <Link href="/scalpx" className="block px-4 py-2 text-sm text-corterion-slate hover:text-white hover:bg-white/5">ScalpX™</Link>
              <Link href="/skinx" className="block px-4 py-2 text-sm text-corterion-slate hover:text-white hover:bg-white/5">SkinX™</Link>
            </div>
          </div>
          <Link href="/contact" className="text-sm font-medium tracking-wide text-corterion-slate/80 hover:text-white transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* CTA */}
        <Link href="/request-demo">
          <button className="relative overflow-hidden group px-6 py-3 rounded-full border border-corterion-cyan/30 bg-corterion-cyan/10 hover:bg-corterion-cyan transition-all duration-300">
            <span className="relative z-10 flex items-center gap-2 text-sm font-bold tracking-wide text-white group-hover:text-corterion-navy transition-colors">
              Request Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </Link>
      </div>
    </header>
  );
}
