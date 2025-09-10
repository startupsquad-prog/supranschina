
import React from "react";
import watchImage from "../../assets/images/watchmain.png"; // Replace with your product image

const RelatedProducts = () => {
  const products = [
    { id: 1, name: "TSAR Bomba", price: "Rs. 50,486", discount: "Save 40%" },
    { id: 2, name: "TSAR Bomba", price: "Rs. 50,486", discount: "Save 40%" },
    { id: 3, name: "TSAR Bomba", price: "Rs. 50,486", discount: "Save 40%" },
    { id: 4, name: "TSAR Bomba", price: "Rs. 50,486", discount: "Save 40%" },
  ];

  return (
    <div className="bg-gradient-to-tr from-black via-red-700 to-orange-500 py-10 text-white">
      {/* Product Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white/25 rounded-2xl p-4 shadow-md flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={watchImage}
              alt={`Image of ${product.name}`}
              loading="lazy"
              className="rounded-xl w-40 h-40 object-cover mb-4"
            />
            <h3 className="font-bold text-lg text-white">{product.name}</h3>
            <p className="text-gray-300 text-sm mb-1">
              Mens watch automatic mechanical Japanese
            </p>
            <div className="flex justify-center text-yellow-400 text-xl mb-2">
              ★★★★☆
            </div>
            <p className="font-bold text-lg text-white">{product.price}</p>
            <p className="text-orange-300 font-medium">{product.discount}</p>
          </div>
        ))}
      </div>

      {/* Seamless Scrolling Banner */}
      <div className="bg-white/10 py-3 overflow-hidden relative">
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-wrapper {
              display: flex;
              width: 200%;
              animation: marquee 40s linear infinite;
            }
          `}
        </style>

        <div className="marquee-wrapper text-white font-semibold text-lg sm:text-xl whitespace-nowrap">
          {/* First copy */}
          <div className="flex whitespace-nowrap">
            {Array(15)
              .fill("30 Days Free-Trial")
              .map((text, i) => (
                <span key={`first-${i}`} className="mx-8">
                  {text}
                </span>
              ))}
          </div>

          {/* Second copy */}
          <div className="flex whitespace-nowrap">
            {Array(15)
              .fill("30 Days Free-Trial")
              .map((text, i) => (
                <span key={`second-${i}`} className="mx-8">
                  {text}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
