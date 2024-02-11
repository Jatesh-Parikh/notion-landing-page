import Navbar from "@/components/navbar/navbar";
import HeroSection from "./hero-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-section";

const LandingPage = () => {
  return (
    <section>
      <Navbar />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </section>
  );
};

export default LandingPage;
