import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Unlock, Zap } from 'lucide-react';

export default function Free() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-4xl mx-auto px-4 py-12 flex flex-col items-center text-center"
    >
      <div className="glass-card p-2 mb-8 max-w-md overflow-hidden group">
        <img 
          src="/free-logo.png" 
          alt="Free Pack" 
          className="w-full rounded-xl group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
          FREE <span className="text-primary">SENSI PACK</span>
        </h1>
        <p className="text-xl text-secondary-text max-w-xl mx-auto mb-10">
          Get the free version with basic settings to kickstart your aim improvement. 
          Click below to unlock your download link.
        </p>

        <Link to="/ad" className="group">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-glow-primary inline-flex items-center gap-3 px-12 py-6 text-xl"
          >
            <Unlock size={24} />
            UNLOCK FREE SENSI
          </motion.div>
        </Link>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { title: "Basic Tuning", desc: "Essential values for standard devices." },
            { title: "Recoil Help", desc: "Simple adjustments for better spray." },
            { title: "Easy Apply", desc: "Step-by-step guide included." }
          ].map((feature, i) => (
            <div key={i} className="glass-card p-6 border-primary/10">
              <Zap size={20} className="text-primary mb-3" />
              <h4 className="font-bold mb-1">{feature.title}</h4>
              <p className="text-secondary-text text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
