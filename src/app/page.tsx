import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import GenerateSection from "@/components/GenerateSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="w-full h-max bg-background text-foreground">
      <Navbar />
      <Hero />
      <GenerateSection />
      <Footer />
    </div>
  );
}
