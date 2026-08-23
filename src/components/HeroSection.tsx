import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';


const AiInsignia: React.FC = () => {
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-28 h-28 lg:w-32 lg:h-32 drop-shadow-[0_0_15px_rgba(212,175,55,0.25)]"
    >
      <defs>
        <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8DFD8" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8C6D4F" />
        </linearGradient>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#8C6D4F" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Glowing background */}
      <circle cx="60" cy="60" r="50" fill="url(#goldGlow)" />

      {/* Rotating dashed outer ring */}
      <motion.circle
        cx="60"
        cy="60"
        r="48"
        stroke="url(#goldGrad)"
        strokeWidth="1"
        strokeDasharray="4 4"
        opacity="0.6"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: '60px 60px' }}
      />

      {/* Outer fine solid ring */}
      <circle cx="60" cy="60" r="52" stroke="url(#goldGrad)" strokeWidth="0.5" opacity="0.3" />

      {/* Inner accent ring */}
      <circle cx="60" cy="60" r="40" stroke="url(#goldGrad)" strokeWidth="0.5" opacity="0.4" />

      {/* Neural network lines */}
      <g opacity="0.7">
        <line x1="35" y1="60" x2="60" y2="35" stroke="url(#lineGrad)" strokeWidth="0.75" />
        <line x1="35" y1="60" x2="60" y2="85" stroke="url(#lineGrad)" strokeWidth="0.75" />
        <line x1="60" y1="35" x2="85" y2="60" stroke="url(#lineGrad)" strokeWidth="0.75" />
        <line x1="60" y1="85" x2="85" y2="60" stroke="url(#lineGrad)" strokeWidth="0.75" />

        <line x1="60" y1="35" x2="60" y2="85" stroke="url(#lineGrad)" strokeWidth="0.5" strokeDasharray="1 2" />
        <line x1="35" y1="60" x2="85" y2="60" stroke="url(#lineGrad)" strokeWidth="0.5" strokeDasharray="1 2" />

        <line x1="45" y1="45" x2="60" y2="35" stroke="url(#lineGrad)" strokeWidth="0.5" />
        <line x1="45" y1="75" x2="60" y2="85" stroke="url(#lineGrad)" strokeWidth="0.5" />
        <line x1="75" y1="45" x2="60" y2="35" stroke="url(#lineGrad)" strokeWidth="0.5" />
        <line x1="75" y1="75" x2="60" y2="85" stroke="url(#lineGrad)" strokeWidth="0.5" />
        <line x1="45" y1="45" x2="35" y2="60" stroke="url(#lineGrad)" strokeWidth="0.5" />
        <line x1="45" y1="75" x2="35" y2="60" stroke="url(#lineGrad)" strokeWidth="0.5" />
        <line x1="75" y1="45" x2="85" y2="60" stroke="url(#lineGrad)" strokeWidth="0.5" />
        <line x1="75" y1="75" x2="85" y2="60" stroke="url(#lineGrad)" strokeWidth="0.5" />
      </g>

      {/* Neural nodes */}
      <circle cx="60" cy="60" r="4" fill="url(#goldGrad)" />
      <circle cx="60" cy="60" r="8" stroke="url(#goldGrad)" strokeWidth="0.5" opacity="0.5" />

      <motion.circle cx="35" cy="60" r="3" fill="#FFF5EB" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
      <motion.circle cx="85" cy="60" r="3" fill="#FFF5EB" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} />
      <motion.circle cx="60" cy="35" r="3" fill="#FFF5EB" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.75 }} />
      <motion.circle cx="60" cy="85" r="3" fill="#FFF5EB" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2.25 }} />

      <circle cx="45" cy="45" r="2" fill="url(#goldGrad)" opacity="0.8" />
      <circle cx="75" cy="45" r="2" fill="url(#goldGrad)" opacity="0.8" />
      <circle cx="45" cy="75" r="2" fill="url(#goldGrad)" opacity="0.8" />
      <circle cx="75" cy="75" r="2" fill="url(#goldGrad)" opacity="0.8" />

      {/* Subtle < > symbol inside center node */}
      <g opacity="0.85">
        <path d="M 54 57 L 50 60 L 54 63" stroke="url(#goldGrad)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 66 57 L 70 60 L 66 63" stroke="url(#goldGrad)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'AI LAB', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  // Autoplay muted video on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log('Video autoplay failed:', err);
      });
    }
  }, []);

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => console.log('Video playback error:', err));
    }
  };

  const handleSkipIntro = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        if (videoRef.current && !videoRef.current.muted) {
          videoRef.current.muted = true;
          setIsMuted(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-[#000000] text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black cursor-none">
      {/* ================= 1. MINIMAL CUSTOM CURSOR ================= */}
      {cursorPos.x >= 0 && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#D4AF37]/40 flex items-center justify-center backdrop-blur-[1px]"
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.1)' : 'rgba(232, 223, 216, 0.95)',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
        />
      )}

      {/* ================= 2. FIXED VIDEO LAYER ================= */}
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#000000] flex items-center justify-end"
      >
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="h-screen w-auto max-w-none object-contain origin-right scale-95 md:scale-[0.98] lg:scale-100"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Seamless Soft Left Edge Blend */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#000000] via-[#000000]/85 to-transparent pointer-events-none" />

        {/* ================= 3. ANIMATED WATERMARK EMBLEM ================= */}
        <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-12 pointer-events-none flex items-center justify-center z-10">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-36 h-36 bg-[#000000]/85 rounded-full blur-xl" />

            <motion.div
              animate={{
                y: [-3, 3, -3],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative flex items-center justify-center"
            >
              <AiInsignia />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ================= 4. CONTENT LAYER ================= */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full px-6 sm:px-12 lg:px-16 pt-6 pb-8 pointer-events-none">

        {/* Navigation Bar */}
        <header className="relative flex items-center justify-between w-full pointer-events-auto">
          <div
            className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase select-none opacity-0 pointer-events-none"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            SHAHZAD.
          </div>

          {/* Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] tracking-[0.28em] font-medium uppercase text-[#E8DFD8] absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group py-1 transition-colors duration-300 hover:text-[#D4AF37]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]/50 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="relative ml-auto md:ml-0 flex flex-col items-end pointer-events-auto">
            <a
              href="#contact"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group flex items-center space-x-2 text-[11px] tracking-[0.24em] font-light uppercase py-2 px-4 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#E8DFD8] transition-all duration-300 backdrop-blur-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>LET&apos;S TALK</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                ↗
              </span>
            </a>

            {/* Video & Audio Controls */}
            <div className="absolute top-full right-0 mt-3 flex items-center gap-3 select-none z-30">
              {/* Mute/Unmute Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMute}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[#8C6D4F]/30 bg-black/40 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] text-[#E8DFD8] hover:text-[#FFF5EB] backdrop-blur-md transition-colors duration-300 cursor-none"
                title={isMuted ? "Sound On" : "Sound Off"}
              >
                {isMuted ? (
                  // Sound Off (Muted) Icon
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.063.922-2.063 2.063v4.875c0 1.141.922 2.062 2.063 2.062h1.932l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
                  </svg>
                ) : (
                  // Sound On (Unmuted) Icon
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.063.922-2.063 2.063v4.875c0 1.141.922 2.062 2.063 2.062h1.932l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06zM18.563 12c0-2.182-1.102-4.108-2.775-5.263a.75.75 0 10-.828 1.258 4.777 4.777 0 011.603 3.655 4.777 4.777 0 01-1.603 3.655.75.75 0 00.828 1.258A6.277 6.277 0 0018.563 12zm3.322 0c0-3.69-1.926-6.93-4.828-8.79a.75.75 0 00-.814 1.267A9.039 9.039 0 0120.635 12a9.039 9.039 0 01-4.391 7.523.75.75 0 10.814 1.267C19.959 18.93 21.885 15.69 21.885 12z" />
                  </svg>
                )}
              </motion.button>

              {/* Replay Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleReplay}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[#8C6D4F]/30 bg-black/40 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] text-[#E8DFD8] hover:text-[#FFF5EB] backdrop-blur-md transition-colors duration-300 cursor-none"
                title="Replay Video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M21.5 2v6h-6" />
                  <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                </svg>
              </motion.button>

              {/* Skip Intro Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleSkipIntro}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex items-center gap-2 px-4 h-10 rounded-full border border-[#8C6D4F]/30 bg-black/40 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] text-[#E8DFD8] hover:text-[#FFF5EB] backdrop-blur-md transition-colors duration-300 text-[10px] tracking-[0.2em] font-medium uppercase cursor-none"
                title="Skip Intro"
              >
                <span>SKIP INTRO</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <path d="m6 17 5-5-5-5M13 17l5-5-5-5" />
                </svg>
              </motion.button>
            </div>
          </div>
        </header>

        {/* Main Hero Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-4 pb-2 my-auto">

          {/* LEFT: Balanced Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[37rem] xl:max-w-[40rem] pointer-events-auto z-20"
          >
            {/* Massive Condensed Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-3.5 select-none">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[7.8rem] tracking-tight uppercase leading-[0.83]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {/* Line 1: HI, I'M */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#E8DFD8] to-[#FFFFFF] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)] shimmer-text">
                  HI, I'M
                </span>

                {/* Line 2: MOHAMMED */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5EB] via-[#D4AF37] to-[#FFF5EB] drop-shadow-[0_8px_25px_rgba(212,175,55,0.35)] shimmer-text">
                  MOHAMMED
                </span>

                {/* Line 3: SHAHZAD */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#8C6D4F] to-[#D4AF37] drop-shadow-[0_10px_30px_rgba(140,109,79,0.4)] shimmer-text">
                  SHAHZAD
                </span>
              </h1>
            </motion.div>

            {/* Subtitle Technologies */}
            <motion.div variants={fadeUpVariants} className="mb-4">
              <p
                className="text-[10px] sm:text-[11px] md:text-xs font-normal tracking-[0.28em] uppercase text-[#A8988B]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                AI & MACHINE LEARNING ENGINEER <span className="text-[#8C6D4F] mx-1">•</span> DATA SCIENCE <span className="text-[#8C6D4F] mx-1">•</span> GENERATIVE AI
              </p>
            </motion.div>

            {/* 3-Line Description */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[13.5px] font-light text-[#A8988B] leading-[1.8] tracking-wide max-w-lg mb-6 space-y-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                I build intelligent systems that transform data and ideas into real-world AI solutions.
                <br />
                From machine learning and computer vision to Generative AI and RAG, I create practical technology with meaningful impact.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-row items-center gap-4 sm:gap-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {/* Explore My Work CTA */}
              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 0 25px rgba(212, 175, 55, 0.4)',
                  borderColor: '#D4AF37'
                }}
                className="relative inline-flex items-center space-x-3 px-6 sm:px-7 py-3.5 border border-[#8C6D4F] bg-[#100D0B]/80 hover:border-[#D4AF37] text-[#FFF5EB] hover:text-[#FFF5EB] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212, 175, 55, 0.18)]"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8DFD8]/40 to-transparent pointer-events-none" />
                <span>EXPLORE MY PROJECTS</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                  ↗
                </span>
              </motion.a>

              {/* Download Resume Button */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 0 20px rgba(140, 109, 79, 0.2)',
                  borderColor: '#E8DFD8'
                }}
                className="relative inline-flex items-center space-x-2 px-6 sm:px-7 py-3.5 border border-[#8C6D4F]/40 hover:border-[#8C6D4F] text-[#A8988B] hover:text-[#E8DFD8] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
              >
                <span>DOWNLOAD RESUME</span>
                <span className="transform transition-transform duration-300 group-hover:translate-y-0.5 text-xs">
                  ↓
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Floating Quote & Signature Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-start pointer-events-auto pr-8 xl:pr-12 mr-4 z-20 select-none"
          >
            {/* 1. Quote Mark */}
            <span className="text-xl text-[#D4AF37] leading-none font-serif mb-2">
              “
            </span>

            {/* 2. Compact Two-Line Statement */}
            <div
              className="text-[9.5px] font-medium tracking-[0.24em] uppercase text-[#E8DFD8] space-y-1 mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>AI IS MY CRAFT.</p>
              <p>IMPACT IS MY GOAL.</p>
            </div>

            {/* 3. Gold Accent Line */}
            <div className="w-28 h-[1px] bg-gradient-to-r from-[#D4AF37] via-[#E8DFD8]/70 to-transparent shadow-[0_0_8px_rgba(212, 175, 55, 0.4)] mb-2" />

            {/* 4. Fine Monoline Calligraphy Signature */}
            <div
              className="text-[2.2rem] text-[#D4AF37] font-normal leading-none -ml-0.5"
              style={{
                fontFamily: "'Herr Von Muellerhoff', 'Allura', cursive",
                letterSpacing: '0.04em',
              }}
            >
              mohammed Shahzad
            </div>
          </motion.div>
        </div>



        {/* Bottom Spacer */}
        <div className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;