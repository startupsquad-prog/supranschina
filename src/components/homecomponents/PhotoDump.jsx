
import sir1 from '../../assets/images/E1.png';
import sir2 from '../../assets/images/E3.png';
import sir3 from '../../assets/images/E4.png';
import sir4 from '../../assets/images/E5.png';
import sir5 from '../../assets/images/E6.jpg';
import sir6 from '../../assets/images/E7.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";


export default function PhotoDump() {
const images = [sir1, sir2, sir3, sir4, sir5, sir6];

  return (
    <section className="bg-white py-12 text-center">
      <h2 className="text-4xl font-bold mb-4">
        <span className="text-red-600">PHOTO</span> Dump
        <span className="text-red-600 text-3xl">*</span>
      </h2>
      <p className="text-lg max-w-2xl mx-auto mb-10 px-4">
        A little photo dump from the world of Suprans — where ideas turn into brands and hustle meets elegance. ✨
      </p>

      <div className="max-w-5xl mx-auto px-4">
       
        <Swiper
  effect={"coverflow"}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={1.9}   // 👈 3 se 2 kar diya, bada dikhne ke liye
  loop={true}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 500,   // 👈 depth thoda bada kiya
    modifier: 2,  // 👈 coverflow effect ko enhance kiya
    slideShadows: true,
  }}
  modules={[Autoplay, EffectCoverflow]}
  className="w-full"
>
  {images.map((src, index) => (
    <SwiperSlide
      key={index}
      className="w-96 h-[600px] flex items-center justify-center" // 👈 bigger size
    >
      <img
        src={src}
        alt={`slide-${index}`}
        className="w-full h-full object-cover rounded-2xl shadow-2xl"
      />
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </section>
  );
}
