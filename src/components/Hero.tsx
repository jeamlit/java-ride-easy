import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import AnimatedTramway from "@/components/AnimatedTramway";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center mb-6">
            <span className="text-6xl mr-3 transform scale-x-[-1]">🚡</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Jeamlit
            </h1>
          </div>
          
          {/* Scenic Mountain Background */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <svg 
                viewBox="0 0 1200 500" 
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                {/* Sky gradient */}
                <defs>
                  <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(200 40% 95%)" />
                    <stop offset="100%" stopColor="hsl(210 30% 85%)" />
                  </linearGradient>
                  <linearGradient id="mountain1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(210 20% 75%)" />
                    <stop offset="100%" stopColor="hsl(210 25% 65%)" />
                  </linearGradient>
                  <linearGradient id="mountain2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(200 30% 70%)" />
                    <stop offset="100%" stopColor="hsl(200 35% 60%)" />
                  </linearGradient>
                  <linearGradient id="mountain3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(150 25% 65%)" />
                    <stop offset="100%" stopColor="hsl(150 30% 55%)" />
                  </linearGradient>
                  <linearGradient id="mountain4" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(140 35% 60%)" />
                    <stop offset="100%" stopColor="hsl(140 40% 45%)" />
                  </linearGradient>
                </defs>
                
                {/* Sky background */}
                <rect width="1200" height="500" fill="url(#skyGradient)" />
                
                {/* Far background mountains (lightest) */}
                <path 
                  d="M0,500 L0,200 L200,120 L400,160 L600,100 L800,140 L1000,80 L1200,110 L1200,500 Z" 
                  fill="url(#mountain1)"
                  opacity="0.6"
                />
                
                {/* Second layer mountains */}
                <path 
                  d="M0,500 L0,250 L150,180 L350,220 L500,150 L700,200 L900,130 L1100,170 L1200,140 L1200,500 Z" 
                  fill="url(#mountain2)"
                  opacity="0.7"
                />
                
                {/* Third layer mountains */}
                <path 
                  d="M0,500 L0,300 L120,230 L300,280 L450,210 L650,260 L850,190 L1050,240 L1200,200 L1200,500 Z" 
                  fill="url(#mountain3)"
                  opacity="0.8"
                />
                
                {/* Foreground mountains (darkest) */}
                <path 
                  d="M0,500 L0,350 L100,300 L250,340 L400,280 L550,320 L700,260 L850,310 L1000,270 L1200,300 L1200,500 Z" 
                  fill="url(#mountain4)"
                  opacity="0.9"
                />
                
                {/* Trees silhouettes */}
                <g opacity="0.6">
                  {/* Left tree cluster */}
                  <polygon points="80,400 85,350 90,400" fill="hsl(120 50% 25%)" />
                  <polygon points="100,420 108,360 116,420" fill="hsl(120 50% 25%)" />
                  <polygon points="120,410 125,370 130,410" fill="hsl(120 50% 25%)" />
                  
                  {/* Right tree cluster */}
                  <polygon points="1050,430 1058,370 1066,430" fill="hsl(120 50% 25%)" />
                  <polygon points="1080,420 1088,350 1096,420" fill="hsl(120 50% 25%)" />
                  <polygon points="1110,440 1115,380 1120,440" fill="hsl(120 50% 25%)" />
                </g>
              </svg>
            </div>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto relative z-10">
              Build interactive data applications with Java, effortlessly.
              <br />
              <span className="text-primary font-semibold">Streamlit for Java developers.</span>
            </p>
            
            {/* Animated Tramway */}
            <div className="relative z-10">
              <AnimatedTramway />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow hover:scale-105 transition-all duration-300 text-lg px-8 py-3"
            >
              <a href="https://docs.jeamlit.io" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-3 hover:bg-primary/5 border-primary/20"
            >
              <a 
                href="https://github.com/jeamlit/jeamlit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
        
        {/* Feature highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 animate-slide-in">
          <div className="text-center p-6 rounded-lg bg-card shadow-soft hover:shadow-glow transition-all duration-300">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold mb-2">Fast Development</h3>
            <p className="text-muted-foreground">Create data apps with just a few lines of Java code</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-card shadow-soft hover:shadow-glow transition-all duration-300">
            <div className="text-3xl mb-4">☕</div>
            <h3 className="text-lg font-semibold mb-2">Pure Java</h3>
            <p className="text-muted-foreground">Leverage the power and familiarity of Java</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-card shadow-soft hover:shadow-glow transition-all duration-300">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold mb-2">Interactive</h3>
            <p className="text-muted-foreground">Build reactive UIs with automatic updates</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;