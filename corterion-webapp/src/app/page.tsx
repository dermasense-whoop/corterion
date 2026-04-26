import { RevealText } from "@/components/animations/RevealText";
import { RiveWrapper } from "@/components/animations/RiveWrapper";
import { ArrowRight, Activity, Cpu, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Rive Animation (Abstract Tech/Pulse Placeholder) */}
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen">
           {/* TODO: Add your custom Corterion .riv file here to replace the CSS fallback */}
           {/* <RiveWrapper src="/path-to-your-animation.riv" /> */}
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-corterion-navy/50 to-corterion-navy" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
          <RevealText delay={200}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-corterion-cyan/30 bg-corterion-cyan/5 text-corterion-cyan text-xs font-semibold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-corterion-cyan animate-pulse" />
              Diagnostic Systems V1
            </div>
          </RevealText>
          
          <RevealText delay={400}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
              Certainty, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-corterion-cyan to-blue-500">
                Engineered.
              </span>
            </h1>
          </RevealText>
          
          <RevealText delay={600}>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-corterion-slate/80 font-light leading-relaxed mb-10">
              AI-powered diagnostic systems built for precision, early detection, and scalable healthcare delivery. We build the MedTech infrastructure of tomorrow.
            </p>
          </RevealText>
          
          <RevealText delay={800}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="px-8 py-4 bg-corterion-cyan text-corterion-navy font-bold tracking-wide hover:bg-white transition-colors flex items-center gap-2">
                Explore Technology <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 bg-transparent border border-corterion-slate/20 text-white font-medium hover:bg-corterion-slate/10 transition-colors">
                Clinical Research
              </button>
            </div>
          </RevealText>
        </div>
      </section>

      {/* PRODUCT ECOSYSTEM */}
      <section className="py-24 bg-corterion-navy-dark relative border-t border-corterion-cyan/10">
        <div className="container mx-auto px-6">
          <RevealText>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
              The <span className="text-corterion-cyan">Platform</span> Ecosystem
            </h2>
          </RevealText>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* ScalpX Card */}
            <RevealText delay={200}>
              <Link href="/scalpx" className="block group">
                <div className="glass rounded-2xl p-10 h-full hover:border-corterion-cyan/50 transition-colors relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-corterion-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-corterion-cyan/10 transition-colors" />
                  <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    ScalpX™ <ArrowRight className="w-6 h-6 text-corterion-cyan group-hover:translate-x-2 transition-transform" />
                  </h3>
                  <p className="text-corterion-slate/70 mb-8 leading-relaxed">
                    Hair & Scalp Intelligence System. Clinical-grade scalp diagnostics detecting thinning, follicle density, and inflammation for real-world use.
                  </p>
                  <ul className="space-y-3">
                    {["Imaging", "AI Analysis", "Sensor Diagnostics"].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-corterion-slate">
                        <div className="w-1.5 h-1.5 bg-corterion-cyan rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </RevealText>

            {/* SkinX Card */}
            <RevealText delay={400}>
              <Link href="/skinx" className="block group">
                <div className="glass rounded-2xl p-10 h-full hover:border-blue-500/50 transition-colors relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors" />
                  <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    SkinX™ <ArrowRight className="w-6 h-6 text-blue-500 group-hover:translate-x-2 transition-transform" />
                  </h3>
                  <p className="text-corterion-slate/70 mb-8 leading-relaxed">
                    Dermatological Analysis System. AI-powered skin diagnostics targeting acne, pigmentation, and aging markers with unprecedented precision.
                  </p>
                  <ul className="space-y-3">
                    {["Pattern Recognition", "Texture Mapping", "AI Models"].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-corterion-slate">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </RevealText>
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="py-24 bg-corterion-navy relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <RevealText>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Built on Foundation</h2>
              <p className="text-corterion-slate max-w-2xl mx-auto">
                Our architecture combines physical imaging with localized neural networks to ensure zero-latency diagnostics at the edge.
              </p>
            </div>
          </RevealText>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Activity className="w-8 h-8 text-corterion-cyan" />,
                title: "Clinical Precision",
                desc: "Validated against industry gold-standards, ensuring data fidelity from capture to diagnostic output.",
              },
              {
                icon: <Cpu className="w-8 h-8 text-corterion-cyan" />,
                title: "Engineered Hardware",
                desc: "Custom sensor arrays and imaging modules built specifically for dermatological and trichological capture.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-corterion-cyan" />,
                title: "AI Intelligence",
                desc: "Proprietary neural networks analyzing thousands of micro-features instantly without cloud dependency.",
              },
            ].map((pillar, idx) => (
              <RevealText key={idx} delay={idx * 200}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-corterion-cyan/10 border border-corterion-cyan/20 flex items-center justify-center mb-6">
                    {pillar.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{pillar.title}</h4>
                  <p className="text-corterion-slate/70 leading-relaxed text-sm">
                    {pillar.desc}
                  </p>
                </div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden border-t border-corterion-cyan/10">
        <div className="absolute inset-0 bg-corterion-cyan/5" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <RevealText>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Build the future of <br/> diagnostics
            </h2>
            <button className="px-8 py-4 bg-white text-corterion-navy font-bold tracking-wide hover:bg-corterion-cyan transition-colors">
              Request Platform Demo
            </button>
          </RevealText>
        </div>
      </section>
    </div>
  );
}
