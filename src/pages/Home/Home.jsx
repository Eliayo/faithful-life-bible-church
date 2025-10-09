import HeroSection from "./HeroSection";
import WelcomeSection from "./WelcomeSection";
import MinistriesPreview from "./MinistriesPreview";
import SermonsPreview from "./SermonsPreview";
import EventsPreview from "./EventsPreview";
import JoinUs from "./JoinUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <MinistriesPreview />
      <SermonsPreview />
      <EventsPreview />
      <JoinUs />
    </>
  );
}
