import { motion } from 'motion/react';
import { Check, ShieldCheck, Smartphone, Target, Zap, Instagram } from 'lucide-react';

export default function Premium() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Image and Price */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <div className="glass-card p-4 overflow-hidden group">
            <img 
              src="/premium-logo.png" 
              alt="Premium Pack" 
              className="w-full rounded-xl group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="glass-card p-8 border-accent/30">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-secondary-text text-sm uppercase tracking-widest font-bold mb-1">Limited Offer</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-black text-accent">$2.99</span>
                  <span className="text-2xl text-secondary-text line-through opacity-50">$18</span>
                </div>
              </div>
              <div className="bg-accent/20 text-accent px-4 py-2 rounded-full font-bold text-sm">
                83% OFF
              </div>
            </div>
            
            <a 
              href="https://www.instagram.com/n1_blackxx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-glow-accent w-full flex items-center justify-center gap-3 py-5 text-lg"
            >
              <Instagram size={24} />
              DM TO BUY
            </a>
            <p className="text-center text-secondary-text text-xs mt-4">
              Instant delivery after payment confirmation.
            </p>
          </div>
        </motion.div>

        {/* Right: Description */}
        <motion.div 
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-8"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              BLACKXX <span className="text-accent">Sensi</span>
            </h1>
            <p className="text-xl text-secondary-text leading-relaxed">
              🔥 Advanced Sensitivity (Android) — Improve your aim, control & consistency with a pro-tested sensitivity setup.
            </p>
          </div>

          <div className="space-y-8 text-secondary-text">
            <p className="bg-primary/10 border-l-4 border-primary p-4 text-white italic">
              BLACKXX Sensi is a custom in-game sensitivity & settings guide designed to help players get better control, smoother tracking, and improved accuracy — without using any hacks or cheats.
            </p>

            <section>
              <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="text-accent" size={20} /> What you'll get
              </h3>
              <ul className="grid grid-cols-1 gap-3">
                {[
                  "Optimized sensitivity values (based on device performance)",
                  "Headshot-focused aim tuning (95–97% potential*)",
                  "Reduced recoil & smoother spray control",
                  "Scope in-shot & movement-friendly setup",
                  "One-tap & auto-fire friendly sensitivity balance",
                  "Close-range & long-range aim improvements",
                  "In-game settings + sensitivity presets",
                  "Easy to apply (no technical knowledge needed)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-accent mt-1 shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4">
                <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                  <Smartphone size={18} className="text-primary" /> Device
                </h3>
                <p className="text-sm">Android devices, works on most phones.</p>
              </div>
              <div className="glass-card p-4">
                <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-primary" /> Safe
                </h3>
                <p className="text-sm">100% manual settings. No hacks or mods.</p>
              </div>
            </section>

            <section className="bg-red-500/10 border border-red-500/20 p-6 rounded-xl">
              <h3 className="text-red-400 font-bold mb-2 uppercase text-xs tracking-widest">Important Disclaimer</h3>
              <p className="text-sm leading-relaxed">
                ❌ This is NOT a hack, mod, cheat, script, or APK. <br />
                ✅ 100% manual in-game settings guide. <br />
                ✅ Safe for normal, ranked & tournament matches. <br />
                This product does not modify game files and does not bypass any game security systems.
              </p>
            </section>

            <section>
              <h3 className="text-white text-xl font-bold mb-4">⭐ Best for</h3>
              <div className="flex flex-wrap gap-2">
                {["Recoil Control", "Smooth Aim", "Consistency", "Beginners", "Intermediate"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <p className="text-xs italic opacity-50 border-t border-white/10 pt-4">
              ⚠️ Final note: This guide enhances your settings — not your skill magically. Practice + correct sensitivity = best results.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
