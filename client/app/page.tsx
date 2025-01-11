import { Hero } from "@/components/pages/heroPage/Page";
import Navbar from "@/components/navbar/Page";
import Welcome from "@/components/pages/WelcomePage/page";
import { About } from "@/components/pages/AboutEventPage/page";
import { Prizes } from "@/components/pages/Prizes/page";
import { Sponsors } from "@/components/pages/sponsers/page";
import { OurTeam } from "@/components/pages/OurTeam/page";
import { Footer } from "@/components/Footer/page";
import Calendar from "@/components/callender/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="mt-32 w-full">
        <Hero />
        <Welcome />
        <About />
        <Calendar />
        <Prizes />
        <Sponsors />
        <OurTeam />
        <Footer />
      </main>
    </div>
  );
}
