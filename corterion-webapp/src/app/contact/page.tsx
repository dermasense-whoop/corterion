import { RevealText } from "@/components/animations/RevealText";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full flex-1">
      <section className="relative w-full flex-1 flex flex-col items-center justify-center overflow-hidden bg-corterion-navy py-32">
        <div className="container relative z-10 mx-auto px-6 max-w-2xl text-center">
          <RevealText>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact <span className="text-corterion-cyan">Us</span>
            </h1>
            <p className="text-corterion-slate/80 mb-12">
              Have questions about our systems or interested in clinical partnerships? Reach out to our team.
            </p>
          </RevealText>
          <RevealText delay={200}>
            <div className="glass p-10 rounded-2xl border border-white/5 flex flex-col gap-6 text-left">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-corterion-slate uppercase tracking-wider">Email Address</label>
                <div className="text-white font-medium">contact@corterion.com</div>
              </div>
              <div className="w-full h-px bg-white/10" />
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-corterion-slate uppercase tracking-wider">Headquarters</label>
                <div className="text-white font-medium">Global Medical Hub</div>
              </div>
            </div>
          </RevealText>
        </div>
      </section>
    </div>
  );
}
