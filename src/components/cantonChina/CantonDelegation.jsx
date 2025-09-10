
import { motion } from "framer-motion";
import TeamSuprans from "../../assets/images/TeamSuprans.png";
import CantonFairLogo from "../../assets/images/CantonFairLogo.png";
import ChineseDragon from "../../assets/images/ChineseDragon.png";
import ChineseLamps from "../../assets/images/ChineseLamps.png";

export default function CantonDelegation() {
  const scrollToExpert = () => {
    const section = document.getElementById("sales-team");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-white px-4 sm:px-6 md:px-20 overflow-hidden pt-0 mt-0">
      {/* Top Left Lamp (hidden on phone) */}
      <div className="absolute top-0 left-4 w-20 md:w-48 hidden sm:block">
        <img src={ChineseLamps} alt="Lamp" className="w-full h-auto" />
      </div>

      {/* Top Right Dragon (hidden on phone) */}
      <div className="absolute top-4 right-0 w-28 md:w-44 lg:w-72 hidden sm:block">
        <img src={ChineseDragon} alt="Dragon" className="w-full h-auto" />
      </div>

      {/* Middle Top Team Photo */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center -mt-8 sm:-mt-10 md:mt-[-40px]"
      >
        <img
          src={TeamSuprans}
          alt="Team Suprans"
          className="rounded-lg shadow-lg w-40 sm:w-74 md:w-[700px] max-h-40 sm:max-h-56 md:max-h-72"
        />
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-red-600 mt-6">
          First & Biggest Canton Delegation
        </h2>
        <p className="text-base sm:text-2xl md:text-4xl font-semibold mt-2">
          by Mr. Suprans
        </p>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-6"
      >
        {[
          "3 Mega Fairs",
          "Verified Suppliers",
          "Pre-Trip Power Sessions",
          "RM Support",
        ].map((item, i) => (
          <span
            key={i}
            className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base bg-gray-100 rounded-full shadow hover:bg-gray-200 transition"
          >
            {item}
          </span>
        ))}
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center text-gray-600 mt-5 text-sm sm:text-base md:text-lg"
      >
        Over <span className="font-bold text-lg sm:text-xl md:text-2xl">200+ Indian buyers</span>{" "}
        guided across 10+ categories
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8"
      >
        <a href="/contactform1" className="w-full sm:w-auto">
     <button
   // 🔥 trigger modal from parent
  className="w-full sm:w-auto bg-red-600 text-white px-6 sm:px-10 py-2.5 sm:py-3 
             rounded-lg shadow hover:bg-red-700 transition"
>
  Join Delegation Now
</button>
        </a>

        <button
          onClick={scrollToExpert}
          className="w-full sm:w-auto bg-gray-100 text-black px-6 sm:px-10 py-2.5 sm:py-3 rounded-lg shadow hover:bg-gray-200 transition"
        >
          Talk to Expert
        </button>
      </motion.div>

      {/* Bottom Left & Right Decorations */}
      <div className="absolute bottom-0 left-2 w-10 sm:w-14 md:w-20 lg:w-24 hidden sm:block">
        <img src={CantonFairLogo} alt="Decoration Left" className="w-full h-auto" />
      </div>
      <div className="absolute bottom-0 right-2 w-10 sm:w-14 md:w-20 lg:w-24 hidden sm:block">
        <img src={CantonFairLogo} alt="Decoration Right" className="w-full h-auto" />
      </div>
    </section>
  );
}
