import worldMap from "../../assets/images/g5.png";
import usaOffice from "../../assets/images/building.jpeg";
import indiaOffice from "../../assets/images/corporate.jpeg";
import chinaWarehouse from "../../assets/images/Warehousechina.png";

export default function WorldMapSection() {
  return (
    <div className="py-10 flex flex-col items-center relative">
      {/* Heading */}
      <h2 className="text-xl md:text-3xl font-semibold text-center mb-6 px-4">
        Our{" "}
        <span className="text-red-600 font-bold">
          BUSINESS
        </span>{" "}
        is expanded around the world
      </h2>

      {/* Map Section */}
      <div className="relative w-full max-w-6xl px-4 md:px-0">
        <img
          src={worldMap}
          alt="World Map"
          className="w-full h-auto object-contain"
        />

        {/* Blinking Red Dots */}
        <div className="absolute top-[30%] left-[16%] w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-600 animate-blink z-10" />
        <div className="absolute top-[38%] left-[68.5%] w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-600 animate-blink z-10" />
        <div className="absolute top-[35%] left-[78.5%] w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-600 animate-blink z-10" />

        {/* USA Card (desktop only) */}
        <div className="hidden md:block absolute top-[10%] left-[18%]">
          <div className="absolute top-[120px] left-[-270px] bg-white rounded-xl shadow-lg border border-red-400 p-4 w-64 z-20">
            <img
              src={usaOffice}
              alt="USA"
              className="w-full h-32 object-cover rounded"
            />
            <h3 className="font-semibold text-red-500 mt-2">USA Warehouse</h3>
            <p className="text-sm text-gray-600">
              Location: North Carolina <br />
              Our USA Warehouse adds a local edge to your global brand.
            </p>
          </div>
        </div>

        {/* India Card (desktop only) */}
        <div className="hidden md:block absolute top-[39%] left-[68.5%]">
          <div className="absolute top-[110px] left-[-270px] bg-white rounded-xl shadow-lg border border-red-400 p-4 w-64 z-20">
            <img
              src={indiaOffice}
              alt="India"
              className="w-full h-32 object-cover rounded"
            />
            <h3 className="font-semibold text-red-500 mt-2">India Office</h3>
            <p className="text-sm text-gray-600">
              Mumbai, Pune, Bengaluru <br />
              Our India team provides development and client support.
            </p>
          </div>
        </div>

        {/* China Card (desktop only) */}
        <div className="hidden md:block absolute top-[15%] left-[80%]">
          <div className="absolute top-[110px] left-[30px] bg-white rounded-xl shadow-lg border border-red-400 p-4 w-64 z-20">
            <img
              src={chinaWarehouse}
              alt="China"
              className="w-full h-32 object-cover rounded"
            />
            <h3 className="font-semibold text-red-500 mt-2">China Warehouse</h3>
            <p className="text-sm text-gray-600">
              Location: Shenzhen <br />
              Efficient fulfillment and logistics for faster delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile stacked cards */}
      <div className="mt-8 grid gap-6 md:hidden w-full px-6">
        <div className="bg-white rounded-xl shadow-lg border border-red-400 p-4">
          <img
            src={usaOffice}
            alt="USA"
            className="w-full h-36 object-cover rounded"
          />
          <h3 className="font-semibold text-red-500 mt-2">USA Warehouse</h3>
          <p className="text-sm text-gray-600">
            Location: North Carolina  <br />
            Our USA office adds a local edge to your global brand.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-red-400 p-4">
          <img
            src={indiaOffice}
            alt="India"
            className="w-full h-36 object-cover rounded"
          />
          <h3 className="font-semibold text-red-500 mt-2">India Office</h3>
          <p className="text-sm text-gray-600">
            Mumbai, Pune, Bengaluru  <br />
            Our India team provides development and client support.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-red-400 p-4">
          <img
            src={chinaWarehouse}
            alt="China"
            className="w-full h-36 object-cover rounded"
          />
          <h3 className="font-semibold text-red-500 mt-2">China Warehouse</h3>
          <p className="text-sm text-gray-600">
            Location: Shenzhen <br />
            Efficient fulfillment and logistics for faster delivery.
          </p>
        </div>
      </div>

      {/* Custom styles */}
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.2; }
          }
          .animate-blink {
            animation: blink 1.2s infinite;
          }
        `}
      </style>
    </div>
  );
}
