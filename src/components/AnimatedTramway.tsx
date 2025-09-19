const AnimatedTramway = () => {
  return (
    <div className="relative w-full h-32 mb-8 overflow-hidden">
      
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
              <span className="text-4xl transform scale-x-[-1] animate-glow" style={{ textShadow: 'none', filter: 'none' }}>🚡</span>
            
            {/* Data stream effect behind tramway */}
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 flex space-x-1">
              <div className="w-1 h-1 bg-primary/60 rounded-full animate-stream" style={{ animationDelay: '0s' }}></div>
              <div className="w-1 h-1 bg-primary/40 rounded-full animate-stream" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-1 bg-primary/20 rounded-full animate-stream" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTramway;