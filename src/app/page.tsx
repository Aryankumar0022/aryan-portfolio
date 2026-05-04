import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Qualifications from "@/components/Qualifications";
import Featured from "@/components/Featured";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative">
      {/* Floating background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Qualifications />
      <Featured />
      <Contact />
    </div>
  );
}
