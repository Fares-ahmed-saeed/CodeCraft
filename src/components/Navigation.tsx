import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Trigger entrance animation
    setTimeout(() => setIsLoaded(true), 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl shadow-2xl border-b border-primary/20" 
          : "bg-transparent"
      } ${isLoaded ? 'animate-slide-down' : 'opacity-0 -translate-y-full'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="animate-bounce-in delay-200">
              <img 
                src="/logo.jpg" 
                alt="Fares Ahmed Logo" 
                className="h-12 w-12 hover:animate-pulse transition-all duration-300 cursor-pointer rounded-full object-cover"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <button 
                onClick={() => scrollToSection("hero")}
                className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group animate-fade-in delay-400 px-4 py-2 hover:bg-primary/10 rounded-lg"
              >
                <span className="relative z-10">الرئيسية</span>
                <div className="absolute inset-0 bg-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
              <button 
                onClick={() => scrollToSection("portfolio")}
                className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group animate-fade-in delay-500 px-4 py-2 hover:bg-primary/10 rounded-lg"
              >
                <span className="relative z-10">أعمالي</span>
                <div className="absolute inset-0 bg-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
            </div>

            {/* CTA Button */}
            <Button 
              onClick={() => scrollToSection("contact")}
              className="hidden md:flex bg-warm-gradient hover:opacity-90 text-primary-foreground transition-all duration-300 px-6 py-2 rounded-full font-semibold animate-fade-in delay-600 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-primary/50"
            >
              تواصل معي
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-primary/20 shadow-2xl animate-slide-up">
        <div className="flex items-center justify-around py-3">
          <button 
            onClick={() => scrollToSection("hero")}
            className="flex flex-col items-center space-y-1 p-3 transition-all duration-300 hover:bg-primary/10 rounded-xl group"
          >
            <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
            </div>
            <span className="text-xs text-foreground group-hover:text-primary transition-colors duration-300">الرئيسية</span>
          </button>
          
          <button 
            onClick={() => scrollToSection("portfolio")}
            className="flex flex-col items-center space-y-1 p-3 transition-all duration-300 hover:bg-primary/10 rounded-xl group"
          >
            <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
              </svg>
            </div>
            <span className="text-xs text-foreground group-hover:text-primary transition-colors duration-300">أعمالي</span>
          </button>
          
          <button 
            onClick={() => scrollToSection("contact")}
            className="flex flex-col items-center space-y-1 p-3 transition-all duration-300 hover:bg-primary/10 rounded-xl group"
          >
            <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </div>
            <span className="text-xs text-foreground group-hover:text-primary transition-colors duration-300">تواصل</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;