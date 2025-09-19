import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CodeExample from "@/components/CodeExample";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CodeExample />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
