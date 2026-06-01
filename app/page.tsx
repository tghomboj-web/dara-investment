import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#0a0a0f", color: "#fff", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Pricing />
      <Footer />
    </main>
  );
}
