import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Timer as TimerIcon, AlertCircle } from 'lucide-react';

export default function AdPage() {
  const [timeLeft, setTimeLeft] = useState(25);
  const [isReady, setIsReady] = useState(false);

  // Inject ad script when component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pl28967274.profitablecpmratenetwork.com/2e/2d/ae/2e2daea189fd4bb76f84a85c90809399.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      // Clean up: remove the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsReady(true);
    }
  }, [timeLeft]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-12 flex flex-col items-center text-center min-h-[60vh]"
    >
      <h2 className="text-3xl font-black mb-8 tracking-tight">PREPARING YOUR <span className="text-primary">DOWNLOAD</span></h2>

      {/* Ad Space Placeholder */}
      <div 
        id="ad-space" 
        className="w-full max-w-2xl aspect-video glass-card border-dashed border-2 border-primary/30 flex flex-col items-center justify-center gap-4 mb-12 group hover:border-primary/60 transition-colors"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
          <AlertCircle size={32} />
        </div>
        <div className="text-center">
          <p className="text-xl font-bold text-white mb-1">Ad Space</p>
          <p className="text-secondary-text text-sm">Advertisements will be displayed here.</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8">
        {!isReady ? (
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-white/10"
                />
                <motion.circle
                  cx="48"
                  cy="48"
                  r="40"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeDasharray="251.2"
                  initial={{ strokeDashoffset: 251.2 }}
                  animate={{ strokeDashoffset: 251.2 * (timeLeft / 25) }}
                  className="text-primary"
                />
              </svg>
              <span className="text-3xl font-black text-white">{timeLeft}</span>
            </div>
            <p className="text-secondary-text font-medium flex items-center gap-2">
              <TimerIcon size={18} className="animate-pulse" />
              Please wait while we verify your link...
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <a 
              href="https://drive.google.com/drive/folders/11Pyn_d5JEHk4P1MvfAjcYFWMhg2gAP_D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-glow-primary flex items-center gap-3 px-16 py-6 text-2xl shadow-[0_0_30px_rgba(123,46,218,0.4)]"
            >
              <Download size={28} />
              DOWNLOAD NOW
            </a>
            <p className="mt-4 text-highlight font-bold animate-pulse">Link Unlocked Successfully!</p>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {isReady && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-secondary-text text-sm max-w-md italic"
          >
            Thank you for choosing BLACKXx SENSI. If the download doesn't start automatically, please click the button above.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
