
import { useRef, useState } from "react";
import { Hero } from "../components/homecomponents/Hero";
import { CallbackForm } from "../components/homecomponents/CallbackForm";
import Testimonials from "../components/homecomponents/Testimonials";
import ServicesSection from "../components/homecomponents/ServicesSection";
import FoundersNote from "../components/homecomponents/FoundersNote";
import FAQ from "../components/homecomponents/FAQ";
import SocialMediaLinks from "../components/homecomponents/SocialMediaLinks";
import MissedOutSection from "../components/homecomponents/MissedOutSection";
import EventGallery from "../components/homecomponents/EventGallery";
import WorldMapSection from "../components/homecomponents/WorldMapSection";
import BusinessVideoSection from "../components/homecomponents/BusinessVideoSection";
import ToolsSoftwareSection from "../components/homecomponents/ToolsSoftwareSection";
import ImportStepsSection from "../components/homecomponents/ImportStepsSection";
import VideoLayout from "../components/homecomponents/VideoLayout";
import DelegationBanner from "../components/homecomponents/DeletgationBanner";
import BusinessStats from "../components/homecomponents/BusinessStats";
import HeroSectionSlider from "../components/homecomponents/HeroSectionSlider";
import CallbackModal from "../components/modal/CallbackModal";
// import HeroSectionMobileSlider from "../components/homecomponents/HeroSectionMobileSlider";
export const Home = () => {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* <HeroSectionSlider /> */}
      <HeroSectionMobileSlider/>
      <Hero onScrollToServices={scrollToServices} />
      <DelegationBanner />
      <CallbackForm />

      <div ref={servicesRef}>
        <ServicesSection />
      </div>

      <VideoLayout />
      <BusinessStats />
      <ImportStepsSection />
      <ToolsSoftwareSection />
      <BusinessVideoSection />
      <WorldMapSection />
      <EventGallery />
      <MissedOutSection onButtonClick={openModal}/>
      <FAQ />
      <FoundersNote />
      <SocialMediaLinks />
      <Testimonials />
      <CallbackForm />
        <CallbackModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};
