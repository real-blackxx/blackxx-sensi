import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Crown, Zap } from 'lucide-react';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center"
    >
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight"
      >
        DOMINATE THE <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-highlight to-accent">
          BATTLEFIELD
        </span>
      </motion.h1>
      
      <p className="text-secondary-text text-lg md:text-xl max-w-2xl mb-12">
        Unlock your true potential with pro-tested sensitivity settings. 
        Engineered for precision, speed, and absolute control.
      </p>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl justify-center">
        {/* Free Sensi Button */}
        <Link to="/free" className="flex-1 group">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass-card p-8 flex flex-col items-center gap-6 hover:border-primary/50 transition-all duration-300 h-full"
          >
            <div className="relative w-full aspect-square max-w-[200px] rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/free-logo.png" 
                alt="Free Sensi" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <Zap className="text-primary fill-primary" size={24} />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">FREE SENSI</h3>
              <p className="text-secondary-text text-sm mb-6">Basic settings to get you started on your journey.</p>
              <div className="btn-glow-primary w-full inline-block">GET STARTED</div>
            </div>
          </motion.div>
        </Link>

        {/* Premium Sensi Button */}
        <Link to="/premium" className="flex-1 group">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass-card p-8 flex flex-col items-center gap-6 border-accent/20 hover:border-accent/50 transition-all duration-300 h-full"
          >
            <div className="relative w-full aspect-square max-w-[200px] rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/premium-logo.png" 
                alt="Premium Sensi" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <Crown className="text-accent fill-accent" size={24} />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">PREMIUM SENSI</h3>
              <p className="text-secondary-text text-sm mb-6">Advanced pro-level settings for ultimate dominance.</p>
              <div className="btn-glow-accent w-full inline-block">GO PRO</div>
            </div>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}
