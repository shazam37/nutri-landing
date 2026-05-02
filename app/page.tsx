"use client"; // Ensure this is at the very top
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Science from "@/components/Science";
import Join from "@/components/Join";
import Pipeline from "@/components/Pipeline";

export default function Home() {
  // This is the fix for the scroll-to-bottom problem
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="antialiased">
      <Hero />
      <Features />
      <Science />
      <Pipeline />
      <Join /> 
      
      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-sm bg-white">
        <p>© 2026 Nutri.ai — Built for the health-conscious techie.</p>
      </footer>
    </main>
  );
}