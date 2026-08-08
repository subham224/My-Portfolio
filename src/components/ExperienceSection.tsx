"use client";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { Experience } from "../types";

export default function ExperienceSection({ experience }: { experience: Experience[] }) {
  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Briefcase className="text-cyan-400" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Experience</h2>
        </div>
        <div className="h-1 w-20 bg-cyan-500 rounded-full mx-auto" />
      </motion.div>

      <div className="relative border-l-2 border-slate-800 ml-3 sm:ml-4 space-y-10">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-6 sm:pl-8"
          >
            <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-950" />

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5 sm:p-6 hover:border-cyan-500/50 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-slate-100">{exp.role}</h3>
                <span className="text-xs sm:text-sm text-cyan-400 font-mono whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>

              <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                <span className="font-medium text-slate-300">{exp.organization}</span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {exp.location}
                </span>
              </div>

              <ul className="space-y-2">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-slate-400 leading-relaxed text-sm sm:text-base flex gap-2">
                    <span className="text-cyan-400 mt-1.5 flex-shrink-0">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
