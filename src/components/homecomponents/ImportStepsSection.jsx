
import img1 from "../../assets/images/productresearch.png";
import img2 from "../../assets/images/sampleproduct.png";
import img3 from "../../assets/images/Documentation.png";
import img4 from "../../assets/images/b.png";
import img5 from "../../assets/images/Custom.png";

import imgp1 from "../../assets/images/phonestep1.png";
import imgp2 from "../../assets/images/phonestep2.png";
import imgp3 from "../../assets/images/phonestep3.png";
const steps = [
  {
    number: "01",
    title: "Product Research",
    desc: "Digging deeper to discover what the world truly needs.",
    img: img1,
    imgp: imgp1,
    reverse: false,
  },
  {
    number: "02",
    title: "Sample Procurement",
    desc: "Digging deeper to discover what the world truly needs.",
    img: img2,
    imgp: img2,
    reverse: true,
  },
  {
    number: "03",
    title: "Documentation",
    desc: "Digging deeper to discover what the world truly needs.",
    img: img3,
     imgp: imgp2,
    reverse: false,
  },
  {
    number: "04",
    title: "Freight Booking",
    desc: "Digging deeper to discover what the world truly needs.",
    img: img4,
      imgp: img4,
    reverse: true,
  },
  {
    number: "05",
    title: "Customs Clearance",
    desc: "Digging deeper to discover what the world truly needs.",
    img: img5,
      imgp: imgp3,
    reverse: false,
  },
];

export default function ImportStepsSection() {
  return (
    <div className="py-10 px-4 max-w-6xl mx-auto text-center relative">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-5xl font-semibold mb-12">
        Importing from{" "}
        <span className="text-red-600 font-bold">CHINA</span> in 5 Steps
      </h2>

      {/* 👇 DESKTOP Version */}
      <div className="hidden md:block">
        <div className="absolute top-28 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-red-500 z-0" />
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              step.reverse ? "md:flex-row-reverse" : ""
            } items-center justify-between mb-14 relative z-10`}
          >
            <div className="md:w-1/2 md:px-6">
              <div className="w-fit mx-auto bg-white p-2 rounded-xl border-[6px] border-red-500 shadow-[8px_8px_0px_rgba(0,0,0,0.4)] floating transition-transform duration-300 hover:-translate-y-2">
                <img
                  src={step.img}
                  alt={step.title}
                  className={`rounded-lg object-cover ${
                    step.number === "02" || step.number === "04"
                      ? "w-[400px]"
                      : "w-[240px]"
                  }`}
                />
              </div>
            </div>

            <div className="bg-white border-[6px] border-red-500 rounded-full w-12 h-12 flex items-center justify-center z-10 my-6 md:my-0">
              <div className="bg-red-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center">
                ✔
              </div>
            </div>

            <div
              className={`md:w-1/2 md:px-6 mt-6 md:mt-0 ${
                step.reverse ? "text-right" : "text-left"
              }`}
            >
              <h3 className="text-6xl font-bold text-red-600">
                #{step.number}
              </h3>
              <h4 className="text-4xl font-semibold">{step.title}</h4>
              <p className="text-xl text-gray-700 mt-2">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 👇 MOBILE SCROLL Version */}
      <div className="md:hidden overflow-x-auto scroll-smooth">
        <div className="flex gap-6 px-2 w-max">
          {steps.map((step, index) => (
            <div
              key={index}
              className="min-w-[280px] max-w-[280px] bg-white border-[3px] border-red-500 rounded-2xl p-4 shadow-md flex-shrink-0 text-center"
            >
              <img
                src={step.imgp}
                alt={step.title}
                className="w-full h-40 object-cover rounded-xl mb-4 border-2 border-red-300"
              />
              <h3 className="text-2xl font-bold text-red-600">#{step.number}</h3>
              <h4 className="text-lg font-semibold">{step.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating animation style */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0px); }
          }
          .floating {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}
