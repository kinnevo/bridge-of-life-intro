import Hero from "@/components/Hero";
import About from "@/components/About";
import Latteware from "@/components/Latteware";
import Community from "@/components/Community";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Latteware />
      <Community />
      <CallToAction />
    </main>
  );
};

export default Index;
