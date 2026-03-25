import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Lock, Unlock, ExternalLink, AlertCircle } from 'lucide-react';

const UNLOCK_RULES = {
  ad1: 1,
  ad2: 1,
  ad3: 2,
  ad4: 1,
};

const AD_SMARTLINK_URL = "https://www.profitablecpmratenetwork.com/nvzqxh2ddc?key=2c26a02e0cdd8a6e6976fb7961ed2ba5";

export default function AdPage() {
  const [clicks, setClicks] = useState({ ad1: 0, ad2: 0, ad3: 0, ad4: 0 });
  const [unlocked, setUnlocked] = useState({ ad1: false, ad2: false, ad3: false, ad4: false });

  const bannerRef = useRef<HTMLDivElement>(null);
  const socialBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject Banner Ad
    if (bannerRef.current && !bannerRef.current.innerHTML) {
      const script1 = document.createElement('script');
      script1.innerHTML = `
        atOptions = {
          'key' : '7ceb51f5358921a9733e23ce3093adbd',
          'format' : 'iframe',
          'height' : 90,
          'width' : 728,
          'params' : {}
        };
      `;
      const script2 = document.createElement('script');
      script2.src = 'https://www.highperformanceformat.com/7ceb51f5358921a9733e23ce3093adbd/invoke.js';
      
      bannerRef.current.appendChild(script1);
      bannerRef.current.appendChild(script2);
    }

    // Inject Social Bar Ad
    if (socialBarRef.current && !socialBarRef.current.innerHTML) {
      const script = document.createElement('script');
      script.src = 'https://pl28967591.profitablecpmratenetwork.com/08/33/70/0833703f900009c855f17f641fefb7d7.js';
      socialBarRef.current.appendChild(script);
    }
  }, []);

  const triggerPopunder = () => {
    window.open(AD_SMARTLINK_URL, '_blank');
  };

  const handleAdClick = (adKey: keyof typeof UNLOCK_RULES) => {
    if (unlocked[adKey]) return;

    triggerPopunder();

    const newClicks = { ...clicks, [adKey]: clicks[adKey] + 1 };
    setClicks(newClicks);

    if (newClicks[adKey] >= UNLOCK_RULES[adKey]) {
      setUnlocked({ ...unlocked, [adKey]: true });
    }
  };

  const allUnlocked = Object.values(unlocked).every(val => val === true);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center text-center min-h-[80vh]"
    >
      <h2 className="text-3xl font-black mb-6 tracking-tight">UNLOCK YOUR <span className="text-primary">DOWNLOAD</span></h2>

      {/* Banner Ad Container */}
      <div className="w-full max-w-[728px] min-h-[90px] mb-8 bg-white/5 rounded-lg flex items-center justify-center overflow-hidden">
        <div ref={bannerRef} id="banner-ad"></div>
      </div>

      {/* Unlock Progress */}
      <div className="w-full max-w-2xl mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(Object.keys(UNLOCK_RULES) as Array<keyof typeof UNLOCK_RULES>).map((adKey, index) => (
            <button
              key={adKey}
              onClick={() => handleAdClick(adKey)}
              disabled={unlocked[adKey]}
              className={`
                relative p-6 rounded-xl border-2 transition-all duration-300 flex items-center justify-between group
                ${unlocked[adKey] 
                  ? 'bg-primary/20 border-primary/50 cursor-default' 
                  : 'bg-white/5 border-white/10 hover:border-primary/50 hover:bg-white/10 active:scale-95'}
              `}
            >
              <div className="flex flex-col items-start">
                <span className="text-xs font-bold text-secondary-text uppercase tracking-wider mb-1">Step {index + 1}</span>
                <span className={`text-lg font-black ${unlocked[adKey] ? 'text-primary' : 'text-white'}`}>
                  {unlocked[adKey] ? 'COMPLETED' : `WATCH AD ${index + 1}`}
                </span>
              </div>
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center transition-colors
                ${unlocked[adKey] ? 'bg-primary text-white' : 'bg-white/10 text-secondary-text group-hover:text-primary'}
              `}>
                {unlocked[adKey] ? <Unlock size={20} /> : <Lock size={20} />}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Social Bar Placeholder / Container */}
      <div ref={socialBarRef} className="fixed bottom-0 left-0 w-full z-50"></div>

      <div className="flex flex-col items-center gap-8 w-full max-w-md">
        <AnimatePresence mode="wait">
          {!allUnlocked ? (
            <motion.div 
              key="locked"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass-card p-6 w-full border-dashed border-2 border-white/10"
            >
              <div className="flex items-center justify-center gap-3 text-secondary-text mb-2">
                <AlertCircle size={20} className="text-highlight" />
                <p className="font-bold">DOWNLOAD LOCKED</p>
              </div>
              <p className="text-sm text-secondary-text">Complete all 4 ad steps above to unlock your download link.</p>
              
              {/* Progress Bar */}
              <div className="mt-4 w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${(Object.values(unlocked).filter(Boolean).length / 4) * 100}%` }}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-full"
            >
              <a 
                href="https://drive.google.com/drive/folders/11Pyn_d5JEHk4P1MvfAjcYFWMhg2gAP_D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-glow-primary flex items-center justify-center gap-3 w-full py-6 text-2xl shadow-[0_0_30px_rgba(123,46,218,0.4)]"
              >
                <Download size={28} />
                DOWNLOAD NOW
              </a>
              <p className="mt-4 text-highlight font-bold animate-pulse flex items-center justify-center gap-2">
                <ExternalLink size={18} />
                Link Unlocked Successfully!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="mt-12 text-secondary-text text-sm max-w-md italic">
        Thank you for choosing BLACKXx SENSI. Completing these ads helps us keep the service free for everyone.
      </p>
    </motion.div>
  );
}
