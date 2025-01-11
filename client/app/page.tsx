import { Hero } from "@/components/pages/heroPage/Page";
import Navbar from "@/components/navbar/Page";
import { About } from "@/components/pages/AboutEventPage/page";
import { Prizes } from "@/components/pages/Prizes/page";
import { Sponsors } from "@/components/pages/sponsers/page";
import { OurTeam } from "@/components/pages/OurTeam/page";
import { Footer } from "@/components/Footer/page";
import { Tracks } from "@/components/pages/Tracks/page";
import { AboutUs } from "@/components/pages/AboutUsPage/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Tracks />
        <Prizes />
        <Sponsors />
        <OurTeam />
        <AboutUs />
        <Footer />
      </main>
    </div>
  );
}
