import { RevealText } from "@/components/animations/RevealText";
import { HeroSlider } from "@/components/ui/HeroSlider";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* IMMERSIVE HERO SECTION WITH SLIDER */}
      <HeroSlider />

      {/* OVERLAPPING SEARCH / ACTION BAR */}
      <section className="relative z-20 container mx-auto px-6 -mt-12">
        <RevealText delay={200}>
          <div className="bg-white rounded-t-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border border-black/5 overflow-hidden max-w-4xl mx-auto">
            <div className="p-6 text-center border-b border-black/5">
              <h3 className="font-serif text-2xl text-corterion-navy">Find out more about Corterion</h3>
            </div>
            <div className="flex flex-col md:flex-row bg-slate-50 p-2">
              <div className="flex-1 flex items-center px-4 py-3 bg-white">
                <Search className="w-5 h-5 text-slate-400 mr-3" />
                <input 
                  type="text" 
                  placeholder="Define your Search..." 
                  className="w-full bg-transparent border-none outline-none text-corterion-navy placeholder:text-slate-400 font-medium"
                />
              </div>
              <button className="bg-[#D5CBB9] text-corterion-navy font-bold px-12 py-4 md:py-0 transition-colors hover:bg-[#c4b9a5]">
                Search
              </button>
            </div>
          </div>
        </RevealText>
      </section>

      {/* PORTRAIT CARD GRID SYSTEM */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          
          <RevealText>
            <div className="mb-12">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2 block">Discover</span>
              <h2 className="font-serif text-4xl md:text-5xl text-corterion-navy">Our diagnostic systems</h2>
              <p className="text-slate-600 font-medium mt-6 max-w-2xl leading-relaxed">
                Corterion has set itself the mission of offering precision diagnostics globally through the best of AI innovation in terms of accuracy, efficacy, and clinical safety. Here is a look at the platform.
              </p>
            </div>
          </RevealText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            
            {/* CARD 1: ScalpX */}
            <RevealText delay={200}>
              <Link href="/scalpx" className="block group h-[500px] relative rounded-2xl overflow-hidden cursor-pointer shadow-lg shadow-black/5 transition-transform duration-500 hover:-translate-y-4 hover:shadow-2xl">
                <div className="absolute inset-0 bg-corterion-cyan/10 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-corterion-navy/90 via-corterion-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full text-center">
                  <h3 className="font-serif text-2xl text-white mb-2">ScalpX™</h3>
                  <p className="text-white/80 text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Hair & Scalp Intelligence System
                  </p>
                </div>
              </Link>
            </RevealText>

            {/* CARD 2: SkinX */}
            <RevealText delay={400}>
              <Link href="/skinx" className="block group h-[500px] relative rounded-2xl overflow-hidden cursor-pointer shadow-lg shadow-black/5 mt-0 lg:mt-8 transition-transform duration-500 hover:-translate-y-4 hover:shadow-2xl">
                <div className="absolute inset-0 bg-blue-500/10 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-corterion-navy/90 via-corterion-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full text-center">
                  <h3 className="font-serif text-2xl text-white mb-2">SkinX™</h3>
                  <p className="text-white/80 text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Dermatological Analysis System
                  </p>
                </div>
              </Link>
            </RevealText>

            {/* CARD 3: Clinical Trials */}
            <RevealText delay={600}>
              <div className="block group h-[500px] relative rounded-2xl overflow-hidden cursor-pointer shadow-lg shadow-black/5 transition-transform duration-500 hover:-translate-y-4 hover:shadow-2xl">
                <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-corterion-navy/90 via-corterion-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full text-center">
                  <h3 className="font-serif text-2xl text-white mb-2">Clinical Trials</h3>
                  <p className="text-white/80 text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Read our latest peer-reviewed studies
                  </p>
                </div>
              </div>
            </RevealText>

            {/* CARD 4: Enterprise */}
            <RevealText delay={800}>
              <Link href="/contact" className="block group h-[500px] relative rounded-2xl overflow-hidden cursor-pointer shadow-lg shadow-black/5 mt-0 lg:mt-8 transition-transform duration-500 hover:-translate-y-4 hover:shadow-2xl">
                <div className="absolute inset-0 bg-slate-800 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full text-center">
                  <h3 className="font-serif text-2xl text-white mb-2">Enterprise Solutions</h3>
                  <p className="text-white/80 text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Scale diagnostics globally
                  </p>
                </div>
              </Link>
            </RevealText>

          </div>
        </div>
      </section>

      {/* ADDITIONAL CONTENT SECTION */}
      <section className="py-24 bg-slate-50 border-t border-black/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <RevealText>
            <h2 className="font-serif text-4xl text-corterion-navy mb-8">
              A commitment to precision.
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-10">
              Our architecture combines physical imaging with localized neural networks to ensure zero-latency diagnostics at the edge. We are redefining what is possible in MedTech.
            </p>
            <Link href="/request-demo">
              <button className="px-10 py-4 border border-corterion-navy text-corterion-navy font-bold tracking-wide hover:bg-corterion-navy hover:text-white transition-colors">
                Request Platform Demo
              </button>
            </Link>
          </RevealText>
        </div>
      </section>
    </div>
  );
}
