import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export default function AdPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center text-center min-h-[80vh] relative z-10"
    >
      <div className="w-full glass-card p-8 md:p-12 border-white/5">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter uppercase">
          HOW TO DOWNLOAD <span className="text-primary">FREE SENSI</span>
        </h2>

        {/* Video Tutorial */}
        <div className="w-full max-w-2xl mx-auto mb-8 rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <video 
            src="/tutorial.mp4" 
            controls 
            playsInline
            className="w-full aspect-video bg-black/40"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Download Button */}
        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full max-w-md"
          >
            <a 
              href="https://shrinkme.click/PREMIUM-SENSI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-glow-primary flex items-center justify-center gap-2 md:gap-3 w-full py-4 md:py-6 text-base md:text-xl font-black shadow-[0_0_30px_rgba(123,46,218,0.4)]"
            >
              <Download className="w-5 h-5 md:w-6 md:h-6" />
              CLICK HERE TO DOWNLOAD
            </a>
          </motion.div>
        </div>

        <p className="mt-12 text-secondary-text text-sm max-w-md mx-auto italic opacity-50">
          Thank you for choosing BLACKXx SENSI.
        </p>
      </div>
    </motion.div>
  );
}
