import { RevealText } from "@/components/animations/RevealText";
import { RiveWrapper } from "@/components/animations/RiveWrapper";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ScalpxPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-corterion-navy-dark pt-20">
        <div className="absolute inset-0 z-0 opacity-40">
           {/* Fallback to abstract loop if ScalpX specific isn't available */}
           {/* <RiveWrapper src="/path-to-scalpx-animation.riv" /> */}
           <div className="absolute inset-0 bg-gradient-to-b from-corterion-navy-dark/80 via-transparent to-corterion-navy" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl">
            <RevealText>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                ScalpX™ <br/>
                <span className="text-corterion-cyan font-light tracking-wide text-3xl md:text-5xl">Hair & Scalp Intelligence System</span>
              </h1>
            </RevealText>
            <RevealText delay={200}>
              <p className="text-xl text-corterion-slate/80 leading-relaxed mb-10">
                Clinical-grade scalp diagnostics detecting thinning, follicle density, and inflammation for real-world use. Certainty in every scan.
              </p>
            </RevealText>
            <RevealText delay={400}>
              <button className="px-8 py-4 bg-corterion-cyan text-corterion-navy font-bold tracking-wide hover:bg-white transition-colors inline-flex items-center gap-2">
                Request ScalpX Demo <ArrowRight className="w-4 h-4" />
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
                <h4 className="text-3xl font-bold text-white mb-4">Subjective Analysis</h4>
                <p className="text-corterion-slate/80 leading-relaxed">
                  Traditional scalp analysis relies heavily on subjective visual inspection, leading to inconsistent diagnoses and delayed intervention for hair thinning and inflammatory conditions.
                </p>
              </div>
            </RevealText>
            
            <RevealText delay={200}>
              <div className="p-10 rounded-2xl border border-corterion-cyan/20 bg-corterion-cyan/5 relative overflow-hidden h-full">
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-corterion-cyan/20 blur-3xl rounded-full" />
                <h3 className="text-sm font-bold tracking-[0.2em] text-corterion-cyan uppercase mb-4">The ScalpX Solution</h3>
                <h4 className="text-3xl font-bold text-white mb-4">Quantifiable Precision</h4>
                <p className="text-corterion-slate/80 leading-relaxed">
                  ScalpX utilizes multi-spectral imaging and deep learning to quantify follicle density, gauge hair shaft thickness, and detect micro-inflammation before it becomes clinically visible.
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
                title: "Density Mapping",
                desc: "AI calculates exact follicular units per square centimeter across different scalp zones."
              },
              {
                title: "Inflammation Detection",
                desc: "Identifies erythema and perifollicular scaling that indicates underlying scalp conditions."
              },
              {
                title: "Longitudinal Tracking",
                desc: "Matches identical scalp regions over time to objectively measure treatment efficacy."
              }
            ].map((feature, idx) => (
              <RevealText key={idx} delay={idx * 200}>
                <div className="glass p-8 rounded-2xl h-full border border-corterion-cyan/10 hover:border-corterion-cyan/30 transition-colors">
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
              { title: "Clinical Dermatology", desc: "Integrates directly into EHR systems for seamless patient intake." },
              { title: "Specialized Hair Clinics", desc: "Provides concrete data to patients to justify treatment plans." },
              { title: "Remote Diagnostics", desc: "Portable imaging systems enabling decentralized care delivery." }
            ].map((useCase, idx) => (
              <RevealText key={idx} delay={idx * 150}>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-corterion-navy-light/50 border border-corterion-cyan/5">
                  <CheckCircle2 className="w-6 h-6 text-corterion-cyan shrink-0" />
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
