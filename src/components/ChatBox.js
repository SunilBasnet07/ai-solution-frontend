'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { createChat } from '@/api/chat';

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    { id: 'welcome', role: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [isSending, setIsSending] = useState(false);
console.log(inputValue) 
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages.length]);

  const handleSend = async () => {
    if (isSending) return;
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const userMessage = { id: `u-${Date.now()}` , role: 'user', text: trimmed };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsSending(true);

    try {
      const response = await createChat({ question: trimmed });
      const botText = typeof response === 'string'
        ? response
        : (response?.answer || response?.message || "Thanks! We'll get back to you soon.");
      const botMessage = { id: `b-${Date.now()}`, role: 'bot', text: botText };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const botMessage = { id: `b-${Date.now()}`, role: 'bot', text: 'Sorry, something went wrong. Please try again.' };
      setMessages(prev => [...prev, botMessage]);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          aria-label="Open chat"
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl transition-all"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 h-96 bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Chat with us</span>
            </div>
            <button
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-slate-50">
            {messages.map(msg => (
              <div key={msg.id} className={msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                <div
                  className={
                    msg.role === 'user'
                      ? 'max-w-[75%] rounded-2xl rounded-br-sm bg-blue-600 text-white px-4 py-2'
                      : 'max-w-[75%] rounded-2xl rounded-bl-sm bg-white border border-slate-200 text-slate-800 px-4 py-2'
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isSending && (
              <div className="flex justify-start">
                <div className="max-w-[75%] rounded-2xl rounded-bl-sm bg-white border border-slate-200 text-slate-800 px-4 py-2">
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:120ms]" />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:240ms]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-slate-200 bg-white">
            <div className="flex items-center space-x-2">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="Type your message..."
                className="flex-1 resize-none rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
              <button
                onClick={handleSend}
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 text-white px-3 py-2 hover:bg-blue-700 disabled:opacity-50"
                disabled={!inputValue.trim() || isSending}
              >
                {isSending ? (
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


