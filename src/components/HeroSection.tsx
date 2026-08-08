"use client";
import { motion } from "framer-motion";
import { PersonalInfo } from "../types";

export default function HeroSection({ data }: { data: PersonalInfo }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-24 pb-16">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-cyan-500/20 rounded-full blur-[100px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl w-full"
      >
        <h2 className="text-cyan-400 tracking-widest text-xs sm:text-sm uppercase font-bold mb-4 sm:mb-6">
          {data.title}
        </h2>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-100 mb-4 sm:mb-6 tracking-tight break-words">
          {data.heroTitle}
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-slate-400 font-light mb-6 sm:mb-8">
           {data.heroSubtitle}
        </p>

        <p className="text-slate-400 max-w-xl mx-auto mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed">
          {data.heroDescription}
        </p>

        <div className="flex flex-col xs:flex-row gap-4 justify-center items-center">
            <a href="#projects" className="w-full xs:w-auto px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-bold transition-all text-center">
                See my projects
            </a>
            <a href="#contact" className="w-full xs:w-auto px-8 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white rounded-full font-bold transition-all text-center">
                Contact me
            </a>
        </div>
      </motion.div>
    </section>
  );
}