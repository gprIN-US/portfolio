import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="main">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Publications />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
