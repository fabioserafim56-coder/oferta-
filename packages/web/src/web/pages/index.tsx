import { useReveal } from "../hooks/use-reveal";
import { Header } from "../components/sections/header";
import { Hero } from "../components/sections/hero";
import { Recognition } from "../components/sections/recognition";
import { Mechanism } from "../components/sections/mechanism";
import { Sequence } from "../components/sections/sequence";
import { Deliverables } from "../components/sections/deliverables";
import { Demonstration } from "../components/sections/demonstration";
import { Audience } from "../components/sections/audience";
import { Offer } from "../components/sections/offer";
import { Safety } from "../components/sections/safety";
import { Faq } from "../components/sections/faq";
import { Closing } from "../components/sections/closing";
import { Footer } from "../components/sections/footer";
import { StickyCta } from "../components/sections/sticky-cta";

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-ink text-bone antialiased">
      <Header />
      <main>
        <Hero />
        <Recognition />
        <Mechanism />
        <Sequence />
        <Demonstration />
        <Deliverables />
        <Audience />
        <Offer />
        <Safety />
        <Faq />
        <Closing />
      </main>
      <Footer />
      <StickyCta />
      <div className="h-[108px] md:hidden" />
    </div>
  );
}

export default Index;
