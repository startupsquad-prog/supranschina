import CallbackModal from "../components/modal/CallbackModal";

import StartBusiness from '../components/usllc/StartBusiness'
import LaunchSteps from '../components/usllc/LaunchSteps'
import PricingSection from '../components/usllc/PricingSection'
import SupransPromo from '../components/usllc/SupransPromo'
import TestimonialCard from '../components/usllc/TestimonialCard'
import ScrollingBoxes from '../components/usllc/ScrollingBoxes'
import NewsletterSubscribe from '../components/usllc/NewsletterSubscribe'
import LLCFormationSteps from '../components/usllc/LLCFormationSteps'
import Uform from '../components/usllc/Uform'
import { useState } from 'react'

export default function USLLC() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
   <>
   <StartBusiness onButtonClick={openModal}/>
   <LaunchSteps/>
     <Uform/>
   <PricingSection onButtonClick={openModal}/>
   <LLCFormationSteps/>
 
   <SupransPromo onButtonClick={openModal}/>
   <TestimonialCard/>
   <ScrollingBoxes/>
   <NewsletterSubscribe/>
    <CallbackModal isOpen={isModalOpen} onClose={closeModal} />
   </>
  )
}
