import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="portfolio" className="animate-fade-in-up">
          <Portfolio />
        </section>
        <section id="contact" className="animate-fade-in-up">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;