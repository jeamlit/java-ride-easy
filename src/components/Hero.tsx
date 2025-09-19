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
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-2 max-w-3xl mx-auto">
            Build interactive data applications with Java, effortlessly.
            <br />
            <span className="text-primary font-semibold">Streamlit for Java developers.</span>
          </p>
          
          {/* Animated Tramway */}
          <AnimatedTramway />
          
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