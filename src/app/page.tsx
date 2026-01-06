import ThreeBackground from "@/components/ThreeBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectGrid from "@/components/ProjectGrid";
import ContactFooter from "@/components/ContactFooter";
import portfolioData from "@/data/portfolio.json";
import CertificationsSection from '@/components/CertificationsSection';
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="min-h-screen relative bg-slate-900 text-slate-200">
      <ThreeBackground />

      {/* Navbar */}
      {/* <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 backdrop-blur-md border-b border-slate-800/50">
           <span className="text-xl font-bold tracking-tighter text-cyan-400">SP.</span>
           <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
           </div>
      </nav> */}
      {/* Use the new Responsive Navbar */}
      <Navbar />

      <div className="relative z-10">
        <HeroSection data={portfolioData.personalInfo} />
        
        <AboutSection about={portfolioData.personalInfo.about} />

        {/* Certifications Section */}
        <CertificationsSection certifications={portfolioData.certifications} />

        
        <SkillsSection skills={portfolioData.skills} />
        
        <div id="projects">
            <ProjectGrid projects={portfolioData.projects} />
        </div>

        <ContactFooter data={portfolioData.personalInfo} />
      </div>
    </main>
  );
}