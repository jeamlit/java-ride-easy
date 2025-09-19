const AnimatedTramway = () => {
  return (
    <div className="relative w-full h-32 mb-1 overflow-hidden">
      
      {/* Cable line at the top */}
      <div className="absolute top-4 left-0 right-0">
        <div className="h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 relative">
        </div>
        
        {/* Floating data particles below the cable */}
        <div className="absolute top-4 left-0 w-2 h-2 bg-primary/60 rounded-full animate-float-right" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-6 left-0 w-1.5 h-1.5 bg-accent/60 rounded-full animate-float-right" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-2 left-0 w-1 h-1 bg-primary/40 rounded-full animate-float-right" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Animated tramway hanging from cable */}
      <div className="absolute top-10 animate-tramway-move">
        <div className="relative">
          {/* Main tramway emoji hanging below the cable */}
          <div className="relative">
            <span className="text-6xl transform scale-x-[-1] block bg-transparent" style={{ textShadow: 'none', filter: 'none', backgroundColor: 'transparent !important', background: 'none' }}>🚡</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTramway;