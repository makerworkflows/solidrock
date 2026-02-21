import ROICalculator from "@/components/ROICalculator";
import { ArrowRight, BarChart3, Globe2, ShieldCheck, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-900 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-black font-bold flex items-center justify-center rounded-sm">S</div>
            <span className="font-bold text-xl tracking-tight text-white">SOLID ROCK</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
            <a href="#roi" className="hover:text-white transition-colors">ROI Calculator</a>
            <a href="#services" className="hover:text-white transition-colors">Framework</a>
          </div>
          <a href="#roi" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors">
            Calculate Savings
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden bg-black">
        <div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black -z-10 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 text-sm font-medium mb-4">
            <Globe2 className="w-4 h-4 text-white" /> 
            <span>Bilingual RGV-Mexico Cross-Border Consulting</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">Excellence Through</span><br />
            Continuous Improvement
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            The defining operational excellence firm for the Rio Grande Valley. Led by Ricardo D. Luis, Black Belt III. We turn process friction into quantifiable ROI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a href="#roi" className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/20">
              Calculate Your ROI <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#services" className="w-full sm:w-auto px-8 py-4 rounded-full border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900 mx-auto transition-all font-medium flex items-center justify-center gap-2 text-zinc-300">
              Explore Our Framework
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section id="expertise" className="py-24 px-6 border-y border-zinc-900 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-colors">
              <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Quantified Returns</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We lead with data. Historical metrics dictate a median operational payback of <strong className="text-white">$150,000 per year</strong> for successful organizational Black Belt projects.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-colors">
              <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center mb-6">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">The Cross-Border Moat</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Fully bilingual and bicultural. We execute strategy seamlessly across U.S. and Mexican operations (McAllen, Pharr, Reynosa, Matamoros).
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-colors">
              <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Black Belt III Mastery</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Led by an Industrial Engineer with the highest practitioner credential. We don't just train frameworks, we forge measurable, lasting change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="roi" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Data-Driven Execution. <br/><span className="text-zinc-600">Not Just Theory.</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Input your operational metrics below to estimate the annual financial recovery potential of a Lean Six Sigma implementation.</p>
          </div>
          
          <ROICalculator />
        </div>
      </section>

      {/* Services Framework */}
      <section id="services" className="py-32 px-6 bg-black border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">The Implementation Framework</h2>
            <p className="text-zinc-400 max-w-2xl">A layered service model designed to scale from initial training to C-suite retained advisory.</p>
          </div>

          <div className="space-y-4">
            {[
              { title: "Tier 1: Training & Certification", desc: "Yellow Belt and Green Belt workshops tailored for front-line teams." },
              { title: "Tier 2: Project Consulting", desc: "DMAIC-based project engagements with defined deliverables and ROI measurement." },
              { title: "Tier 3: Retained Advisory", desc: "Ongoing continuous improvement leadership tracking KPIs and coaching internal champions." },
              { title: "Tier 4: Executive Coaching", desc: "C-suite strategic sessions on building a lasting culture of operational excellence." }
            ].map((service, i) => (
              <div key={i} className="group p-6 md:p-8 rounded-2xl border border-zinc-900 bg-zinc-950 hover:border-zinc-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{service.title}</h3>
                  <p className="text-zinc-400 text-sm md:text-base max-w-3xl">{service.desc}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white text-black group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-12 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white text-black font-bold flex items-center justify-center rounded-sm text-xs">S</div>
            <span className="font-bold tracking-tight text-white">SOLID ROCK</span>
          </div>
          <p className="text-zinc-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Solid Rock Lean Six Sigma. Edinburg, Texas.<br />
            Built for the Rio Grande Valley & Mexico Manufacturing Sector.
          </p>
        </div>
      </footer>
    </main>
  );
}
