import { RevealText } from "@/components/animations/RevealText";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full flex-1">
      <section className="relative w-full flex-1 flex flex-col items-center justify-center overflow-hidden bg-white py-32 border-t border-black/5">
        <div className="container relative z-10 mx-auto px-6 max-w-2xl text-center">
          <RevealText>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-corterion-navy mb-6">
              Contact <span className="text-corterion-cyan font-sans">Us</span>
            </h1>
            <p className="text-slate-600 font-medium mb-12">
              Have questions about our systems or interested in clinical partnerships? Reach out to our team.
            </p>
          </RevealText>
          <RevealText delay={200}>
            <div className="glass p-10 rounded-2xl border border-black/5 flex flex-col gap-6 text-left shadow-2xl shadow-black/5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                <div className="text-corterion-navy font-bold text-lg">contact@corterion.com</div>
              </div>
              <div className="w-full h-px bg-black/5" />
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Headquarters</label>
                <div className="text-corterion-navy font-bold text-lg">Global Medical Hub</div>
              </div>
            </div>
          </RevealText>
        </div>
      </section>
    </div>
  );
}
