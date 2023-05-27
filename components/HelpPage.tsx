import ContactUs from "./ContactUs";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import OurApp from "./OurApp";
import PopularServices from "./PopularServices";
import Reviews from "./Reviews";

const HelpPage = () => {
  return (
    <main className="pt-[7rem] md:pt-[8rem] overflow-hidden">
      <HeroSection />
      <PopularServices />
      <OurApp />
      <FAQSection />
      <ContactUs />
      <Reviews />
    </main>
  );
};

export default HelpPage;
