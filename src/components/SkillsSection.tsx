"use client";
import { motion } from "framer-motion";

export default function SkillsSection({ skills }: { skills: string[] }) {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-slate-100 mb-12">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-full text-cyan-400 font-medium hover:bg-slate-700 hover:border-cyan-500 transition-all cursor-default shadow-lg shadow-cyan-900/10"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}