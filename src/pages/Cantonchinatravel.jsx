// import CantonNavbar from "../components/cantonChina/CantonNavbar";
import CantonFair from "../components/cantonChina/CantonFair";
import AboutCantonFair from "../components/cantonChina/AboutCantonFair";
import TravelPlans from "../components/cantonChina/TravelPlans";
// import HeroSection from "../components/cantonChina/HeroSection";
import WhyJoinUs from "../components/cantonChina/WhyJoinUs";
import CantonFairPlan from "../components/cantonChina/CantonFairPlan";
import PlanCards from "../components/cantonChina/PlanCards";
import PhotoDump from "../components/homecomponents/PhotoDump";
import FAQ from "../components/homecomponents/FAQ";
import SalesTeam from "../components/cantonChina/SalesTeam";
import ToggleFAQ from "../components/cantonChina/ToggleFAQ";
import TravelBanner from "../components/cantonChina/TravelBanner";
import CantonDelegation from "../components/cantonChina/CantonDelegation";
import CallbackModal from "../components/modal/CallbackModal";
import { useState } from "react";

export default function Cantonchinatravel() {
   const [isModalOpen, setIsModalOpen] = useState(false);
        
          const openModal = () => setIsModalOpen(true);
          const closeModal = () => setIsModalOpen(false);
  return (
   <>
   
   {/* <CantonNavbar/> */}
   <CantonDelegation  />

    <TravelPlans onButtonClick={openModal} />
   
   <AboutCantonFair/>
   <CantonFair onButtonClick={openModal}/>
   <WhyJoinUs/>
   <CantonFairPlan/>
   <PlanCards onButtonClick={openModal}/>
      {/* <HeroSection/> */}
   <TravelBanner/>
   <PhotoDump/>
  <ToggleFAQ/>
   <SalesTeam/>
    <CallbackModal isOpen={isModalOpen} onClose={closeModal} />
  
   
   </>
  )
}
