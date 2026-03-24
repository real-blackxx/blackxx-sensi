import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Timer as TimerIcon } from 'lucide-react';

export default function AdPage() {
  const [timeLeft, setTimeLeft] = useState(25);
  const [isReady, setIsReady] = useState(false);

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsReady(true);
    }
  }, [timeLeft]);

  // Inject banner ad at the top
  useEffect(() => {
    let bannerContainer = document.getElementById('ad-top-banner');
    if (!bannerContainer) {
      bannerContainer = document.createElement('div');
      bannerContainer.id = 'ad-top-banner';
      bannerContainer.style.display = 'flex';
      bannerContainer.style.justifyContent = 'center';
      bannerContainer.style.margin = '1rem auto';
      // Insert at the beginning of the page content
      const firstChild = document.querySelector('.max-w-4xl');
      if (firstChild) {
        firstChild.parentNode?.insertBefore(bannerContainer, firstChild);
      } else {
        document.body.insertBefore(bannerContainer, document.body.firstChild);
      }
    }

    bannerContainer.innerHTML = '';
    // Banner ad configuration
    window.atOptions = {
      key: '7ceb51f5358921a9733e23ce3093adbd',
      format: 'iframe',
      height: 90,
      width: 728,
      params: {}
    };
    const bannerScript = document.createElement('script');
    bannerScript.src = 'https://www.highperformanceformat.com/7ceb51f5358921a9733e23ce3093adbd/invoke.js';
    bannerScript.async = true;
    bannerContainer.appendChild(bannerScript);
  }, []);

  // Inject social bar ad at the bottom
  useEffect(() => {
    let socialContainer = document.getElementById('social-bar-ad');
    if (!socialContainer) {
      socialContainer = document.createElement('div');
      socialContainer.id = 'social-bar-ad';
      socialContainer.style.display = 'flex';
      socialContainer.style.justifyContent = 'center';
      socialContainer.style.margin = '2rem auto 0';
      // Insert after the main content (assuming .max-w-4xl is the main container)
      const mainContent = document.querySelector('.max-w-4xl');
      if (mainContent) {
        mainContent.parentNode?.insertBefore(socialContainer, mainContent.nextSibling);
      } else {
        document.body.appendChild(socialContainer);
      }
    }

    socialContainer.innerHTML = '';
    const socialScript = document.createElement('script');
    socialScript.src = 'https://pl28967591.profitablecpmratenetwork.com/08/33/70/0833703f900009c855f17f641fefb7d7.js';
    socialScript.async = true;
    socialContainer.appendChild(socialScript);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-12 flex flex-col items-center text-center min-h-[60vh]"
    >
      <h2 className="text-3xl font-black mb-8 tracking-tight">
        PREPARING YOUR <span className="text-primary">DOWNLOAD</span>
      </h2>

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
