
import { useState } from "react";
import DropshippingBanner from "../../components/dropshippingcomponents/DropshippingBanner";
// import SmartIncomeSection from "../../components/dropshippingcomponents/SmartIncomeSection";
import BenefitsSection from "../../components/dropshippingcomponents/BenefitsSection";
import FeaturesSection from "../../components/dropshippingcomponents/FeaturesSection";
import DigitalProductFreedom from "../../components/dropshippingcomponents/DigitalProductFreedom";
import ShopifyBanner from "../../components/dropshippingcomponents/ShopifyBanner";
import Review from "../../components/dropshippingcomponents/Review";
import EasyBrandSteps from "../../components/dropshippingcomponents/EasyBrandSteps";
import OfferBanner from "../../components/dropshippingcomponents/OfferBanner";
import ReadySection from "../../components/dropshippingcomponents/ReadySection";

import CallbackModal from "../../components/modal/CallbackModal";

export default function Branding() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Pass openModal as prop to any component */}
      <DropshippingBanner onButtonClick={openModal} />

      {/* <SmartIncomeSection /> */}
      <BenefitsSection onButtonClick={openModal}/>
      <FeaturesSection />
      <DigitalProductFreedom />
      <ShopifyBanner onButtonClick={openModal} />
      <Review />
      <EasyBrandSteps />
      <OfferBanner onButtonClick={openModal} />
      <ReadySection />

      {/* Modal at page level */}
      <CallbackModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
