import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🚡</span>
            <span className="text-xl font-bold text-foreground">Jeamlit</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="https://docs.jeamlit.io"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Documentation
            </a>
            <a
              href="https://github.com/jeamlit/jeamlit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </nav>
          
          {/* CTA Button */}
          <Button 
            asChild
            className="bg-gradient-hero hover:shadow-glow transition-all duration-300"
          >
            <a href="https://docs.jeamlit.io">
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;