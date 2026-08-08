"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-slate-800/50 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tighter text-cyan-400 z-50">
          SP
        </a>

        {/* Desktop Menu (Hidden below lg since there are 6 items now) */}
        <div className="hidden lg:flex gap-6 xl:gap-8 text-sm font-medium text-slate-400">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-cyan-400 transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Hamburger Icon (Visible below lg) */}
        <button 
          className="lg:hidden text-slate-300 z-50 p-1 -mr-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Fullscreen Menu Overlay (below lg) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 top-0 left-0 w-full h-[100dvh] bg-slate-950 flex flex-col items-center justify-center gap-6 sm:gap-8 lg:hidden overflow-y-auto py-20"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className="text-xl sm:text-2xl font-bold text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}