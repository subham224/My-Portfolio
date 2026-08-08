"use client";
import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { Education } from "../types";

export default function EducationSection({ education }: { education: Education[] }) {
  return (
    <section id="education" className="py-16 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <GraduationCap className="text-cyan-400" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Education</h2>
        </div>
        <div className="h-1 w-20 bg-cyan-500 rounded-full mx-auto" />
      </motion.div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5 sm:p-6 hover:border-cyan-500/50 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-100">{edu.institution}</h3>
              <span className="text-xs sm:text-sm text-cyan-400 font-mono whitespace-nowrap">
                {edu.duration}
              </span>
            </div>
            <p className="text-slate-300 mb-1 text-sm sm:text-base">{edu.degree}</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-400 text-sm">
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {edu.location}
              </span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span>{edu.detail}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
