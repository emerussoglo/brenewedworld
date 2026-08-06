import Hero from "@/components/Hero";
import About from "./about/About";
import Agencies from "./agencies/Agencies";
import Realisations from "./realisations/Realisations";
import Services from "./services/Services";
import Team from "@/components/Team";
import Stats from "@/components/Stats";
import Testimonials from "./testimonials/Testimonials";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Stats />
      <Services />
      <Realisations />
      <Agencies />
      <Team />
      <Testimonials />
    </main>
  );
}