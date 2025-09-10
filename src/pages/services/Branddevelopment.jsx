import DealsSection from "../../components/branddevelopmentcomponents/DealsSection"
import GrowSection from "../../components/branddevelopmentcomponents/GrowSection"
import BrandTools from "../../components/branddevelopmentcomponents/BrandTools"
import BrandingSection from "../../components/branddevelopmentcomponents/BrandingSection"
import PhoneVideoSection from "../../components/branddevelopmentcomponents/PhoneVideoSection"
import SalesAccelerator from "../../components/branddevelopmentcomponents/SalesAccelerator"
import Testimonials from "../../components/homecomponents/Testimonials"
import Bform from "../../components/branddevelopmentcomponents/Bform"
import CallbackModal from "../../components/modal/CallbackModal"
import { useState } from "react"
export default function Branddevelopment() {
   const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
  <>
  <SalesAccelerator/>
  <PhoneVideoSection onButtonClick={openModal}/>
  <DealsSection/>

  <BrandingSection onButtonClick={openModal}/>
  <Bform/>
  <Testimonials/>
  <GrowSection onButtonClick={openModal}/>
  <BrandTools/>
  <CallbackModal isOpen={isModalOpen} onClose={closeModal} />
  
  </>
  )
}
