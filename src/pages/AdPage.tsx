import { motion } from 'motion/react';
import { Download } from 'lucide-react';

const SHRINKME_URL = "https://shrinkme.click/PREMIUM-SENSI";

export default function AdPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center text-center min-h-[80vh]"
    >
      <h2 className="text-3xl font-black mb-6 tracking-tight">HOW TO DOWNLOAD FREE SENSI</h2>

      {/* Video tutorial */}
      <div className="w-full max-w-2xl mb-8 rounded-lg overflow-hidden shadow-lg">
        <video 
          controls 
          autoPlay 
          muted 
          className="w-full"
          poster="https://placehold.co/1280x720/0A0A0F/FFFFFF?text=Video+Preview"
        >
          <source src="/tutorial.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Download button */}
      <a 
        href={SHRINKME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-glow-primary flex items-center justify-center gap-3 px-8 py-4 text-xl shadow-[0_0_30px_rgba(123,46,218,0.4)]"
      >
        <Download size={24} />
        CLICK HERE TO DOWNLOAD
      </a>
    </motion.div>
  );
}
