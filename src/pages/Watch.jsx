
import React, { useRef, useState } from "react";
import WatchShowcase from "../components/watchcomponents/WatchShowcase";
import BulkEnquiryForm from "../components/watchcomponents/BulkEnquiryForm";
import ProductCard from "../components/watchcomponents/ProductCard";
import Watchphotovideo from "../components/watchcomponents/WatchPhotoVideo";
import RelatedProducts from "../components/watchcomponents/RelatedProducts";
import CallbackModal from "../components/modal/CallbackModal";

export default function Watch() {

  
       const [isModalOpen, setIsModalOpen] = useState(false);
      
        const openModal = () => setIsModalOpen(true);
        const closeModal = () => setIsModalOpen(false);

  const formRef = useRef(null);

  const scrollToForm = () => {
    // scroll into view smoothly
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <WatchShowcase scrollToForm={scrollToForm} onButtonClick={openModal} />
      <Watchphotovideo />
      
      {/* Attach ref here */}
      <div ref={formRef}>
        <BulkEnquiryForm />
      </div>

      <ProductCard onButtonClick={openModal}/>
      <RelatedProducts/>
          <CallbackModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
