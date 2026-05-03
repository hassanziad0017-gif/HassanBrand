/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  ArrowRight, 
  Check,
  X,
  Menu
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// SVG Components for Products
const HeroProductSVG = () => (
  <svg viewBox="0 0 300 300" className="w-[320px] drop-shadow-[0_30px_60px_rgba(204,255,0,0.3)]">
    <defs>
      <radialGradient id="bg-grad" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#2c2c34" />
        <stop offset="100%" stopColor="#050507" />
      </radialGradient>
      <radialGradient id="glow-grad" cx="50%" cy="30%">
        <stop offset="0%" stopColor="#CCFF00" stopOpacity="0.3" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    <rect x="60" y="120" width="180" height="150" rx="0" fill="url(#bg-grad)" stroke="#CCFF00" strokeWidth="2" />
    <rect x="80" y="140" width="140" height="100" rx="0" fill="#1a1a1f" />
    <text x="150" y="205" textAnchor="middle" fill="#CCFF00" fontFamily="Syne" fontWeight="900" fontSize="18" letterSpacing="3" fontStyle="italic">HASSAN</text>
    <ellipse cx="100" cy="100" rx="28" ry="36" fill="#2c2c34" stroke="#CCFF00" strokeWidth="1" />
    <ellipse cx="100" cy="100" rx="18" ry="24" fill="#1a1a1f" />
    <circle cx="100" cy="100" r="8" fill="none" stroke="#CCFF00" strokeWidth="2" opacity="0.6" />
    <ellipse cx="200" cy="100" rx="28" ry="36" fill="#2c2c34" stroke="#CCFF00" strokeWidth="1" />
    <ellipse cx="200" cy="100" rx="18" ry="24" fill="#1a1a1f" />
    <circle cx="200" cy="100" r="8" fill="none" stroke="#CCFF00" strokeWidth="2" opacity="0.6" />
    <ellipse cx="150" cy="180" rx="100" ry="60" fill="url(#glow-grad)" />
  </svg>
);

const ProX1SVG = () => (
  <svg viewBox="0 0 200 220" className="w-full drop-shadow-[0_10px_30px_rgba(204,255,0,0.2)]">
    <rect x="20" y="60" width="160" height="140" rx="0" fill="#1a1a1f" stroke="#CCFF00" strokeWidth="2" />
    <text x="100" y="145" textAnchor="middle" fill="#CCFF00" fontFamily="Syne" fontWeight="900" fontSize="14" letterSpacing="2" fontStyle="italic">HASSAN</text>
    <text x="100" y="162" textAnchor="middle" fill="#888" fontSize="9" fontWeight="800">PRO X1</text>
    <rect x="78" y="128" width="44" height="18" rx="0" fill="#0a0a0c" stroke="#CCFF00" strokeWidth="1" />
    <text x="100" y="141" textAnchor="middle" fill="#CCFF00" fontFamily="monospace" fontSize="9">100</text>
    <ellipse cx="60" cy="40" rx="22" ry="30" fill="#2c2c34" stroke="#CCFF00" strokeWidth="1" />
    <ellipse cx="60" cy="40" rx="14" ry="20" fill="#1a1a1f"/>
    <path d="M60 60 L60 90" stroke="#CCFF00" strokeWidth="1" strokeDasharray="2,2" />
    <ellipse cx="140" cy="40" rx="22" ry="30" fill="#2c2c34" stroke="#CCFF00" strokeWidth="1" />
    <ellipse cx="140" cy="40" rx="14" ry="20" fill="#1a1a1f"/>
    <path d="M140 60 L140 90" stroke="#CCFF00" strokeWidth="1" strokeDasharray="2,2" />
  </svg>
);

const LiteSVG = () => (
  <svg viewBox="0 0 140 140" className="w-[130px] drop-shadow-[0_10px_25px_rgba(204,255,0,0.2)]">
    <rect x="20" y="20" width="100" height="100" rx="0" fill="#1a1a1f" stroke="#CCFF00" strokeWidth="2" />
    <text x="70" y="78" textAnchor="middle" fill="#CCFF00" fontFamily="Syne" fontWeight="900" fontSize="11" letterSpacing="1" fontStyle="italic">HASSAN</text>
    <ellipse cx="45" cy="20" rx="14" ry="20" fill="#2c2c34" stroke="#CCFF00" strokeWidth="1" />
    <ellipse cx="95" cy="20" rx="14" ry="20" fill="#2c2c34" stroke="#CCFF00" strokeWidth="1" />
  </svg>
);

const NeonSVG = () => (
  <svg viewBox="0 0 140 140" className="w-[130px] drop-shadow-[0_10px_25px_rgba(204,255,0,0.35)]">
    <rect x="20" y="20" width="100" height="100" rx="0" fill="#000" stroke="#CCFF00" strokeWidth="3" />
    <text x="70" y="78" textAnchor="middle" fill="#CCFF00" fontFamily="Syne" fontWeight="900" fontSize="11" letterSpacing="1" fontStyle="italic">HASSAN</text>
    <text x="70" y="92" textAnchor="middle" fill="#CCFF00" fontSize="7" fontWeight="800" opacity="0.9">SYSTEM_CORE</text>
    <ellipse cx="45" cy="18" rx="14" ry="20" fill="#000" stroke="#CCFF00" strokeWidth="1.5" />
    <ellipse cx="95" cy="18" rx="14" ry="20" fill="#000" stroke="#CCFF00" strokeWidth="1.5" />
  </svg>
);

const T75SVG = () => (
  <svg viewBox="0 0 200 200" className="w-full drop-shadow-[0_10px_30px_rgba(204,255,0,0.2)]">
    <rect x="30" y="80" width="140" height="90" rx="45" fill="#141414" stroke="#CCFF00" strokeWidth="2" />
    <rect x="85" y="115" width="30" height="10" rx="5" fill="#000" stroke="#CCFF00" strokeWidth="1" />
    <text x="100" y="123" textAnchor="middle" fill="#CCFF00" fontFamily="monospace" fontSize="7" fontWeight="bold">T75</text>
    <ellipse cx="65" cy="65" rx="20" ry="20" fill="#2c2c34" stroke="#CCFF00" strokeWidth="1.5" />
    <ellipse cx="65" cy="65" rx="10" ry="10" fill="#000" />
    <circle cx="135" cy="65" r="20" fill="#2c2c31" stroke="#CCFF00" strokeWidth="1.5" />
    <circle cx="135" cy="65" r="10" fill="#000" />
    <path d="M65 85 L65 100" stroke="#CCFF00" strokeWidth="1" opacity="0.5" />
    <path d="M135 85 L135 100" stroke="#CCFF00" strokeWidth="1" opacity="0.5" />
  </svg>
);

const LaptopSVG = () => (
  <svg viewBox="0 0 240 180" className="w-full drop-shadow-[0_10px_40px_rgba(255,255,255,0.15)]">
    <rect x="20" y="20" width="200" height="130" rx="4" fill="#141414" stroke="#CCFF00" strokeWidth="2" />
    <rect x="25" y="25" width="190" height="120" rx="2" fill="#000" />
    <text x="120" y="85" textAnchor="middle" fill="#CCFF00" fontFamily="Syne" fontWeight="900" fontSize="14" fontStyle="italic">HB_OS</text>
    <path d="M10 150 L230 150 L240 170 L0 170 Z" fill="#141414" stroke="#CCFF00" strokeWidth="1.5" />
    <rect x="40" y="155" width="160" height="8" rx="1" fill="#2c2c34" />
    <rect x="100" y="164" width="40" height="4" rx="1" fill="#CCFF00" opacity="0.8" />
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black cursor-none select-none border-brutal relative">
      <CustomCursor />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 sm:px-15 pt-30 pb-15 overflow-hidden">
        {/* Background Directives */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 rotate-90 text-brand-accent opacity-10 text-[180px] font-accent font-black pointer-events-none uppercase tracking-tighter whitespace-nowrap hidden lg:block">
          PRIMARY DIRECTIVE
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center w-full relative z-10">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-black uppercase tracking-[4px] text-brand-accent mb-6 block"
            >
              Active Focus: Sonic Excellence
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-[80px] sm:text-[100px] lg:text-[140px] leading-[0.85] font-accent font-black uppercase tracking-tighter italic border-b-[8px] border-brand-accent pb-6 mb-8"
            >
              SOUND<br />
              ENGINE<br />
              LOGIC
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-xl max-w-xl font-medium leading-relaxed opacity-80 uppercase italic tracking-tight mb-12"
            >
              Optimizing core acoustic pipelines for low-latency neural feedback loops. System integrity at 98%.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-8 items-center"
            >
              <button className="bg-brand-accent text-black px-12 py-5 font-accent font-black uppercase tracking-tighter text-xl cursor-pointer hover:bg-white transition-colors italic flex items-center gap-4 interactive">
                BUY GEAR <ArrowRight size={24} strokeWidth={4} />
              </button>
              
              <div className="flex gap-12">
                {[
                  { val: '40H', label: 'Uptime' },
                  { val: '01', label: 'Priority' },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-brand-accent font-bold tracking-tighter text-xs uppercase mb-1">{stat.label}</span>
                    <span className="font-mono text-3xl">{stat.val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-8 hidden sm:flex">
              <div className="w-48 h-48 border-4 border-brand-accent rounded-full flex flex-col items-center justify-center rotate-12 bg-brand-accent text-black">
                <span className="text-xs font-black uppercase">Priority</span>
                <span className="text-6xl font-black">01</span>
              </div>
              <div className="w-48 h-48 border-4 border-brand-accent flex flex-col items-center justify-center -rotate-6">
                <span className="text-xs font-black uppercase text-brand-accent">Series</span>
                <span className="text-3xl font-bold">X-1</span>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 filter grayscale brightness-125 contrast-125"
            >
              <HeroProductSVG />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-brand-accent text-black py-4 overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: '-50%' }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="flex gap-12 w-fit font-accent font-black text-2xl italic uppercase tracking-tighter"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              NEON OVERDRIVE // SESSION ACTIVE // SYSTEM OPTIMIZED // HASSAN AUDIO LABS
            </div>
          ))}
        </motion.div>
      </div>

      {/* PRODUCTS SECTION */}
      <section id="products" className="px-6 sm:px-15 py-30">
        <div className="flex flex-col md:flex-row justify-between items-start mb-18 border-l-8 border-brand-accent pl-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2">Inventory Sync</p>
            <h2 className="text-6xl sm:text-8xl">COMMENCE<br />GEAR ACQUISITION</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brutalist Cards */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group relative bg-brand-black border-[4px] border-brand-white p-10 hover:bg-brand-accent hover:text-black transition-all interactive overflow-hidden sm:col-span-2 lg:col-span-1"
          >
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase block mb-1 tracking-widest">01/ Premium Asset</span>
              <h3 className="text-4xl mb-6">OPEN-EAR PRO X1</h3>
              <p className="text-sm opacity-80 uppercase italic tracking-tight mb-8">40H UPTIME // IPX5 SECURE // HD COMMS</p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-4xl font-black">$89</span>
                <ShoppingBag size={40} strokeWidth={3} />
              </div>
            </div>
            <div className="absolute right-[-15%] bottom-[-5%] w-[60%] opacity-20 grayscale group-hover:opacity-40 transition-opacity">
              <ProX1SVG />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group relative bg-brand-black border-[4px] border-brand-accent p-10 hover:bg-white hover:text-black transition-all interactive overflow-hidden"
          >
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase block mb-1 tracking-widest text-brand-accent group-hover:text-black">02/ New series</span>
              <h3 className="text-4xl mb-6">T75 OPEN-EAR</h3>
              <p className="text-sm opacity-80 uppercase italic tracking-tight mb-8">9D SOUND // HIFI AUDIO // SYNE TECH</p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-4xl font-black text-brand-accent group-hover:text-black transition-colors">$79</span>
                <ShoppingBag size={40} strokeWidth={3} />
              </div>
            </div>
            <div className="absolute right-[-10%] bottom-[-10%] w-[65%] opacity-20 grayscale group-hover:opacity-40 transition-opacity">
              <T75SVG />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group relative bg-brand-charcoal border-[4px] border-brand-white p-10 hover:bg-brand-accent hover:text-black transition-all interactive overflow-hidden"
          >
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase block mb-1 tracking-widest text-brand-accent group-hover:text-black">03/ Laptop Asset</span>
              <h3 className="text-4xl mb-6">HASSAN BOOK PRO</h3>
              <p className="text-sm opacity-80 uppercase italic tracking-tight mb-8">16GB RAM // 1TB SSD // HB_OS CORE</p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-4xl font-black">$899</span>
                <ShoppingBag size={40} strokeWidth={3} />
              </div>
            </div>
            <div className="absolute right-[-5%] bottom-[0%] w-[70%] opacity-20 grayscale group-hover:opacity-40 transition-opacity">
              <LaptopSVG />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group relative bg-brand-mid border-[4px] border-brand-white p-8 flex items-center justify-between hover:border-brand-accent transition-all interactive"
          >
            <div>
              <span className="text-[10px] font-black uppercase block mb-1 tracking-widest">04/ Asset</span>
              <h3 className="text-3xl">PURE SOUND LITE</h3>
              <span className="font-mono text-2xl font-black text-brand-accent group-hover:text-white transition-colors">$49</span>
            </div>
            <div className="w-32 opacity-60 group-hover:scale-110 transition-transform">
              <LiteSVG />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group relative bg-brand-mid border-[4px] border-brand-accent p-8 flex items-center justify-between hover:bg-brand-accent hover:text-black transition-all interactive"
          >
            <div>
              <span className="text-[10px] font-black uppercase block mb-1 tracking-widest group-hover:text-black">05/ Premium</span>
              <h3 className="text-3xl">ELITE NEON</h3>
              <span className="font-mono text-2xl font-black text-white group-hover:text-black transition-colors">$129</span>
            </div>
            <div className="w-32 opacity-80 group-hover:scale-110 transition-transform">
              <NeonSVG />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="bg-brand-charcoal px-6 sm:px-15 py-30 border-y-[4px] border-brand-accent">
        <div className="grid lg:grid-cols-3 gap-12">
          {[
            { label: '01', title: 'SONIC ENGINE', desc: 'Optimizing core rendering pipelines for low-latency feedback.' },
            { label: '02', title: 'CELL CAPACITY', desc: 'Extended 40H operational cycles for continuous execution.' },
            { label: '03', title: 'FLUID SHIELD', desc: 'IPX5 integrity protocols maintained in high-moisture zones.' }
          ].map((item) => (
            <div key={item.label} className="group cursor-pointer">
              <span className="text-brand-accent text-[12px] font-black uppercase block mb-2 tracking-widest">{item.label}/ Modules</span>
              <h3 className="text-4xl mb-4 border-b border-transparent group-hover:border-brand-accent pb-2 inline-block transition-all">
                {item.title}
              </h3>
              <p className="opacity-70 uppercase text-sm font-medium tracking-tight italic">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section id="compare" className="px-6 sm:px-15 py-30">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-18"
        >
          <p className="text-[11px] tracking-[4px] uppercase text-brand-accent mb-3">Compare</p>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-[1px]">
            FIND YOUR<br /><span className="text-white/50">PERFECT FIT</span>
          </h2>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-white/10 min-w-[700px]">
            <thead>
              <tr className="bg-brand-charcoal border-b border-white/10">
                <th className="p-8 text-left font-accent font-bold text-base">Feature</th>
                <th className="p-8 text-left font-accent font-bold text-base">
                  True Buds Lite<br />
                  <span className="inline-block bg-brand-accent text-black text-[9px] px-2 py-0.5 tracking-[2px] uppercase mt-2 font-accent font-bold">$49</span>
                </th>
                <th className="p-8 text-left font-accent font-bold text-base bg-brand-accent/10 border-x border-brand-accent/20">
                  Open-Ear Pro X1<br />
                  <span className="inline-block bg-brand-accent text-black text-[9px] px-2 py-0.5 tracking-[2px] uppercase mt-2 font-accent font-bold">Best Seller · $89</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: 'Battery Life', lite: '20H with case', pro: '40H with case' },
                { label: 'Waterproof Rating', lite: 'IPX4', pro: 'IPX5' },
                { label: 'Design', lite: 'In-Ear', pro: 'Open-Ear Hook' },
                { label: 'LED Battery Display', lite: <X size={18} className="text-white/20" />, pro: <Check size={18} className="text-brand-accent" /> },
                { label: 'Smart Touch Control', lite: <Check size={18} className="text-brand-accent" />, pro: <Check size={18} className="text-brand-accent" /> },
                { label: 'HD Call Quality', lite: <Check size={18} className="text-brand-accent" />, pro: <Check size={18} className="text-brand-accent" /> },
                { label: 'Open-Ear Comfort', lite: <X size={18} className="text-white/20" />, pro: <Check size={18} className="text-brand-accent" /> },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/10 hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 sm:p-8 text-white font-medium text-sm">{row.label}</td>
                  <td className="p-6 sm:p-8 text-white/50 text-sm font-light">{row.lite}</td>
                  <td className="p-6 sm:p-8 text-white text-sm font-normal bg-brand-accent/[0.04] border-x border-brand-accent/10">{row.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="bg-brand-black px-6 sm:px-15 py-30">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="sticky top-40 h-fit">
            <span className="text-brand-accent text-[10px] font-black uppercase block mb-1 tracking-widest">Feedback Loop</span>
            <h2 className="text-[100px] leading-[0.85]">SYSTEM<br />VALIDATED</h2>
          </div>
          <div className="flex flex-col gap-24">
            {[
              "\"The Open-Ear Pro X1 changed how I work out. No more ear fatigue and the sound is genuinely impressive. The 40H battery is not a gimmick.\"",
              "\"Hassan Brand is the real deal. The build quality feels premium and the touch controls work flawlessly every single time. Call quality is excellent.\"",
              "\"Grabbed the Lite as a gift and my brother hasn't taken them off since. Solid bass, comfortable fit, and the case charges fast. Great value.\""
            ].map((text, i) => (
              <div key={i} className="border-l-[4px] border-brand-accent pl-12 pb-12">
                <p className="text-2xl font-bold uppercase italic tracking-tighter mb-6 underline decoration-brand-accent decoration-style-dotted underline-offset-8">
                  {text}
                </p>
                <span className="font-mono text-brand-accent opacity-60">ID: USER_VA_0{i+1} // VERIFIED</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-brand-accent text-brand-black p-12 sm:p-24 m-6 sm:m-15 text-center">
        <h2 className="text-[60px] sm:text-[120px] leading-[0.8] mb-12">COMPLETE<br />SESSION</h2>
        <p className="text-xl font-black uppercase italic tracking-tighter mb-12 opacity-80">
          Finalize acquisition protocol. Secure transmission enabled.
        </p>
        <button className="bg-black text-white px-15 py-6 text-3xl font-black uppercase italic tracking-tighter hover:bg-white hover:text-black transition-colors flex items-center gap-6 mx-auto interactive">
          INITIALIZE <ArrowRight size={40} strokeWidth={4} />
        </button>
      </section>

      <footer className="px-6 sm:px-15 py-15 border-t-[4px] border-brand-accent">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="font-accent font-black text-3xl uppercase italic tracking-tighter">
            HASSAN AUDIO <span className="text-brand-accent">Labs</span>
          </div>
          <p className="font-mono text-xs opacity-50 uppercase tracking-widest">
            © 2026 // SONIC_CORE_ARCH // ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
}

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('.interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-brand-accent rounded-none pointer-events-none z-[9999]"
        animate={{
          x: mousePos.x - 6,
          y: mousePos.y - 6,
          scale: isHovering ? 2.5 : 1,
          rotate: isHovering ? 45 : 0
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-brand-accent rounded-none pointer-events-none z-[9998]"
        animate={{
          x: mousePos.x - 24,
          y: mousePos.y - 24,
          opacity: isHovering ? 0 : 0.5,
          rotate: mousePos.x / 10
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 200 }}
      />
    </>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-15 py-8 flex justify-between items-center bg-brand-black/90 backdrop-blur-md border-b-[4px] border-brand-accent mx-4 mt-4">
      <a href="#" className="font-accent font-black text-3xl italic tracking-tighter">
        SESSION:<span className="text-brand-accent">HASSAN</span>
      </a>
      <ul className="hidden md:flex gap-12 list-none">
        {['Products', 'Features', 'Reviews'].map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`} 
              className="text-white hover:text-brand-accent font-accent font-bold uppercase italic transition-colors text-sm"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <button className="bg-brand-accent text-black px-6 py-2 font-accent font-black uppercase italic hover:bg-white transition-all interactive">
        SYNC STORE
      </button>
    </nav>
  );
};
