"use client";
import { Apple, Activity } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-6 pointer-events-none">
      <nav 
        className={`
          pointer-events-auto
          flex items-center justify-between 
          w-full max-w-5xl px-6 py-3
          rounded-full transition-all duration-300
          ${isScrolled 
            ? "bg-white/80 backdrop-blur-lg shadow-lg border border-slate-200/50 py-2" 
            : "bg-transparent border border-transparent"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 font-black text-xl tracking-tighter text-slate-900">
          <div className="bg-emerald-500 p-1.5 rounded-xl shadow-sm">
            <Apple className="text-white w-5 h-5" />
          </div>
          <span className="hidden sm:block">nutri.ai</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-6 md:gap-10 text-sm font-bold text-slate-600 uppercase tracking-widest">
            <a href="#features" className="hover:text-emerald-600 transition-colors">Features</a>
            <a href="#science" className="hover:text-emerald-600 transition-colors">Science</a>
            <a href="#pipeline" className="hover:text-emerald-600 transition-colors">Vision</a>
            {/* <a href="#join" className="hover:text-emerald-600 transition-colors">Collaborate</a> */}
        </div>

        {/* Status Indicator (Replacing the redundant Button) */}
        <div className="flex items-center gap-3 px-4 py-2 bg-slate-900/5 rounded-full border border-slate-900/10">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          <span className="text-[10px] md:text-xs font-black uppercase tracking-tighter text-slate-900">
            Beta v 0.8.2
          </span>
        </div>
      </nav>
    </header>
  );
}