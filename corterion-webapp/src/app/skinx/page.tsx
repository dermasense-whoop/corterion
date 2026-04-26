import { RevealText } from "@/components/animations/RevealText";
import { RiveWrapper } from "@/components/animations/RiveWrapper";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function SkinxPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-corterion-navy-dark pt-20">
        <div className="absolute inset-0 z-0 opacity-40">
           {/* Fallback to abstract loop if SkinX specific isn't available */}
           {/* <RiveWrapper src="/path-to-skinx-animation.riv" /> */}
           <div className="absolute inset-0 bg-gradient-to-b from-corterion-navy-dark/80 via-transparent to-corterion-navy" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl">
            <RevealText>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                SkinX™ <br/>
                <span className="text-blue-500 font-light tracking-wide text-3xl md:text-5xl">Dermatological Analysis System</span>
              </h1>
            </RevealText>
            <RevealText delay={200}>
              <p className="text-xl text-corterion-slate/80 leading-relaxed mb-10">
                AI-powered skin diagnostics targeting acne, pigmentation, and aging markers with unprecedented precision and scalability.
              </p>
            </RevealText>
            <RevealText delay={400}>
              <button className="px-8 py-4 bg-blue-500 text-white font-bold tracking-wide hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center gap-2">
                Request SkinX Demo <ArrowRight className="w-4 h-4" />
              </button>
            </RevealText>
          </div>
        </div>
      </section>

      {/* PROBLEM & SOLUTION */}
      <section className="py-24 bg-corterion-navy relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <RevealText>
              <div className="p-10 rounded-2xl border border-red-500/10 bg-red-500/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl rounded-full" />
                <h3 className="text-sm font-bold tracking-[0.2em] text-red-400 uppercase mb-4">The Problem</h3>
                <h4 className="text-3xl font-bold text-white mb-4">Fragmented Diagnostics</h4>
                <p className="text-corterion-slate/80 leading-relaxed">
                  Skin assessments are typically qualitative, making it nearly impossible to accurately track minute changes in hyperpigmentation, vascularity, or acne severity over time.
                </p>
              </div>
            </RevealText>
            
            <RevealText delay={200}>
              <div className="p-10 rounded-2xl border border-blue-500/20 bg-blue-500/5 relative overflow-hidden h-full">
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/20 blur-3xl rounded-full" />
                <h3 className="text-sm font-bold tracking-[0.2em] text-blue-400 uppercase mb-4">The SkinX Solution</h3>
                <h4 className="text-3xl font-bold text-white mb-4">Parametric Analysis</h4>
                <p className="text-corterion-slate/80 leading-relaxed">
                  SkinX applies computer vision and topological mapping to isolate specific dermatological features, providing an objective, clinical-grade baseline for every patient.
                </p>
              </div>
            </RevealText>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-corterion-navy-dark border-t border-corterion-cyan/10">
        <div className="container mx-auto px-6">
          <RevealText>
            <h2 className="text-4xl font-bold text-white text-center mb-16">Core Capabilities</h2>
          </RevealText>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Topological Mapping",
                desc: "Creates a high-fidelity 3D mesh of the facial surface to measure pore depth and texture variations."
              },
              {
                title: "Pigmentation Analysis",
                desc: "Isolates melanin and hemoglobin layers to detect subsurface sun damage and vascular lesions."
              },
              {
                title: "Acne Classification",
                desc: "Automatically grades acne severity by identifying and classifying individual comedones, papules, and pustules."
              }
            ].map((feature, idx) => (
              <RevealText key={idx} delay={idx * 200}>
                <div className="glass p-8 rounded-2xl h-full border border-blue-500/10 hover:border-blue-500/30 transition-colors">
                  <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
                  <p className="text-sm text-corterion-slate/70 leading-relaxed">{feature.desc}</p>
                </div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 bg-corterion-navy">
        <div className="container mx-auto px-6 max-w-4xl">
          <RevealText>
            <h2 className="text-3xl font-bold text-white mb-10">Deployment Scenarios</h2>
          </RevealText>
          <div className="space-y-4">
            {[
              { title: "Aesthetic Clinics", desc: "Showcases objective improvements to patients post-treatment." },
              { title: "Tele-Dermatology", desc: "Allows remote triage of skin conditions with clinical-grade image processing." },
              { title: "Clinical Trials", desc: "Standardized, highly accurate endpoints for dermatological drug testing." }
            ].map((useCase, idx) => (
              <RevealText key={idx} delay={idx * 150}>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-corterion-navy-light/50 border border-blue-500/5">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{useCase.title}</h4>
                    <p className="text-corterion-slate/70 text-sm">{useCase.desc}</p>
                  </div>
                </div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
