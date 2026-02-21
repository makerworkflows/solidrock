import ROICalculator from "@/components/ROICalculator";
import { ArrowRight, BarChart3, Globe2, ShieldCheck, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#B6D4FF]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 border-b border-slate-100 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#001745] text-white font-black flex items-center justify-center rounded-sm text-lg">S</div>
            <span className="font-bold text-xl tracking-tight text-[#001745]">SOLID ROCK</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-500">
            <a href="#expertise" className="hover:text-[#001745] transition-colors">EXPERTISE</a>
            <a href="#roi" className="hover:text-[#001745] transition-colors">ROI CALCULATOR</a>
            <a href="#services" className="hover:text-[#001745] transition-colors">FRAMEWORK</a>
          </div>
          <a href="#roi" className="bg-[#B6D4FF] text-[#001745] px-6 py-3 rounded-md text-sm font-bold tracking-wide hover:bg-[#a6c7f5] transition-colors">
            Calculate Savings
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-40 px-6 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg-light.png')" }}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        
        <div className="max-w-5xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/20 bg-black/40 text-white text-sm font-bold tracking-widest uppercase mb-4">
            <Globe2 className="w-4 h-4 text-[#B6D4FF]" /> 
            <span>Bilingual RGV-Mexico Cross-Border Consulting</span>
          </div>
          
          <h1 className="text-5xl md:text-[64px] font-black tracking-tighter text-white leading-[1.05]">
            Operational Excellence <br />
            Constructed Daily.
          </h1>
          
          <p className="text-xl text-slate-200 max-w-2xl leading-relaxed font-medium">
            The defining operational excellence firm for the Rio Grande Valley. Led by Ricardo D. Luis, Black Belt III. We turn process friction into quantifiable ROI.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-8">
            <a href="#roi" className="w-full sm:w-auto px-10 py-5 rounded-lg bg-[#001745] hover:bg-[#001033] text-white text-lg font-bold flex items-center justify-center gap-2 transition-all shadow-2xl">
              Calculate Your ROI <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#services" className="w-full sm:w-auto px-10 py-5 rounded-lg bg-[#B6D4FF] hover:bg-[#a6c7f5] text-[#001745] text-lg font-bold transition-all flex items-center justify-center gap-2 shadow-2xl">
              Explore Our Framework
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section id="expertise" className="py-32 px-6 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-10 rounded-xl bg-white shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#B6D4FF]/20 text-[#001745] rounded-xl flex items-center justify-center mb-8">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-[#001745]">Quantified Returns</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                We lead with data. Historical metrics dictate a median operational payback of <strong className="text-[#001745] bg-[#B6D4FF]/30 px-1 rounded">$150,000 per year</strong> for successful organizational Black Belt projects.
              </p>
              <span className="inline-flex items-center text-[#001745] font-bold text-sm tracking-wide group cursor-pointer hover:underline">
                LEARN MORE <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

            <div className="p-10 rounded-xl bg-white shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#B6D4FF]/20 text-[#001745] rounded-xl flex items-center justify-center mb-8">
                <Globe2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-[#001745]">The Cross-Border Moat</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Fully bilingual and bicultural. We execute strategy seamlessly across U.S. and Mexican operations (McAllen, Pharr, Reynosa, Matamoros).
              </p>
              <span className="inline-flex items-center text-[#001745] font-bold text-sm tracking-wide group cursor-pointer hover:underline">
                LEARN MORE <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

            <div className="p-10 rounded-xl bg-white shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden">
              <div className="w-16 h-16 bg-[#B6D4FF]/20 text-[#001745] rounded-xl flex items-center justify-center mb-8">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-[#001745]">Black Belt III Mastery</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Led by an Industrial Engineer with the highest practitioner credential. We don't just train frameworks, we forge measurable, lasting change.
              </p>
              <span className="inline-flex items-center text-[#001745] font-bold text-sm tracking-wide group cursor-pointer hover:underline">
                LEARN MORE <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="roi" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-[56px] leading-[1.1] font-black tracking-tight text-[#001745]">Data-Driven Execution. <br/><span className="text-slate-400">Not Just Theory.</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Input your operational metrics below to estimate the annual financial recovery potential of a Lean Six Sigma implementation.</p>
          </div>
          
          <ROICalculator />
        </div>
      </section>

      {/* Services Framework */}
      <section id="services" className="py-32 px-6 bg-[#001745]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-[56px] leading-[1.1] font-black tracking-tight mb-6 text-white">The Implementation Framework</h2>
            <p className="text-[#B6D4FF] max-w-2xl mx-auto text-lg font-bold">A layered service model designed to scale from initial training to C-suite retained advisory.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Tier 1: Training & Certification", desc: "Yellow Belt and Green Belt workshops tailored for front-line teams." },
              { title: "Tier 2: Project Consulting", desc: "DMAIC-based project engagements with defined deliverables and ROI measurement." },
              { title: "Tier 3: Retained Advisory", desc: "Ongoing continuous improvement leadership tracking KPIs and coaching internal champions." },
              { title: "Tier 4: Executive Coaching", desc: "C-suite strategic sessions on building a lasting culture of operational excellence." }
            ].map((service, i) => (
              <div key={i} className="group p-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col justify-between cursor-pointer">
                <div>
                  <h3 className="text-2xl font-black mb-4 text-white group-hover:text-[#B6D4FF] transition-colors">{service.title}</h3>
                  <p className="text-slate-300 text-base mb-8">{service.desc}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-[#B6D4FF] text-[#001745] flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-[#001033]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-[#001745] font-black flex items-center justify-center rounded-sm text-lg">S</div>
            <span className="font-bold text-xl tracking-tight text-white">SOLID ROCK</span>
          </div>
          <p className="text-[#B6D4FF] text-sm text-center md:text-right font-medium leading-relaxed">
            © {new Date().getFullYear()} Solid Rock Lean Six Sigma. Edinburg, Texas.<br />
            Built for the Rio Grande Valley & Mexico Manufacturing Sector.
          </p>
        </div>
      </footer>
    </main>
  );
}
