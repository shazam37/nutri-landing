"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function Join() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      role: formData.get("role"),
      link: formData.get("link"),
    };

    try {
      // Ensure this matches your route path: /api/waitlist
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="join" className="py-24 bg-emerald-500">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto px-6"
        >
          <div className="bg-white rounded-[3rem] p-12 md:p-20 text-center shadow-2xl">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight italic">Registration Received.</h2>
            {/* <p className="text-slate-500 font-medium mb-2">Check your inbox for a confirmation from the Nutri.ai team.</p> */}
            <p className="text-slate-400 text-sm">We'll reach out shortly regarding build access.</p>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="join" className="py-24 bg-emerald-500 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight italic">Enter the Inner Circle.</h2>
            <p className="text-slate-500 font-medium italic">Be the first to log with Nutri.ai or help us build it.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                <input 
                  required
                  name="name"
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-emerald-200 outline-none font-bold transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                <input 
                  required
                  name="email"
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-emerald-200 outline-none font-bold transition-all" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">I want to join as a...</label>
              <select 
                name="role"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-emerald-200 outline-none font-bold appearance-none transition-all cursor-pointer"
              >
                <option>Beta Tester (Internal Distribution)</option>
                <option>Developer / Collaborator (Tech Stack)</option>
                <option>Both</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">GitHub / LinkedIn / Portfolio (Optional)</label>
              <input 
                name="link"
                type="text" 
                placeholder="https://github.com/..." 
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-emerald-200 outline-none font-bold transition-all" 
              />
            </div>

            <button 
              type="submit"
              disabled={status === "loading"}
              className="w-full py-5 bg-emerald-500 text-white rounded-2xl font-black text-lg hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-3 transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>Processing... <Loader2 className="w-5 h-5 animate-spin" /></>
              ) : (
                <>Secure Access <Rocket className="w-5 h-5" /></>
              )}
            </button>

            {status === "error" && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="flex items-center justify-center gap-2 text-rose-500 font-bold text-xs uppercase"
              >
                <AlertCircle className="w-4 h-4" /> Transmission failed. Please try again.
              </motion.div>
            )}
          </form>

          <p className="mt-8 text-center text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            By joining, you agree to provide feedback and maintain beta confidentiality.
          </p>
        </div>
      </div>
    </section>
  );
}