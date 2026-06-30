import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SampleReport from "@/components/SampleReport";
import WhatMonitorChecks from "@/components/WhatMonitorChecks";
import Pricing from "@/components/Pricing";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#ffffff", color: "#1a1f2c", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <SampleReport />
      <WhatMonitorChecks />
      <Pricing />
      <HowItWorks />
      <Disclaimer />
      <Footer />
    </main>
  );
}
