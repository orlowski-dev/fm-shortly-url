import { HeroSection } from "@/components/HeroSection";
import { MainHeader } from "@/components/MainHeader";
import { ShortUrlSection } from "@/components/ShortUrlSection";

export default function App() {
  return (<>
    <MainHeader />
    <main>
      <HeroSection />
      <ShortUrlSection />
    </main>
    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="https://www.frontendmentor.io/profile/orlowski-dev">@orlowski-dev</a>.
    </div>
  </>)
}