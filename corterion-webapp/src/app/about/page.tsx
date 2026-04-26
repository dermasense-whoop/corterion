import { RevealText } from "@/components/animations/RevealText";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full flex-1">
      <section className="relative w-full flex-1 flex flex-col items-center justify-center overflow-hidden bg-corterion-navy-dark py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-corterion-navy-dark via-corterion-navy to-corterion-navy-dark" />
        
        <div className="container relative z-10 mx-auto px-6 max-w-3xl text-center">
          <RevealText>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-corterion-cyan">Corterion</span>
            </h1>
          </RevealText>
          <RevealText delay={200}>
            <p className="text-xl text-corterion-slate/80 leading-relaxed mb-10">
              We are a MedTech infrastructure company building intelligent diagnostic systems.
            </p>
          </RevealText>
          <RevealText delay={400}>
            <div className="glass p-10 rounded-3xl border border-white/5 text-left space-y-6">
              <p className="text-corterion-slate">
                Corterion was founded on the principle that precision diagnostics should not be confined to elite hospital labs. 
                Our mission is to engineer systems that deliver clinical-grade analysis at the edge, scaling healthcare delivery globally.
              </p>
              <p className="text-corterion-slate">
                By integrating proprietary multi-spectral imaging with localized neural networks, we eliminate latency and subjectivity, providing physicians with quantifiable data to base their treatment plans on.
              </p>
            </div>
          </RevealText>
        </div>
      </section>
    </div>
  );
}
