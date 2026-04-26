import { RevealText } from "@/components/animations/RevealText";

export default function RequestDemoPage() {
  return (
    <div className="flex flex-col w-full flex-1">
      <section className="relative w-full flex-1 flex flex-col items-center justify-center overflow-hidden bg-slate-50 py-20 border-t border-black/5">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
        
        <div className="container relative z-10 mx-auto px-6 max-w-2xl text-center">
          <RevealText>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-corterion-navy mb-6">
              Request a <span className="text-corterion-cyan font-sans">Demo</span>
            </h1>
            <p className="text-slate-600 font-medium mb-12">
              Experience the certainty of our AI-powered diagnostic systems. Leave your details below and our clinical team will contact you.
            </p>
          </RevealText>
          
          <RevealText delay={200}>
            <form className="glass p-8 rounded-2xl border border-black/5 flex flex-col gap-6 text-left shadow-2xl shadow-black/5">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">First Name</label>
                  <input type="text" className="w-full bg-white border border-black/10 rounded-lg p-3 text-corterion-navy focus:outline-none focus:border-corterion-cyan focus:ring-1 focus:ring-corterion-cyan transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Last Name</label>
                  <input type="text" className="w-full bg-white border border-black/10 rounded-lg p-3 text-corterion-navy focus:outline-none focus:border-corterion-cyan focus:ring-1 focus:ring-corterion-cyan transition-all" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Work Email</label>
                <input type="email" className="w-full bg-white border border-black/10 rounded-lg p-3 text-corterion-navy focus:outline-none focus:border-corterion-cyan focus:ring-1 focus:ring-corterion-cyan transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Organization / Clinic</label>
                <input type="text" className="w-full bg-white border border-black/10 rounded-lg p-3 text-corterion-navy focus:outline-none focus:border-corterion-cyan focus:ring-1 focus:ring-corterion-cyan transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">System of Interest</label>
                <select className="w-full bg-white border border-black/10 rounded-lg p-3 text-corterion-navy focus:outline-none focus:border-corterion-cyan focus:ring-1 focus:ring-corterion-cyan transition-all appearance-none cursor-pointer">
                  <option>ScalpX™</option>
                  <option>SkinX™</option>
                  <option>Both / Platform</option>
                </select>
              </div>
              <button type="submit" className="w-full mt-4 py-4 rounded-xl bg-corterion-cyan text-corterion-navy font-bold tracking-wide hover:bg-black hover:text-white transition-colors shadow-xl shadow-corterion-cyan/20">
                Submit Request
              </button>
            </form>
          </RevealText>
        </div>
      </section>
    </div>
  );
}
