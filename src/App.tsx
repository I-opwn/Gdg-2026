/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // In a real app, you'd send this to your backend
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#E0F7FA] flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-200/50 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-200/50 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-2xl w-full"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center justify-center w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-[#29B6F6] to-[#00E5FF] shadow-lg shadow-cyan-200/50"
        >
          <Mail className="w-8 h-8 text-white" />
        </motion.div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1A202C] mb-4 leading-tight">
          Something Amazing <br />
          <span className="bg-gradient-to-r from-[#29B6F6] to-[#00E5FF] bg-clip-text text-transparent">
            Is
          </span>{" "}
          <span className="text-[#0288D1]">Coming</span>{" "}
          <span className="bg-gradient-to-r from-[#29B6F6] to-[#00E5FF] bg-clip-text text-transparent">
            Soon
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-lg mx-auto leading-relaxed">
          We're crafting an exceptional experience just for you. Join our waitlist to be the first to know when we launch.
        </p>

        {/* Form */}
        <div className="max-w-md mx-auto mb-8">
          <form 
            onSubmit={handleSubmit}
            className="bg-white p-2 rounded-3xl shadow-xl shadow-cyan-100/50 flex flex-col sm:flex-row gap-2"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-2xl text-slate-700 focus:outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={isSubmitted}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0288D1] to-[#26C6DA] text-white font-semibold shadow-lg hover:shadow-cyan-200/50 transition-all active:scale-95 disabled:opacity-70"
            >
              {isSubmitted ? 'Added!' : 'Notify Me'}
            </button>
          </form>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-slate-500 font-medium">
          No spam, ever. Unsubscribe at any time.
        </p>
      </motion.div>

      {/* Subtle floating elements for extra polish */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[15%] w-4 h-4 rounded-full bg-cyan-300/30 hidden md:block"
      />
      <motion.div
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-[15%] w-6 h-6 rounded-full bg-blue-300/30 hidden md:block"
      />
    </div>
  );
}
