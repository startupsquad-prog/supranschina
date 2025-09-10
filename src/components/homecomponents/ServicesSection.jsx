import { Link } from "react-router-dom";
import Dropshipping from "../../assets/images/Dropshipping.png";
import BrandDevelopment from "../../assets/images/BrandDevelopment.png";
import USLLC from "../../assets/images/USALLC.png";

const services = [
  {
    title: "Dropshipping",
    icon: (
      <img
        src={Dropshipping}
        alt="Dropshipping"
        className="w-94 h-18 mx-auto mb-6 object-contain rounded-4xl"
      />
    ),
    description: "Sell products without inventory — we handle sourcing, storage, and shipping for you.",
    button: "/services/dropshipping",
  },
  {
    title: "Brand Development",
    icon: (
      <img
        src={BrandDevelopment}
        alt="Brand Development"
        className="w-94 h-18 mx-auto mb-6 object-contain rounded-4xl "
      />
    ),
    description: "We help you create a unique brand identity and market presence.",
    button: "/services/branddevelopment",
  },
  {
    title: "USA LLC Formation",
    icon: (
      <img
        src={USLLC}
        alt="USA LLC Formation"
        className="w-94 h-18 mx-auto mb-6 object-contain rounded-4xl"
      />
    ),
    description: "Start your business in the USA with complete legal compliance and support.",
    button: "/usllc",
  },
];

export default function ServicesSection() {
  return (
    <>
      <style>
        {`
          @keyframes floating {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }

          .animate-floating {
            animation: floating 3s ease-in-out infinite;
          }
        `}
      </style>

      <section className="py-5 bg-white text-center">
        <h2 className="text-2xl font-medium text-gray-700">Our</h2>
        <h1 className="text-5xl font-bold text-red-600 mb-16">Services</h1>

        <div className="flex flex-wrap justify-center gap-12 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-96 bg-gradient-to-b from-white to-red-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-3xl p-10 border border-red-200 animate-floating"
            >
              {service.icon}
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-base">{service.description}</p>

              <Link
                to={service.button}
                className="inline-block bg-white border border-red-500 text-red-600 rounded-full px-6 py-2 hover:bg-red-50 transition-all font-semibold"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10">
        <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="border border-red-500 text-red-600 rounded-full px-8 py-3 hover:bg-red-50 transition-all text-lg font-medium"
  >
    Back to top
  </button>
        </div>
      </section>
    </>
  );
}
