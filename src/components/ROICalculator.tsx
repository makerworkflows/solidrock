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
      <div className="bg-black border border-zinc-900 rounded-2xl p-8 max-w-xl mx-auto text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
        <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-white mb-2">Detailed Report Unlocked</h3>
        <p className="text-zinc-300 mb-8">
          Based on our initial calculations, your operation could recover <span className="text-emerald-400 font-bold font-mono text-xl">${calculatedSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span> annually.
          We'll be in touch shortly to schedule your free 90-minute Operational Waste Audit.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-sm text-zinc-400 hover:text-white transition-colors"
        >
          Recalculate
        </button>
      </div>
    );
  }

  return (
    <div className="bg-black/80 backdrop-blur-xl border border-zinc-900 rounded-3xl p-8 max-w-2xl mx-auto shadow-2xl">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-blue-500/20 rounded-xl">
          <Calculator className="w-8 h-8 text-blue-400" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">ROI Calculator</h3>
          <p className="text-zinc-400 text-sm">Estimate your annual savings from waste reduction.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Industry Sector</label>
            <select 
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full bg-zinc-950 border-zinc-800 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-blue-500 border focus:outline-none transition-all"
            >
              <option value="Manufacturing">Manufacturing (Maquiladora)</option>
              <option value="Healthcare">Healthcare System</option>
              <option value="Logistics">Cross-Border Logistics</option>
              <option value="Government">Local Government / Municipal</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Estimated Defect/Waste Rate: <span className="text-blue-400 font-bold">{wasteRate}%</span>
            </label>
            <input 
              type="range" 
              min="1" 
              max="25" 
              value={wasteRate}
              onChange={(e) => setWasteRate(parseInt(e.target.value))}
              className="w-full accent-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Annual Revenue/Budget ($)</label>
            <input 
              type="number" 
              value={revenue}
              onChange={(e) => setRevenue(parseInt(e.target.value) || 0)}
              className="w-full bg-zinc-950 border-zinc-800 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-blue-500 border focus:outline-none transition-all font-mono"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/20"
          >
            Unlock Detailed Estimate <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="bg-zinc-950/50 rounded-2xl p-6 border border-zinc-800 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />
          <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">Estimated Annual Savings</h4>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-mono tracking-tighter">
              ${calculatedSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </span>
            <span className="text-zinc-500 text-sm">/ year</span>
          </div>
          
          <div className="space-y-4 mt-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <p className="text-sm text-zinc-300">Minimum expected ROI based on TMAC historical data.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-sm text-zinc-300">Typical payback period: <strong>3-6 months</strong>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
