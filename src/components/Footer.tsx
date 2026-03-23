import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 border-t border-primary/10 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-6">
          <a 
            href="https://www.instagram.com/n1_blackxx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-secondary-text hover:text-highlight hover:border-highlight/50 transition-all duration-300"
          >
            <Instagram size={24} />
          </a>
        </div>
        <p className="text-secondary-text text-sm font-medium">
          © {new Date().getFullYear()} <span className="text-white">BLACKXx SENSI</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
