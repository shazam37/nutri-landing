"use client";
import { motion } from "framer-motion";
import { 
  Microscope, 
  Cpu, 
  Zap, 
  Activity, 
  Brain, 
  Biohazard, 
  ArrowRight, 
  Timer, 
  Scale, 
  Waves 
} from "lucide-react";

const scienceDeepDive = [
  {
    title: "The Zero-Waste Algorithm",
    stat: "Eco-Efficiency",
    desc: "Your kitchen is an asset, not a graveyard. Our algorithm calculates the 'decay rate' of your inventory. It cross-references expiring items with your macro-deficits to generate meal plans that are mathematically optimized for both your body and your wallet.",
    icon: <Scale className="text-emerald-400" />,
    fact: "Fact: The average household wastes 30% of their groceries. Nutri.ai targets 0%."
  },
  {
    title: "Proactive Satiety Modeling",
    stat: "Ghrelin Management",
    desc: "By analyzing the glycemic load of your meals and your historical 'hunger spikes' (logged in History), our AI predicts when your energy will dip. It suggests protein-anchored snacks 45 minutes *before* the craving hits.",
    icon: <Waves className="text-cyan-400" />,
    fact: "Science: Preventing a crash is 3x more effective than resisting a craving."
  },
  {
    title: "Circadian Nutrient Timing",
    stat: "Chronobiology",
    desc: "The 'Coach Agent' doesn't just run at 02:30 UTC for fun. It aligns your nutrient recommendations with your circadian rhythm, prioritizing high-carb fuel during your peak activity windows and magnesium-rich recovery in the evening.",
    icon: <Timer className="text-amber-400" />,
    fact: "Fact: *When* you eat is as impactful as *what* you eat for insulin sensitivity."
  },
  {
    title: "The Recovery Matrix",
    stat: "Non-Linear Progress",
    desc: "Weight loss isn't a straight line. Our 'Weekly Rebalancing' tool uses a rolling average of your weight and intake to detect plateaus. If you binge, it doesn't punish; it redistributes your 'caloric budget' like a financial advisor.",
    icon: <Biohazard className="text-rose-400" />,
    fact: "Fact: Rigid dieting is the #1 predictor of metabolic slowdown."
  }
];

export default function Science() {
  return (
    <section id="science" className="py-24 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-emerald-500 font-mono text-sm tracking-[0.5em] uppercase mb-4"
          >
            Theoretical Framework
          </motion.h2>
          <h3 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 italic">
            Engineered for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
              Optimal Performance.
            </span>
          </h3>
          <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            Nutri.ai is the first nutrition system that treats your kitchen inventory as a 
            <strong> dynamic supply chain</strong> and your body as a <strong>biological feedback loop.</strong>
          </p>
        </div>

        {/* The 4-Pillar Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {scienceDeepDive.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.01 }}
              className="group p-10 rounded-[3.5rem] bg-white/5 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                  <div className="p-4 bg-slate-900 rounded-[2rem] border border-white/10 group-hover:border-emerald-500/50 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black font-mono text-slate-500 uppercase tracking-widest">
                    Module_v.{i + 1}
                  </span>
                </div>
                <h4 className="text-3xl font-bold mb-4 tracking-tight italic">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed text-lg mb-8">{item.desc}</p>
              </div>
              
              <div className="p-4 bg-white/[0.03] rounded-2xl border-l-2 border-emerald-500">
                <span className="text-xs font-bold text-emerald-400 tracking-wide uppercase">{item.stat}:</span>
                <p className="text-xs text-slate-500 mt-1">{item.fact}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The "Neural Network" UI - Gamified Real-time Logic */}
        <div className="relative p-12 bg-gradient-to-br from-slate-900 to-black rounded-[4rem] border border-white/10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h4 className="text-4xl font-black italic">The Micronutrient <br/>Signature™</h4>
              <p className="text-slate-400 leading-relaxed">
                Most trackers ignore the 'Hidden Hunger' caused by micronutrient gaps. Nutri.ai generates a daily 
                <strong> Biometric Fingerprint </strong> of your vitamins and minerals. If your Folate or Magnesium 
                levels are low, the AI adjusts the 'Plan' to prioritize specific items from your 'Kitchen' 
                inventory to fill the gap.
              </p>
              
              {/* Gamified Stat Bars */}
              <div className="grid grid-cols-2 gap-4">
                {['Folate', 'Magnesium', 'Vitamin D', 'Iron'].map((nutrient) => (
                  <div key={nutrient} className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">{nutrient}</span>
                      <span className="text-[10px] text-emerald-400 font-mono">OPTIMAL</span>
                    </div>
                    <div className="h-1 w-full bg-slate-800 rounded-full">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: '85%' }} 
                        className="h-full bg-emerald-500" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Agent Mockup */}
            <div className="bg-black/60 p-8 rounded-[2.5rem] border border-white/5 font-mono text-sm space-y-4 shadow-2xl">
              <div className="flex items-center gap-2 text-emerald-500 mb-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-widest">Active Coach Agent: morning_run</span>
              </div>
              <p className="text-slate-500">[{new Date().toLocaleTimeString()}] Querying Kitchen_DB...</p>
              <p className="text-white italic underline">Detected: Spinach (Expiring in 24h)</p>
              <p className="text-slate-500">[{new Date().toLocaleTimeString()}] Cross-referencing History_DB...</p>
              <p className="text-white italic underline">Detected: Iron Deficit (-12% RDI)</p>
              <p className="text-emerald-400 font-bold leading-tight mt-4">
                SUCCESS: Morning Plan revised. <br/>
                Action: Add 50g Spinach to Breakfast Scramble.
              </p>
              <div className="pt-4 flex justify-between items-center">
                <span className="text-[10px] text-slate-600">CONFIDENCE: 98.4%</span>
                <div className="flex gap-1">
                   {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-emerald-500 rounded-full" />)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Technical Row */}
        <div className="mt-20 flex flex-wrap justify-between gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2"><Settings2 className="w-4 h-4"/> <span className="text-[10px] font-mono">CRON_ENABLED</span></div>
          <div className="flex items-center gap-2"><Zap className="w-4 h-4"/> <span className="text-[10px] font-mono">REALTIME_MACRO_REBALANCE</span></div>
          <div className="flex items-center gap-2"><Activity className="text-emerald-500 w-4 h-4"/> <span className="text-[10px] font-mono">TDEE_DYNAMIC_V3</span></div>
        </div>

      </div>
    </section>
  );
}

// Ensure you import Settings2 from Lucide
import { Settings2 } from "lucide-react";