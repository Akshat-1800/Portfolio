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
    <main className="min-h-screen bg-white dark:bg-gray-950">
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
