"use client";
import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Dumbbell, 
  MessageSquareQuote, 
  GraduationCap, 
  ArrowUpRight 
} from "lucide-react";

const futureFeatures = [
  {
    title: "Biomarker Integration",
    desc: "AI-driven blood report analysis. We merge your internal chemistry with our logic engine for medical-grade precision.",
    icon: <Stethoscope className="w-5 h-5" />,
    status: "R&D Phase"
  },
  {
    title: "Kinetic Optimization",
    desc: "Workout tracking that understands 'Break Rules.' Gym timing suggestions based on your real-time recovery data.",
    icon: <Dumbbell className="w-5 h-5" />,
    status: "In Development"
  },
  {
    title: "Context-Aware Avatar",
    desc: "A proactive AI companion that knows your history, schedule, and habits. It doesn't just notify; it coaches.",
    icon: <MessageSquareQuote className="w-5 h-5" />,
    status: "In Development"
  },
  {
    title: "The Truth Engine",
    desc: "Evidence-based nutrition education designed to bust local myths and provide culturally relevant diet wisdom.",
    icon: <GraduationCap className="w-5 h-5" />,
    status: "In Development"
  }
];

export default function Pipeline() {
  return (
    <section id="pipeline" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black tracking-[0.3em] text-slate-400 uppercase mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-slate-300 rounded-full" /> 
              Development Pipeline
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              The Vision Beyond <br/> Simple Tracking.
            </h3>
          </div>
          <p className="text-slate-500 font-medium max-w-sm pb-1">
            Our R&D roadmap focuses on bridging the gap between clinical data and daily lifestyle choices.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {futureFeatures.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-slate-900 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white rounded-2xl group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500 shadow-sm">
                  {item.icon}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black text-slate-400 group-hover:text-slate-500 uppercase tracking-widest">
                    {item.status}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500" />
                </div>
              </div>

              <h4 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-600 group-hover:text-slate-400 font-medium leading-relaxed transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Subtle Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            // Accessing these modules requires collaborator-tier permissions //
          </p>
        </div>
      </div>
    </section>
  );
}