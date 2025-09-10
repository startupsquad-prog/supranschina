
import Holiday from "../../assets/images/Holiday.png";
import Indigo from "../../assets/images/Indigo.png";

export default function TravelBanner() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl shadow-lg relative overflow-hidden">
      
      {/* Decorative Glow Effect */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      {/* Left Section */}
      <div className="text-center md:text-left relative z-10">
        <p className="text-sm md:text-base tracking-wide">Get</p>
        <p className="text-2xl md:text-3xl font-extrabold leading-snug">
          Travel & Accommodation
        </p>
        <p className="text-sm md:text-lg font-medium mt-1">
          support by <span className="font-bold underline decoration-white/60">SUPRANS</span>
        </p>
      </div>

      {/* Middle Section - Logos */}
      <div className="flex items-center gap-6 relative z-10">
        <img
          src={Indigo}
          alt="IndiGo"
          className="h-10 md:h-14 object-contain hover:scale-110 transition-transform duration-300"
        />
        <span className="w-px h-10 bg-white/40"></span>
        <img
          src={Holiday}
          alt="Holiday Inn"
          className="h-10 md:h-14 object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center md:items-end relative z-10">
        <p className="text-xs md:text-sm font-semibold mb-1">Use our CODE</p>
        <span className="bg-white text-red-600 px-5 py-1.5 rounded-full text-sm md:text-base font-bold shadow-md hover:scale-105 transition">
          CAN2025SUPRANS
        </span>
      </div>
    </div>
  );
}
