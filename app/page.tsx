import { Comparison } from "@/components/Comparison";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LiveCta } from "@/components/LiveCta";
import { Problem } from "@/components/Problem";
import { SocialProof } from "@/components/SocialProof";
import { Story } from "@/components/Story";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Story />
        <HowItWorks />
        <Comparison />
        <SocialProof />
        <LiveCta />
      </main>
      <Footer />
    </>
  );
}
