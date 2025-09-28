import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    { name: "تطوير الويب", icon: "💻", description: "React, TypeScript, Node.js" },
    { name: "التصميم الإبداعي", icon: "🎨", description: "UI/UX, Figma, Adobe Suite" },
    { name: "تطوير التطبيقات", icon: "📱", description: "React Native, Flutter" },
    { name: "قواعد البيانات", icon: "🗄️", description: "MongoDB, PostgreSQL" },
  ];

  return (
    <section className="py-20 px-6 bg-background" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            من أنا؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مطور ومصمم مبدع مع خبرة واسعة في إنشاء حلول تقنية مبتكرة. 
            أحب التحديات وأسعى دائماً لتقديم أفضل النتائج.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card 
              key={skill.name} 
              className="border-0 shadow-card hover:shadow-hero/20 transition-all duration-300 hover:-translate-y-2 bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {skill.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-accent/50 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
            رحلتي المهنية
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <p className="text-muted-foreground">سنوات خبرة</p>
            </div>
            <div className="animate-slide-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">مشروع مكتمل</p>
            </div>
            <div className="animate-slide-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">رضا العملاء</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;