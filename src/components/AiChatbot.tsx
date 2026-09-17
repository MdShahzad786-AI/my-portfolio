import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateBotResponse, STARTER_QUESTIONS } from '../utils/chatEngine';
import type { ChatMessage } from '../utils/chatEngine';

interface AiChatbotProps {
  isOpenExternal?: boolean;
  onToggleExternal?: (open: boolean) => void;
  onCloseExternal?: () => void;
}

export const AiChatbot: React.FC<AiChatbotProps> = ({
  isOpenExternal,
  onToggleExternal,
  onCloseExternal,
}) => {
  const [isOpen, setIsOpenState] = useState(false);

  useEffect(() => {
    if (isOpenExternal !== undefined) {
      setIsOpenState(isOpenExternal);
    }
  }, [isOpenExternal]);

  const setIsOpen = (val: boolean) => {
    setIsOpenState(val);
    if (onToggleExternal) {
      onToggleExternal(val);
    }
    if (!val && onCloseExternal) {
      onCloseExternal();
    }
  };

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: '👋 **Hello! I am Mohammed\'s AI Assistant.**\n\nAsk me anything about Mohammed Shahzad\'s AI/ML skills, RAG projects, internships, education, or contact details!',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedQuestions: STARTER_QUESTIONS
    }
  ]);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate natural AI response delay
    setTimeout(() => {
      const response = generateBotResponse(query);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedQuestions: response.suggestedQuestions
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleClear = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: '🧹 Conversation reset.\n\nAsk me anything about Mohammed Shahzad!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedQuestions: STARTER_QUESTIONS
      }
    ]);
  };

  // Helper to render basic markdown bold/bullets/links
  const renderFormattedText = (text: string) => {
    const paragraphs = text.split('\n');

    return paragraphs.map((para, pIdx) => {
      if (!para) return <div key={pIdx} className="h-2" />;

      // Format markdown links [text](url)
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = linkRegex.exec(para)) !== null) {
        if (match.index > lastIndex) {
          parts.push(para.substring(lastIndex, match.index));
        }
        const linkText = match[1];
        const linkUrl = match[2];
        parts.push(
          <a
            key={`link-${match.index}`}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] underline hover:text-white transition-colors duration-200 font-medium inline-flex items-center gap-1"
          >
            {linkText}
            <svg className="w-3 h-3 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        );
        lastIndex = linkRegex.lastIndex;
      }
      if (lastIndex < para.length) {
        parts.push(para.substring(lastIndex));
      }

      // Format bold text **text**
      const formatBold = (contentArray: (string | React.ReactNode)[]) => {
        return contentArray.map((item, i) => {
          if (typeof item !== 'string') return item;
          const boldParts = item.split(/\*\*(.*?)\*\*/g);
          return boldParts.map((sub, j) =>
            j % 2 === 1 ? <strong key={`b-${i}-${j}`} className="font-semibold text-white">{sub}</strong> : sub
          );
        });
      };

      const formattedContent = formatBold(parts);

      return (
        <p key={pIdx} className="leading-relaxed mb-1.5 text-xs sm:text-[13px] text-[#E8DFD8]">
          {formattedContent}
        </p>
      );
    });
  };

  return (
    <>
      {/* ================= FLOATING TRIGGER BUTTON ================= */}
      <div className="fixed bottom-6 right-6 z-[99999] flex items-center pointer-events-auto select-none">
        {!isOpen && (
          <motion.button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(true);
            }}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex items-center space-x-2 mr-3 px-3.5 py-2 rounded-full bg-[#100D0B] border border-[#D4AF37]/50 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:border-[#D4AF37] hover:bg-[#1A1613] transition-all duration-200 cursor-pointer text-left"
            aria-label="Open AI Assistant"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse shrink-0" />
            <span className="text-[11px] font-semibold tracking-wider text-[#E8DFD8] hover:text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Ask Shahzad AI
            </span>
          </motion.button>
        )}

        <motion.button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-br from-[#1A1613] via-[#100D0B] to-[#000000] border border-[#D4AF37]/50 shadow-[0_0_25px_rgba(212,175,55,0.3)] text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-200 cursor-pointer focus:outline-none"
          aria-label="Toggle AI Assistant Chat"
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 rounded-full bg-[#D4AF37]/15 blur-md group-hover:bg-[#D4AF37]/30 transition-all duration-200" />

          {isOpen ? (
            <svg className="w-6 h-6 relative z-10 text-[#E8DFD8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="relative z-10 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#D4AF37] rounded-full border-2 border-black animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#D4AF37] rounded-full border-2 border-black" />
            </div>
          )}
        </motion.button>
      </div>

      {/* ================= CHAT MODAL DIALOG ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-20 right-4 sm:right-6 z-[99999] w-[calc(100vw-2rem)] sm:w-[470px] md:w-[480px] max-h-[84vh] h-[600px] flex flex-col rounded-2xl bg-[#0D0B0A]/98 border border-[#D4AF37]/40 shadow-[0_20px_60px_rgba(0,0,0,0.95)] backdrop-blur-xl overflow-hidden font-sans pointer-events-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-[#14100E] border-b border-[#8C6D4F]/20">
              <div className="flex items-center space-x-3">
                <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-[#8C6D4F] to-[#D4AF37] p-[1px] shadow-[0_0_12px_rgba(212,175,55,0.3)]">
                  <div className="w-full h-full rounded-full bg-[#100D0B] flex items-center justify-center text-[#D4AF37]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-black" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#FFF5EB] tracking-wide flex items-center gap-1.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Shahzad AI
                    <span className="text-[10px] font-mono font-normal px-1.5 py-0.5 rounded bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                      ONLINE
                    </span>
                  </h3>
                  <p className="text-[10px] text-[#A8988B] font-light">
                    Ask about skills, projects & contact info
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-1.5">
                <button
                  onClick={handleClear}
                  title="Clear Chat"
                  className="p-1.5 rounded-lg text-[#A8988B] hover:text-[#D4AF37] hover:bg-[#8C6D4F]/10 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Minimize"
                  className="p-1.5 rounded-lg text-[#A8988B] hover:text-white hover:bg-[#8C6D4F]/10 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages Feed */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-[#8C6D4F]/30">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl shadow-md ${msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8952B] text-black rounded-br-none font-medium'
                      : 'bg-[#181412] border border-[#8C6D4F]/30 text-[#E8DFD8] rounded-bl-none'
                      }`}
                  >
                    {msg.sender === 'user' ? (
                      <p className="text-xs sm:text-[13px] leading-relaxed select-text font-sans">{msg.text}</p>
                    ) : (
                      renderFormattedText(msg.text)
                    )}

                    <div className="mt-1 flex items-center justify-end space-x-1">
                      <span
                        className={`text-[9px] ${msg.sender === 'user' ? 'text-black/60' : 'text-[#8C6D4F]'
                          }`}
                      >
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>

                  {/* Suggested Question Chips */}
                  {msg.suggestedQuestions && msg.suggestedQuestions.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[90%]">
                      {msg.suggestedQuestions.map((q, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSend(q)}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-[#100D0B] border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-200 text-left cursor-pointer"
                        >
                          💬 {q}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center space-x-2 p-3.5 rounded-2xl bg-[#181412] border border-[#8C6D4F]/30 max-w-[100px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-[#14100E] border-t border-[#8C6D4F]/20 flex items-center space-x-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects, details..."
                className="flex-1 bg-[#0A0807] border border-[#8C6D4F]/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#E8DFD8] placeholder-[#736458] focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#8C6D4F] text-black disabled:opacity-30 disabled:cursor-not-allowed hover:brightness-110 transition-all font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
