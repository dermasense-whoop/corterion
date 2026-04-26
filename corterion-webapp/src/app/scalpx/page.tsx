import { RevealText } from "@/components/animations/RevealText";
import { ArrowRight, Waves, Zap, Database } from "lucide-react";
import Link from "next/link";

export default function ScalpxPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* IMMERSIVE HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-corterion-navy-dark pt-24 pb-32">
        <div className="absolute inset-0 z-0 opacity-80">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-corterion-navy-light via-corterion-navy to-black" />
           <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 text-center mt-10 max-w-4xl">
          <RevealText>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-corterion-cyan/30 bg-corterion-cyan/10 text-corterion-cyan text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
              Scalp Intelligence
            </div>
          </RevealText>
          <RevealText delay={200}>
            <h1 className="font-serif text-6xl md:text-8xl text-white mb-6 tracking-tight leading-none drop-shadow-2xl">
              ScalpX™
            </h1>
          </RevealText>
          <RevealText delay={400}>
            <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed mb-10 max-w-2xl mx-auto drop-shadow-md">
              The first clinical-grade diagnostic system engineered specifically for high-fidelity scalp and follicle analysis.
            </p>
          </RevealText>
        </div>
      </section>

      {/* OVERLAPPING CTA BAR */}
      <section className="relative z-20 container mx-auto px-6 -mt-12">
        <RevealText delay={600}>
          <div className="bg-white rounded-t-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border border-black/5 overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between p-8 md:p-10">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="font-serif text-3xl text-corterion-navy mb-2">Experience ScalpX™</h3>
              <p className="text-slate-600 font-medium">Book a clinical demonstration with our engineering team.</p>
            </div>
            <Link href="/request-demo">
              <button className="px-10 py-4 bg-corterion-cyan text-corterion-navy font-bold rounded-full hover:bg-black hover:text-white transition-colors shadow-xl shadow-corterion-cyan/20 shrink-0">
                Request Demo
              </button>
            </Link>
          </div>
        </RevealText>
      </section>

      {/* ZIG-ZAG EDITORIAL SECTIONS */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col gap-32">
          
          {/* Section 1: Density Mapping (Text Left, Image Right) */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 order-2 md:order-1">
              <RevealText>
                <div className="w-16 h-16 rounded-2xl bg-corterion-cyan/10 border border-corterion-cyan/20 flex items-center justify-center mb-8 shadow-sm">
                  <Waves className="w-8 h-8 text-corterion-cyan" />
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl text-corterion-navy mb-6 leading-tight">
                  Unprecedented Density Mapping
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                  Quantify follicle density per square centimeter with 99.8% AI accuracy. Our multi-spectral imaging captures cellular-level detail, allowing the ScalpX neural network to isolate and count active follicles in milliseconds.
                </p>
                <div className="w-full h-px bg-black/10" />
              </RevealText>
            </div>
            <div className="flex-1 order-1 md:order-2 w-full">
              <RevealText delay={200}>
                {/* Image Placeholder */}
                <div className="w-full aspect-[4/5] rounded-3xl bg-slate-100 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-serif text-xl italic group-hover:scale-105 transition-transform duration-700">
                    [ Clinical Density Map Image ]
                  </div>
                </div>
              </RevealText>
            </div>
          </div>

          {/* Section 2: Inflammation (Image Left, Text Right) */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 order-1 w-full">
              <RevealText>
                {/* Image Placeholder */}
                <div className="w-full aspect-[4/5] rounded-3xl bg-corterion-navy/5 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-corterion-cyan/10 to-transparent opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-serif text-xl italic group-hover:scale-105 transition-transform duration-700">
                    [ Micro-Inflammation Scan ]
                  </div>
                </div>
              </RevealText>
            </div>
            <div className="flex-1 order-2">
              <RevealText delay={200}>
                <div className="w-16 h-16 rounded-2xl bg-corterion-cyan/10 border border-corterion-cyan/20 flex items-center justify-center mb-8 shadow-sm">
                  <Zap className="w-8 h-8 text-corterion-cyan" />
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl text-corterion-navy mb-6 leading-tight">
                  Detect Invisible Inflammation
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                  Identify micro-inflammation and erythema completely invisible to the naked eye. By analyzing sub-surface vascularity, ScalpX predicts hair miniaturization before structural loss occurs.
                </p>
                <div className="w-full h-px bg-black/10" />
              </RevealText>
            </div>
          </div>

          {/* Section 3: Longitudinal (Text Left, Image Right) */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 order-2 md:order-1">
              <RevealText>
                <div className="w-16 h-16 rounded-2xl bg-corterion-cyan/10 border border-corterion-cyan/20 flex items-center justify-center mb-8 shadow-sm">
                  <Database className="w-8 h-8 text-corterion-cyan" />
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl text-corterion-navy mb-6 leading-tight">
                  Absolute Treatment Tracking
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                  Track treatment efficacy over time with exact visual and data matching. Our spatial alignment algorithms ensure that baseline and follow-up scans are compared with micrometer precision.
                </p>
                <div className="w-full h-px bg-black/10" />
              </RevealText>
            </div>
            <div className="flex-1 order-1 md:order-2 w-full">
              <RevealText delay={200}>
                {/* Image Placeholder */}
                <div className="w-full aspect-[4/5] rounded-3xl bg-slate-100 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-serif text-xl italic group-hover:scale-105 transition-transform duration-700">
                    [ Longitudinal Data Graph ]
                  </div>
                </div>
              </RevealText>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
