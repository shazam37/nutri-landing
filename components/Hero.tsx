"use client";
import { motion } from "framer-motion";
import { Code2, Microscope } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen pt-32 pb-20 px-4 overflow-hidden bg-white">
      {/* Funky Background Blob */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center"
      >
        {/* <span className="px-4 py-1.5 mb-6 inline-block text-sm font-black tracking-widest text-emerald-700 uppercase bg-emerald-100 rounded-full">
          Development Phase: Internal Beta 🛠️
        </span> */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-6 italic">
          Nutri.<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">ai</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 font-medium">
          The future of AI nutrition is in the lab. We are currently recruiting 
          <strong> beta testers</strong> for our Android build and <strong>collaborators</strong> to push our AI vision further.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#join" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2">
            Get Early Access
          </a>
          <a href="#join" className="px-8 py-4 border-2 border-slate-200 text-slate-900 rounded-2xl font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
            Collaborate <Code2 className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* App Mockup Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-16 w-full max-w-4xl border-[12px] border-slate-900 rounded-[3rem] shadow-2xl overflow-hidden bg-slate-900"
      >
        <div className="bg-white aspect-video flex items-center justify-center text-slate-400 relative group">
           {/* Once you have your hero screenshot, put it here */}
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10" />
           <span className="z-20 font-mono text-xs text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
             Nutri.ai Android Build v0.8.2
           </span>
        </div>
      </motion.div>
    </section>
  );
}