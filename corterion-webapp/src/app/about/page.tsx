import { RevealText } from "@/components/animations/RevealText";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full flex-1">
      <section className="relative w-full flex-1 flex flex-col items-center justify-center overflow-hidden bg-slate-50 py-32 border-t border-black/5">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
        
        <div className="container relative z-10 mx-auto px-6 max-w-3xl text-center">
          <RevealText>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-corterion-navy mb-6">
              About <span className="text-corterion-cyan font-sans">Corterion</span>
            </h1>
          </RevealText>
          <RevealText delay={200}>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
              We are a MedTech infrastructure company building intelligent diagnostic systems.
            </p>
          </RevealText>
          <RevealText delay={400}>
            <div className="glass p-10 rounded-3xl border border-black/5 text-left space-y-6 shadow-xl shadow-black/5">
              <p className="text-slate-600 font-medium leading-relaxed">
                Corterion was founded on the principle that precision diagnostics should not be confined to elite hospital labs. 
                Our mission is to engineer systems that deliver clinical-grade analysis at the edge, scaling healthcare delivery globally.
              </p>
              <p className="text-slate-600 font-medium leading-relaxed">
                By integrating proprietary multi-spectral imaging with localized neural networks, we eliminate latency and subjectivity, providing physicians with quantifiable data to base their treatment plans on.
              </p>
            </div>
          </RevealText>
        </div>
      </section>
    </div>
  );
}
