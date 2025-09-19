import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button } from '@/components/ui/button';

const CodeExample = () => {
  const codeString = `import io.jeamlit.core.Jt;

public class MyApp {
  public static void main(String[] args) {
    double temp = Jt.slider("Temperature °C").use();

    if (temp > 30) {
      Jt.markdown("🔥 **Too Hot!**").use();
    } else if (temp < 10) {
      Jt.markdown("❄️ **Too Cold!**").use();
    } else {
      Jt.text("✅ Perfect!").use();
    }
  }
}`;

  return (
    <section className="pb-16 pt-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simple. Powerful. 
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
            
            <div className="bg-[hsl(var(--code-bg))] p-3 sm:p-6 pt-6 sm:pt-12 rounded-xl shadow-soft overflow-hidden">
              <SyntaxHighlighter
                language="java"
                style={oneDark}
                customStyle={{
                  background: 'transparent',
                  padding: 0,
                  margin: 0,
                  fontSize: 'inherit',
                  overflow: 'hidden',
                }}
                codeTagProps={{
                  style: {
                    fontSize: 'inherit',
                    fontFamily: 'inherit',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }
                }}
                className="text-[10px] xs:text-xs sm:text-sm leading-tight"
                wrapLines={true}
                wrapLongLines={true}
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
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
                <p className="text-muted-foreground">Run your app and share it with the world in minutes. <br/> Deploy it standalone or embedded in your framework.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Get Started CTA */}
        <div className="mt-16 bg-primary rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Ready to build?
          </h3>
          <Button 
            asChild
            size="lg" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8"
          >
            <a href="https://docs.jeamlit.io" target="_blank">
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;