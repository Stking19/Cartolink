import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import GenerateSection from "@/components/GenerateSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div>
      <div className="md:hidden flex h-screen items-center justify-center bg-gray-900 text-white text-center p-6">
        <p>This site is only available on desktop. Please visit from a larger screen</p>
      </div>
    <div className="hidden md:block w-full h-max bg-background text-foreground">
      <Navbar />
      <Hero />
      <GenerateSection />
      <Footer />
    </div>
    </div>
  );
}
