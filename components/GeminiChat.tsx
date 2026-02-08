
import React, { useState, useRef, useEffect } from 'react';
import { getVisaAdvice } from '../services/geminiService';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Welcome to Anas Visa Experts. How can I assist your journey today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const response = await getVisaAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: response || 'I am sorry, I could not process that request.' }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-display">
      {isOpen ? (
        <div className="flex flex-col w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-primary p-4 text-white flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">support_agent</span>
              <div>
                <h4 className="font-bold text-sm">AI Consultant</h4>
                <p className="text-[10px] opacity-80 uppercase tracking-widest">Always Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto bg-slate-50 dark:bg-slate-950 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-primary text-white rounded-br-none' 
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 px-4 py-2 rounded-2xl rounded-bl-none border border-slate-200 dark:border-slate-700 animate-pulse">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex gap-2 shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about Student/Work Visas..."
              className="flex-grow bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary dark:text-white"
            />
            <button
              onClick={handleSend}
              className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-xl hover:bg-blue-600 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary w-14 h-14 rounded-full shadow-lg hover:shadow-primary/40 hover:scale-110 transition-all active:scale-95 flex items-center justify-center text-white relative group"
        >
          <span className="material-symbols-outlined text-3xl">chat</span>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-slate-900 animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          <span className="absolute right-full mr-3 px-3 py-1 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Talk to our AI Expert</span>
        </button>
      )}
    </div>
  );
};

export default GeminiChat;
