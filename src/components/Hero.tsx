import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/5 px-6 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-heartbeat"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-wave delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-spin-slow"></div>
        
        {/* Additional glow effects */}
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-60 h-60 bg-accent/5 rounded-full blur-2xl animate-glow delay-2000"></div>
      </div>

      {/* Enhanced Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-ping opacity-40 delay-500"></div>
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-primary/80 rounded-full animate-bounce opacity-50 delay-1000"></div>
        <div className="absolute bottom-1/3 left-2/3 w-2.5 h-2.5 bg-accent/60 rounded-full animate-pulse opacity-30 delay-1500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        {/* Profile Image - First on mobile */}
        <div className="flex justify-center lg:justify-start animate-fade-in-right delay-1000 order-1 lg:order-2">
          <div className="relative group cursor-pointer perspective-1000">
            {/* Simplified Glow Effects */}
            <div className="absolute -inset-8 bg-primary/5 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-1000 group-hover:bg-rose-200/20"></div>
            <div className="absolute -inset-4 bg-accent/5 rounded-full blur-xl opacity-20 group-hover:opacity-50 transition-all duration-800 group-hover:bg-blue-200/15"></div>
            
            {/* Main Image Container with Pastel Hover */}
            <div className="relative overflow-hidden rounded-full border-2 border-primary/20 group-hover:border-rose-300/40 transition-all duration-700 group-hover:shadow-xl group-hover:shadow-rose-200/30">
              <img src={profilePhoto} alt="فارس - صورة شخصية" className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover transition-all duration-1000 group-hover:scale-105 transform-gpu filter group-hover:brightness-110 group-hover:saturate-110" loading="eager" />
              {/* Pastel Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100/0 to-blue-100/0 group-hover:from-rose-100/20 group-hover:to-blue-100/15 transition-opacity duration-700 rounded-full"></div>
            </div>
            
            {/* Subtle Floating Element */}
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-rose-200 to-blue-200 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 border-2 border-white group-hover:scale-110 animate-pulse">
              <div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content - Second on mobile */}
        <div className="text-center lg:text-right space-y-6 animate-fade-in-up order-2 lg:order-1" dir="rtl">
          <div className="animate-fade-in-up delay-200">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-right">
              <span className="inline-block animate-bounce-in delay-300 hover:scale-110 transition-transform">مرحباً،</span>{" "}
              <span className="inline-block animate-bounce-in delay-500 hover:scale-110 transition-transform">أنا</span>{" "}
              <span className="text-primary inline-block animate-bounce-in delay-700 hover:animate-pulse hover:scale-125 transition-all duration-300 font-bold tracking-wider drop-shadow-lg">
                فارس
              </span>
            </h1>
          </div>
          <div className="animate-fade-in-up delay-400">
            <p className="text-xl lg:text-2xl text-muted-foreground mb-6 leading-relaxed hover:text-primary transition-colors duration-500 animate-wave text-right my-0 px-0 py-[10px]">
              مطور ويب متخصص في التجارب الرقمية المبتكرة
            </p>
          </div>
          <div className="animate-fade-in-up delay-600">
            <p className="text-base lg:text-lg text-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 hover:text-foreground transition-colors duration-300 text-right font-medium">
              أحول أفكارك إلى مواقع وتطبيقات احترافية بتصميم عصري ووظائف متقدمة
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end animate-fade-in-up delay-800">
            <Button size="lg" className="group bg-warm-gradient hover:opacity-90 text-white shadow-hero hover:shadow-hero/70 transition-all duration-500 px-8 py-6 text-lg font-semibold rounded-full transform hover:scale-110 hover:-translate-y-2 hover:rotate-1">
              <span className="group-hover:animate-pulse">استكشف أعمالي</span>
            </Button>
            <Button variant="outline" size="lg" className="group border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-500 px-8 py-6 text-lg font-semibold rounded-full transform hover:scale-110 hover:-translate-y-2 hover:-rotate-1">
              <span className="group-hover:animate-bounce">تواصل معي</span>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;