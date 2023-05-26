import ContactUs from "./ContactUs";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import OurApp from "./OurApp";
import PopularServices from "./PopularServices";

const HelpPage = () => {
  return (
    <main className="pt-[10rem]">
      <HeroSection />
      <PopularServices />
      <OurApp />
      <FAQSection />
      <ContactUs />
    </main>
  );
};

export default HelpPage;
