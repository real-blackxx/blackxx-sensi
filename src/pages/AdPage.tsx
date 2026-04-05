import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Premium from './pages/Premium';
import Free from './pages/Free';
import AdPage from './pages/AdPage';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-primary selection:text-white overflow-x-hidden">
        {/* Background Glows */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
          <div className="absolute top-[40%] right-[10%] w-[20%] h-[20%] bg-highlight/10 blur-[100px] rounded-full" />
        </div>

        <Header />
        
        <main className="flex-grow relative z-10">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/premium" element={<Premium />} />
              <Route path="/free" element={<Free />} />
              <Route path="/ad" element={<AdPage />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
