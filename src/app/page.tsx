import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects"; 
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact"; // <--- Import this
import Footer from "@/components/Footer";     

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen selection:bg-blue-500/30 transition-colors duration-300">
      <Navbar />
      <div className="flex flex-col gap-10 md:gap-20">
        <div className="pt-20"><Hero /></div>
        <TechMarquee />
        <Skills />
        <Experience />
        <Projects />
        <BlogSection />
        <Contact /> {/* <--- Add this here */}
        <Footer />
      </div>
    </main>
  );
}