import ThreeBackground from "@/components/ThreeBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectGrid from "@/components/ProjectGrid";
import ContactFooter from "@/components/ContactFooter";
import portfolioData from "@/data/portfolio.json";
import CertificationsSection from '@/components/CertificationsSection';
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="min-h-screen relative bg-slate-900 text-slate-200 overflow-x-hidden">
      <ThreeBackground />

      <Navbar />

      <div className="relative z-10">
        <HeroSection data={portfolioData.personalInfo} />

        <AboutSection about={portfolioData.personalInfo.about} />

        <ExperienceSection experience={portfolioData.experience} />

        <EducationSection education={portfolioData.education} />

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
