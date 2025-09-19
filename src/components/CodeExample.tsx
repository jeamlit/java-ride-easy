const CodeExample = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simple. Powerful. Java.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your Java applications into interactive web apps with minimal code.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Code block */}
          <div className="relative">
            <div className="absolute top-4 left-4 flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            <pre className="bg-[hsl(var(--code-bg))] text-[hsl(var(--code-text))] p-6 pt-12 rounded-xl shadow-soft overflow-x-auto">
              <code>{`import io.jeamlit.core.Jt;
                
                public class MyApp {
                    public static void main(String[] args) {
                        double value = Jt.slider("Temperature")
                            .min(0)
                            .max(100)
                            .value(50)
                            .use();
                        Jt.text("Temperature: " + value).use();
                    }
                }`}</code>
            </pre>
          </div>
          
          {/* Benefits */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground text-sm">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Write Java Code</h3>
                <p className="text-muted-foreground">Use familiar Java syntax and libraries you already know.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground text-sm">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Add Widgets</h3>
                <p className="text-muted-foreground">Create sliders, charts, and interactive components effortlessly.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground text-sm">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Deploy Instantly</h3>
                <p className="text-muted-foreground">Run your app and share it with the world in minutes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;