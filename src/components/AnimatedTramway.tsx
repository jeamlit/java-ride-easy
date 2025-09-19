const AnimatedTramway = () => {
  return (
    <div className="relative w-full h-32 mb-8 overflow-hidden">
      {/* Mountain background */}
      <div className="absolute bottom-0 left-0 right-0 h-20">
        <svg 
          viewBox="0 0 1200 200" 
          className="w-full h-full opacity-10"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,200 L0,100 L200,50 L400,80 L600,30 L800,70 L1000,40 L1200,90 L1200,200 Z" 
            fill="hsl(var(--muted-foreground) / 0.3)"
          />
          <path 
            d="M0,200 L0,130 L150,90 L350,110 L550,60 L750,100 L950,70 L1200,120 L1200,200 Z" 
            fill="hsl(var(--muted-foreground) / 0.2)"
          />
        </svg>
      </div>
      
      {/* Data pipeline track */}
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
        {/* Main pipeline line */}
        <div className="h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 relative">
        </div>
        
        {/* Floating data particles */}
        <div className="absolute -top-4 left-0 w-2 h-2 bg-primary/60 rounded-full animate-float-right" style={{ animationDelay: '0s' }}></div>
        <div className="absolute -top-6 left-0 w-1.5 h-1.5 bg-accent/60 rounded-full animate-float-right" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute -top-2 left-0 w-1 h-1 bg-primary/40 rounded-full animate-float-right" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Animated tramway */}
      <div className="absolute top-1/2 transform -translate-y-1/2 animate-tramway-move">
        <div className="relative">
          {/* Tramway cable connection */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-muted-foreground/60"></div>
          
          {/* Main tramway emoji without shadow */}
          <div className="relative">
            <span className="text-4xl transform scale-x-[-1] animate-glow">🚡</span>
            
            {/* Data stream effect behind tramway */}
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 flex space-x-1">
              <div className="w-1 h-1 bg-primary/60 rounded-full animate-stream" style={{ animationDelay: '0s' }}></div>
              <div className="w-1 h-1 bg-primary/40 rounded-full animate-stream" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-1 bg-primary/20 rounded-full animate-stream" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Data metrics floating around */}
      <div className="absolute top-2 left-1/3 text-xs text-muted-foreground/60 animate-fade-in" style={{ animationDelay: '2s' }}>
        Processing...
      </div>
      <div className="absolute bottom-2 right-1/3 text-xs text-muted-foreground/60 animate-fade-in" style={{ animationDelay: '4s' }}>
        Real-time data
      </div>
    </div>
  );
};

export default AnimatedTramway;