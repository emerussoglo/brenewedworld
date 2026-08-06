import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Realisations from "@/components/Realisations";
import Team from "@/components/Team";
import Agencies from "@/components/Agencies";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Realisations />
      <Agencies />
      <Team />
    </main>
  );
}