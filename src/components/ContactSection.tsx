// src/components/ContactSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative w-full bg-[#000000] text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Centered Content Block */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          
          {/* Eyebrow Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-4 mb-6"
          >
            <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/80" />
            <span
              className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              05 / CONTACT
            </span>
            <div className="w-10 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 to-transparent" />
          </motion.div>
 
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2
              className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E8DFD8] to-[#8C6D4F] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                INITIALIZE
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5EB] via-[#D4AF37] to-[#100D0B] drop-shadow-[0_8px_25px_rgba(212,175,55,0.35)]">
                TRANSMISSION.
              </span>
            </h2>
          </motion.div>
 
          <p
            className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md mb-10"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Interested in working together, discussing an AI project, or exploring an opportunity? Feel free to reach out and let&apos;s build something intelligent.
          </p>
 
          {/* Direct Channels */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light text-[#A8988B] w-full max-w-xl"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <div className="flex items-center justify-center sm:justify-start space-x-3 group border border-[#8C6D4F]/20 bg-[#100D0B] p-4 rounded-sm hover:border-[#D4AF37]/50 transition-colors">
              <span className="text-[#D4AF37] font-mono text-[9px]">// EMAIL:</span>
              <a 
                href="mailto:mdshahzad6202@gmail.com" 
                className="hover:text-white transition-colors duration-300 font-medium"
              >
                mdshahzad6202@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-3 group border border-[#8C6D4F]/20 bg-[#100D0B] p-4 rounded-sm hover:border-[#D4AF37]/50 transition-colors">
              <span className="text-[#D4AF37] font-mono text-[9px]">// LINKEDIN:</span>
              <a 
                href="https://linkedin.com/in/mohammed-shahzad07" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors duration-300 font-medium"
              >
                mohammed-shahzad07
              </a>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-3 group border border-[#8C6D4F]/20 bg-[#100D0B] p-4 rounded-sm hover:border-[#D4AF37]/50 transition-colors">
              <span className="text-[#D4AF37] font-mono text-[9px]">// GITHUB:</span>
              <a 
                href="https://github.com/MdShahzad786-AI" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors duration-300 font-medium"
              >
                MdShahzad786-AI
              </a>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-3 group border border-[#8C6D4F]/20 bg-[#100D0B] p-4 rounded-sm hover:border-[#D4AF37]/50 transition-colors">
              <span className="text-[#D4AF37] font-mono text-[9px]">// PHONE:</span>
              <a 
                href="tel:+916207255651" 
                className="hover:text-white transition-colors duration-300 font-medium"
              >
                +91 62072 55651
              </a>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-3 group border border-[#8C6D4F]/20 bg-[#100D0B] p-4 rounded-sm transition-colors">
              <span className="text-[#D4AF37] font-mono text-[9px]">// LOCATION:</span>
              <span className="text-[#A8988B] font-medium">Jamshedpur, Jharkhand, India</span>
            </div>
          </div>
        </div>
 
        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            MOHAMMED SHAHZAD // PORTFOLIO 2026
          </span>
          <span className="text-[10px] font-mono text-[#8C6D4F]">
            © 2026 • BUILT WITH INTELLIGENCE
          </span>
        </div>
 
      </div>
    </footer>
  );
};

export default ContactSection;