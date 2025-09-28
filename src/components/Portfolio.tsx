import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Import project images
import quranImage from "@/assets/quran-kariem.png";
import gamingImage from "@/assets/elfares-gaming.png";
import portfolioImage from "@/assets/nextvision.png";
import gymImage from "@/assets/gym.png";
import multiToolsImage from "/lovable-uploads/6ce00e27-5970-499d-bd8f-c2e962ce115e.png";

const Portfolio = () => {
  const projects = [
    {
      title: "القرآن الكريم",
      description: "موقع إسلامي منظم لقراءة القرآن الكريم مع خدمة البحث في السور والآيات، وتصميم متجاوب وتجربة مستخدم مميزة",
      image: quranImage,
      tech: ["React", "Next.js", "Tailwind CSS"],
      category: "تطوير ويب",
      liveUrl: "https://al-quran-al-kareem-hilt.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "منصة ElFares للألعاب",
      description: "الوجهة الأولى لأفضل الألعاب التفاعلية مع أكثر من 30 لعبة ممتعة مع تأثيرات بصرية جذابة وتجربة لعب لا تُنسى",
      image: gamingImage,
      tech: ["React", "JavaScript", "CSS3"],
      category: "منصة ألعاب",
      liveUrl: "https://el-fares-games-nine.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "بورتفوليو NextVision الشخصي",
      description: "بورتفوليو شخصي احترافي لمطور Front-End مع عرض الأعمال والمشاريع بطريقة إبداعية وجذابة",
      image: portfolioImage,
      tech: ["React", "TypeScript", "Framer Motion"],
      category: "بورتفوليو شخصي",
      liveUrl: "https://next-vision-rose.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "نظام إدارة الصالة الرياضية",
      description: "إدارة شاملة لأعضاء النادي الرياضي والاشتراكات مع واجهة سهلة الاستخدام ونظام إدارة متطور",
      image: gymImage,
      tech: ["React", "Node.js", "MongoDB"],
      category: "نظام إدارة",
      liveUrl: "https://my-coach-helper.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "الأدوات اليومية الذكية",
      description: "مجموعة شاملة من 40 أداة ذكية ومفيدة تضم آلة حاسبة ومحول عملات وملاحظات ومهام وأدوات إنتاجية أخرى في مكان واحد",
      image: multiToolsImage,
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      category: "أدوات إنتاجية",
      liveUrl: "https://multi-tools-snowy.vercel.app/",
      githubUrl: "#"
    }
  ];

  return (
    <section className="py-20 px-6 bg-soft-gradient" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            معرض أعمالي
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مجموعة مختارة من أحدث مشاريعي التي تُظهر مهاراتي في التطوير والتصميم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => {
            const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
            const isEven = index % 2 === 0;
            
            return (
              <Card 
                key={project.title}
                ref={elementRef}
                className={`border-0 shadow-card hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 hover:rotate-1 bg-card group overflow-hidden transform-gpu perspective-1000 hover:scale-105 opacity-0 ${
                  isVisible 
                    ? `animate-fade-in-up opacity-100 ${isEven ? 'animate-slide-in-left' : 'animate-slide-in-right'}` 
                    : 'translate-y-8'
                }`}
                style={{ 
                  animationDelay: isVisible ? `${(index % 2) * 0.2}s` : '0s',
                  transformStyle: 'preserve-3d'
                }}
              >
              <CardContent className="p-0">
                <div className="relative overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={`${project.title} - ${project.description.slice(0, 100)}...`}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      معاينة مباشرة
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="w-full bg-warm-gradient hover:opacity-90 text-primary-foreground transition-all duration-300 transform hover:scale-105"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      عرض المشروع المباشر
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-full"
          >
            عرض المزيد من الأعمال
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;