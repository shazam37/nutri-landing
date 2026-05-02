"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Code2, Camera, Brain, Refrigerator, History, 
  Sparkles, ShieldCheck, Activity 
} from "lucide-react";

const cores = [
  { 
    icon: <Camera className="w-6 h-6 text-rose-500" />, 
    label: "Vision Input", 
    status: "Ready", 
    desc: "AI Photo Scan",
    color: "rose"
  },
  { 
    icon: <Brain className="w-6 h-6 text-emerald-500" />, 
    label: "Logic Engine", 
    status: "Processing", 
    desc: "Meal Analysis",
    color: "emerald"
  },
  { 
    icon: <Refrigerator className="w-6 h-6 text-blue-500" />, 
    label: "Inventory", 
    status: "Synced", 
    desc: "Pantry Manager",
    color: "blue"
  },
  { 
    icon: <History className="w-6 h-6 text-amber-500" />, 
    label: "Insights", 
    status: "Optimizing", 
    desc: "Bio-Feedback",
    color: "amber"
  }
];

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen pt-32 pb-20 px-4 overflow-hidden bg-white">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-[-10%] left-[10%] w-96 h-96 bg-emerald-100 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-50" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 text-center mb-16"
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-6 italic">
          Nutri.<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">ai</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 font-medium leading-relaxed">
          Precision nutrition, minus the manual entry. Track what you eat and manage what you own with AI-driven vision and automated pantry logic.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#join" className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:shadow-2xl hover:shadow-emerald-200 transition-all flex items-center justify-center gap-2">
            Get Early Access <Sparkles className="w-4 h-4 text-emerald-400" />
          </a>
          <a href="#join" className="px-10 py-4 border-2 border-slate-200 text-slate-900 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            Collaborate <Code2 className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* --- The Glassmorphic Tech Dock --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 w-full max-w-5xl"
      >
        <div className="bg-slate-900 border-[8px] border-slate-900 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden">
          <div className="bg-white/95 backdrop-blur-xl p-6 md:p-12 min-h-[400px] flex flex-col items-center justify-center">
            
            {/* Header Status Line */}
            <div className="w-full flex justify-between items-center mb-12 px-4">
              <div className="flex items-center gap-2">
                {/* <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" /> */}
                {/* <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">System_Live // v0.8.2</span> */}
              </div>
              <ShieldCheck className="w-5 h-5 text-slate-300" />
            </div>

            {/* The Bento Core Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {cores.map((core, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-slate-50 border border-slate-100 p-6 rounded-[2.5rem] flex flex-col items-center text-center transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
                >
                  <div className="mb-4 p-3 bg-white rounded-2xl shadow-sm">
                    {core.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{core.label}</h4>
                  <p className="text-[10px] font-medium text-slate-400 uppercase mb-4">{core.desc}</p>
                  <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase border
                    ${core.color === 'rose' ? 'text-rose-500 border-rose-100 bg-rose-50' : 
                      core.color === 'emerald' ? 'text-emerald-500 border-emerald-100 bg-emerald-50' :
                      core.color === 'blue' ? 'text-blue-500 border-blue-100 bg-blue-50' :
                      'text-amber-500 border-amber-100 bg-amber-50'}`}
                  >
                    {core.status}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom Interaction Bar */}
            <div className="mt-12 w-full max-w-md bg-slate-900 rounded-2xl p-4 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-emerald-500 overflow-hidden relative">
                  <Image src="/home.jpeg" alt="User" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                </div>
                <span className="text-[10px] font-bold text-white uppercase tracking-tight">Active User: John Doe</span>
              </div>
              <div className="flex items-center gap-4">
                <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                {/* <div className="h-4 w-[1px] bg-slate-700" /> */}
                {/* <span className="text-[10px] font-mono text-slate-400">0.82ms</span> */}
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}