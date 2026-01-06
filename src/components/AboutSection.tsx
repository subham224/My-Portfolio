"use client";
import { motion } from "framer-motion";

export default function AboutSection({ about }: { about: string }) {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700"
      >
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">About me</h2>
        <div className="text-slate-300 leading-relaxed whitespace-pre-line text-lg">
          {about}
        </div>
        <div className="mt-8">
            <a href="#contact" className="text-cyan-400 font-bold hover:underline cursor-pointer">
                Let's collaborate →
            </a>
        </div>
      </motion.div>
    </section>
  );
}