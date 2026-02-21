'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ROICalculator() {
  const [industry, setIndustry] = useState('Manufacturing');
  const [wasteRate, setWasteRate] = useState(5);
  const [revenue, setRevenue] = useState(5000000);
  const [submitted, setSubmitted] = useState(false);

  // Heuristic calculation: Waste rate * Revenue * 0.4 (assuming a 40% recovery rate on a LSS project)
  // Plus we anchor to the TMAC median of $150k
  const calculatedSavings = Math.max(150000, (wasteRate / 100) * revenue * 0.4);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send to an API here
  };

  if (submitted) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-10 max-w-xl mx-auto text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-[#B6D4FF]/20 rounded-full blur-3xl -z-10 animate-pulse" />
        <CheckCircle2 className="w-16 h-16 text-[#001745] mx-auto mb-6" />
        <h3 className="text-3xl font-black text-[#001745] mb-4">Detailed Report Unlocked</h3>
        <p className="text-slate-600 mb-8 text-lg font-medium">
          Based on our initial calculations, your operation could recover <span className="text-[#001745] bg-[#B6D4FF]/30 px-2 py-1 rounded-md font-bold font-mono text-2xl">${calculatedSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span> annually.
          We'll be in touch shortly to schedule your free 90-minute Operational Waste Audit.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-sm font-bold text-slate-400 hover:text-[#001745] transition-colors tracking-widest uppercase"
        >
          Recalculate
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-10 max-w-5xl mx-auto shadow-2xl">
      <div className="flex items-center gap-4 mb-10">
        <div className="p-4 bg-[#B6D4FF]/20 rounded-xl">
          <Calculator className="w-8 h-8 text-[#001745]" />
        </div>
        <div>
          <h3 className="text-3xl font-black text-[#001745]">ROI Calculator</h3>
          <p className="text-slate-500 font-medium text-lg">Estimate your annual savings from waste reduction.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-sm font-bold text-[#001745] mb-2 tracking-wide uppercase">Industry Sector</label>
            <select 
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full bg-slate-50 border-slate-200 rounded-lg text-[#001745] px-4 py-4 focus:ring-2 focus:ring-[#B6D4FF] border focus:outline-none transition-all font-medium text-lg"
            >
              <option value="Manufacturing">Manufacturing (Maquiladora)</option>
              <option value="Healthcare">Healthcare System</option>
              <option value="Logistics">Cross-Border Logistics</option>
              <option value="Government">Local Government / Municipal</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#001745] mb-2 tracking-wide uppercase">
              Estimated Defect/Waste Rate: <span className="text-[#001745] bg-[#B6D4FF] px-2 py-0.5 rounded ml-2">{wasteRate}%</span>
            </label>
            <input 
              type="range" 
              min="1" 
              max="25" 
              value={wasteRate}
              onChange={(e) => setWasteRate(parseInt(e.target.value))}
              className="w-full accent-[#001745] h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer mt-4"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#001745] mb-2 tracking-wide uppercase">Annual Revenue/Budget ($)</label>
            <input 
              type="number" 
              value={revenue}
              onChange={(e) => setRevenue(parseInt(e.target.value) || 0)}
              className="w-full bg-slate-50 border-slate-200 rounded-lg text-[#001745] px-4 py-4 focus:ring-2 focus:ring-[#B6D4FF] border focus:outline-none transition-all font-mono font-bold text-lg"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-[#001745] hover:bg-[#001033] text-white font-bold py-5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl text-lg"
          >
            Unlock Detailed Estimate <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="bg-[#FAF9F7] rounded-2xl p-8 border border-slate-200 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#B6D4FF]/30 rounded-full blur-3xl" />
          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Estimated Annual Savings</h4>
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-5xl font-black text-[#001745] font-mono tracking-tighter">
              ${calculatedSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </span>
            <span className="text-slate-400 font-bold uppercase text-sm tracking-widest">/ Year</span>
          </div>
          
          <div className="space-y-6 mt-6 border-t border-slate-200 pt-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#B6D4FF]/30 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#001745]" />
              </div>
              <p className="text-base text-slate-600 font-medium">Minimum expected ROI based on TMAC manufacturing data.</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#B6D4FF]/30 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#001745]" />
              </div>
              <p className="text-base text-slate-600 font-medium">Typical engagement payback period: <strong className="text-[#001745]">3-6 months</strong>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
