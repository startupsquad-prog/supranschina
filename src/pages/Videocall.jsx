// import { Personalized } from "../components/Videocallcomponents/Personalized"
import WhatYouGetSection from "../components/Videocallcomponents/WhatYouGetSection"
import BookCallSteps from "../components/Videocallcomponents/BookCallSteps"
import VideoGridMarquee from "../components/Videocallcomponents/VideoGridMarquee"
import GlobeTrustSection from "../components/Videocallcomponents/GlobeTrustSection"
import SpotlightSection from "../components/Videocallcomponents/SpotlightSection"
// import NewsletterSubscribe from "../components/usllc/NewsletterSubscribe"
import Vform from "../components/Videocallcomponents/Vform"
import CallbackModal from "../components/modal/CallbackModal"
import { useState } from "react"
export default function Videocall() {

     const [isModalOpen, setIsModalOpen] = useState(false);
    
      const openModal = () => setIsModalOpen(true);
      const closeModal = () => setIsModalOpen(false);
  return (
   <>
   {/* <Personalized/> */}
   <WhatYouGetSection/>
   <Vform/>
   <BookCallSteps/>
   <VideoGridMarquee/>
   <GlobeTrustSection onButtonClick={openModal}/>
   <SpotlightSection />
   {/* <NewsletterSubscribe/> */}
    <CallbackModal isOpen={isModalOpen} onClose={closeModal} />
   </>
  )
}
