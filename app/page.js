import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/sections/HeroSection";
import ProfileSection from "../components/sections/ProfileSection";
import EducationSection from "../components/sections/EducationSection";
import CertificatesSection from "../components/sections/CertificatesSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import CodingProfilesSection from "../components/sections/CodingProfilesSection";
import ExploringSection from "../components/sections/ExploringSection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 noise-overlay gradient-bg-animated relative max-w-full overflow-x-hidden">
      {/* Subtle ambient glow orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-purple-500/5 dark:bg-purple-500/8 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-pink-500/3 dark:bg-pink-500/5 rounded-full blur-xl sm:blur-3xl" />
      </div>
      
      <Navbar />
      <HeroSection />
      <ProfileSection />
      <EducationSection />
      <CertificatesSection />
      <ProjectsSection />
      <CodingProfilesSection />
      <ExploringSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
