import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Code, MapPin, Mail, Globe, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const Contact = () => {
  const personalInfo = [{
    icon: User,
    label: "الاسم",
    value: "Fares Ahmed",
    color: "text-blue-500"
  }, {
    icon: Code,
    label: "التخصص",
    value: "Frontend Developer",
    color: "text-green-500"
  }, {
    icon: MapPin,
    label: "الموقع",
    value: "Egypt",
    color: "text-red-500"
  }, {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: "faresahmed2004424@gmail.com",
    color: "text-purple-500",
    href: "mailto:faresahmed2004424@gmail.com"
  }, {
    icon: Globe,
    label: "المعاينة المباشرة",
    value: "my-portfolio-site-delta-sand.vercel.app",
    color: "text-orange-500",
    href: "https://my-portfolio-site-delta-sand.vercel.app/"
  }];
  const contactMethods = [{
    icon: "📧",
    title: "البريد الإلكتروني",
    detail: "faresahmed2004424@gmail.com",
    description: "راسلني في أي وقت"
  }, {
    icon: "📱",
    title: "الهاتف",
    detail: "+20 123 456 789",
    description: "متاح للمكالمات"
  }, {
    icon: "📍",
    title: "الموقع",
    detail: "مصر",
    description: "يمكننا اللقاء شخصياً"
  }, {
    icon: "💼",
    title: "LinkedIn",
    detail: "فارس المطور",
    description: "تواصل مهني"
  }];
  return <section className="py-20 px-6 bg-background" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            لنتواصل
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            هل لديك مشروع رائع في ذهنك؟ دعنا نحوله إلى واقع! 
            أنا متحمس للعمل معك على إنشاء شيء مذهل.
          </p>
        </div>

        {/* Personal Information Section */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-foreground mb-8">
            معلومات شخصية
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {personalInfo.map((info, index) => {
              const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 });
              const isEven = index % 2 === 0;
              
              return (
                <Card 
                  key={info.label} 
                  ref={elementRef}
                  className={`border-0 shadow-card hover:shadow-hero/20 transition-all duration-700 hover:scale-105 bg-card group opacity-0 ${
                    isVisible 
                      ? `animate-fade-in-up opacity-100 ${isEven ? 'animate-slide-in-left' : 'animate-slide-in-right'}` 
                      : 'translate-y-8'
                  }`}
                  style={{
                    animationDelay: isVisible ? `${index * 0.1}s` : '0s'
                  }}
                >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${info.color} bg-current/10 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">
                        {info.label}
                      </p>
                      {info.href ? <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold hover:text-primary transition-colors duration-300 flex items-center gap-2 group/link">
                          <span className="break-all">{info.value}</span>
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                        </a> : <p className="text-foreground font-semibold">
                          {info.value}
                        </p>}
                    </div>
                  </div>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>

        

        
      </div>
    </section>;
};
export default Contact;