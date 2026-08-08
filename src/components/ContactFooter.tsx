"use client";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { PersonalInfo } from "../types";

export default function ContactFooter({ data }: { data: PersonalInfo }) {
  return (
    <footer id="contact" className="bg-slate-950 py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-8">Contact me</h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-8 mb-12">
            <div className="flex items-center justify-center gap-3 text-slate-400 break-all sm:break-normal">
                <Mail className="text-cyan-400 flex-shrink-0" size={20} />
                <a href={`mailto:${data.email}`} className="hover:text-white transition-colors">
                    {data.email}
                </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-400">
                <Phone className="text-cyan-400 flex-shrink-0" size={20} />
                <span>{data.phone}</span>
            </div>
        </div>

        <div className="mb-12">
             <p className="text-slate-500 mb-4">I&apos;m active on these platforms:</p>
             <div className="flex justify-center gap-6">
                <a href={`https://github.com/${data.github}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all">
                    <Github size={32} />
                </a>
                <a href={`https://linkedin.com/${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 hover:scale-110 transition-all">
                    <Linkedin size={32} />
                </a>
             </div>
        </div>

        <div className="text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} {data.name}. All rights reserved.</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-4 hover:text-cyan-400 transition-colors"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}