import { RevealText } from "@/components/animations/RevealText";

export default function RequestDemoPage() {
  return (
    <div className="flex flex-col w-full flex-1">
      <section className="relative w-full flex-1 flex flex-col items-center justify-center overflow-hidden bg-corterion-navy-dark py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-corterion-navy-dark via-corterion-navy to-corterion-navy-dark" />
        
        <div className="container relative z-10 mx-auto px-6 max-w-2xl text-center">
          <RevealText>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Request a <span className="text-corterion-cyan">Demo</span>
            </h1>
            <p className="text-corterion-slate/80 mb-12">
              Experience the certainty of our AI-powered diagnostic systems. Leave your details below and our clinical team will contact you.
            </p>
          </RevealText>
          
          <RevealText delay={200}>
            <form className="glass p-8 rounded-2xl border border-white/5 flex flex-col gap-6 text-left">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-corterion-slate uppercase tracking-wider">First Name</label>
                  <input type="text" className="w-full bg-corterion-navy border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-corterion-cyan transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-corterion-slate uppercase tracking-wider">Last Name</label>
                  <input type="text" className="w-full bg-corterion-navy border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-corterion-cyan transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-corterion-slate uppercase tracking-wider">Work Email</label>
                <input type="email" className="w-full bg-corterion-navy border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-corterion-cyan transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-corterion-slate uppercase tracking-wider">Organization / Clinic</label>
                <input type="text" className="w-full bg-corterion-navy border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-corterion-cyan transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-corterion-slate uppercase tracking-wider">System of Interest</label>
                <select className="w-full bg-corterion-navy border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-corterion-cyan transition-colors appearance-none">
                  <option>ScalpX™</option>
                  <option>SkinX™</option>
                  <option>Both / Platform</option>
                </select>
              </div>
              <button type="submit" className="w-full mt-4 py-4 rounded-xl bg-corterion-cyan text-corterion-navy font-bold tracking-wide hover:bg-white transition-colors">
                Submit Request
              </button>
            </form>
          </RevealText>
        </div>
      </section>
    </div>
  );
}
