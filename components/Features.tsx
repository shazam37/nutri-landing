"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Home, Camera, Refrigerator, CalendarDays, History, Settings2 
} from "lucide-react";

const appPillars = [
  {
    title: "Home: The Compass",
    desc: "A high-level dashboard featuring our 'Gentle Coach' logic. It tracks your daily progress, hydration, and provides empathetic nudges.",
    icon: <Home className="text-emerald-500" />,
    tag: "Dashboard",
    screen: "/home_img.jpeg" // Path to your file in /public
  },
  {
    title: "Log: Vision-Powered",
    desc: "Log meals via camera with instant AI breakdown. Includes Confidence Scores and detailed macro/micro data extraction.",
    icon: <Camera className="text-rose-500" />,
    tag: "Entry",
    screen: "/log_3.jpeg"
  },
  {
    title: "Kitchen: Smart Inventory",
    desc: "Your digital pantry. Track quantities and expiry dates. The system alerts you to items expiring soon to prevent waste.",
    icon: <Refrigerator className="text-blue-500" />,
    tag: "Inventory",
    screen: "/kitchen_new.jpeg"
  },
  {
    title: "Plan: Zero-Waste Chef",
    desc: "AI meal planning that prioritizes expiring items. Features 'Weekly Rebalancing' to adjust calories after high-intake days.",
    icon: <CalendarDays className="text-purple-500" />,
    tag: "Planning",
    screen: "/plan.jpeg"
  },
  {
    title: "History: Analytics",
    desc: "Deep-dive into your Macro and Micro nutrient Signature. View Bar Charts and RDI heatmaps and track long-term metabolic trends.",
    icon: <History className="text-amber-500" />,
    tag: "Insights",
    screen: "/history.jpeg"
  },
  {
    title: "Admin: Proactive Agents",
    desc: "The nerve center. Manage background 'Coach Agents' and automated cron-jobs that audit your data while you sleep.",
    icon: <Settings2 className="text-slate-500" />,
    tag: "System",
    screen: "/admin.jpeg"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-black tracking-[0.3em] text-emerald-500 uppercase mb-4">The Nutri.ai Ecosystem</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
            Six Pillars of <br/> Intelligent Nutrition.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appPillars.map((pillar, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="group bg-slate-50 border border-slate-200 rounded-[3.5rem] p-8 flex flex-col h-full transition-all hover:shadow-2xl hover:shadow-emerald-100/50"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  {pillar.icon}
                </div>
                <span className="text-[10px] font-black bg-slate-200 px-3 py-1 rounded-full uppercase tracking-tighter">
                  {pillar.tag}
                </span>
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{pillar.title}</h4>
              <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow">
                {pillar.desc}
              </p>

              {/* REAL SCREENSHOT DISPLAY */}
              <div className="relative aspect-[9/16] w-full bg-slate-200 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-inner">
                <Image 
                  src={pillar.screen} 
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}