const AnimatedTramway = () => {
  return (
    <div className="relative w-full h-32 mb-8 overflow-hidden">
      {/* Data pipeline track */}
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
        {/* Main pipeline line */}
        <div className="h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 relative">
          {/* Data nodes along the pipeline */}
          <div className="absolute -top-1 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute -top-1 left-2/4 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute -top-1 left-3/4 w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Support poles */}
          <div className="absolute -top-8 left-1/4 w-0.5 h-8 bg-muted-foreground/40"></div>
          <div className="absolute -top-8 left-2/4 w-0.5 h-8 bg-muted-foreground/40"></div>
          <div className="absolute -top-8 left-3/4 w-0.5 h-8 bg-muted-foreground/40"></div>
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
          
          {/* Main tramway emoji with glow effect */}
          <div className="relative">
            <span className="text-4xl transform scale-x-[-1] filter drop-shadow-lg animate-glow">🚡</span>
            
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