
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function OfferBanner({onButtonClick}) {
  const [timeLeft, setTimeLeft] = useState({
    days: 23,
    hours: 11,
    minutes: 54,
    seconds: 33,
  });

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <>
      <style>{`
        .btn-hover {
          transition: transform 0.3s ease, background-color 0.3s ease;
        }
        .btn-hover:hover {
          background-color: #f87171;
          transform: scale(1.05);
          color: white;
        }

        .badge-hover {
          transition: transform 0.3s ease, background-color 0.3s ease;
          cursor: pointer;
        }
        .badge-hover:hover {
          background-color: #f87171;
          transform: scale(1.1) rotate(-3deg);
          box-shadow: 0 8px 15px rgba(248, 113, 113, 0.5);
        }
      `}</style>

      {/* ✅ Desktop version (sm and up) */}
      <div
        className="hidden sm:flex flex-col items-center justify-start bg-gradient-to-b from-[#F61C0D] to-red-600 text-white p-6 pt-8 text-center"
        data-aos="fade-up"
      >
       <button
  onClick={onButtonClick} // parent handler to open modal
  className="btn-hover bg-white text-black font-bold px-5 py-2 rounded-full shadow-md h-17 w-110 text-3xl mt-0 inline-block"
>
  Build My Store
</button>

        <h1 className="text-6xl font-semibold mt-6" data-aos="fade-right">
          Built your dream business
        </h1>
        <p className="text-4xl font-medium mt-2" data-aos="fade-left">
          with
        </p>
        <h2 className="text-6xl font-bold mt-1" data-aos="fade-right">
          SUPRANS
        </h2>

        <div
          className="badge-hover flex items-center gap-2 bg-black px-4 py-2 rounded-full mt-6"
          data-aos="zoom-in"
        >
          <span className="text-white font-bold text-2xl">30% OFF</span>
        </div>

        <p
          className="uppercase text-2xl font-semibold tracking-wider mt-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Offer Ending In
        </p>

        <div
          className="flex items-center gap-4 mt-4 text-white font-bold"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div
              key={unit}
              className="bg-red-700 px-4 py-3 rounded-lg shadow-md"
            >
              <div className="text-4xl">
                {timeLeft[unit].toString().padStart(2, "0")}
              </div>
              <div className="text-sm mt-1 uppercase">{unit}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Mobile version (below sm) */}
      <div
        className="sm:hidden flex flex-col items-center justify-start bg-gradient-to-b from-[#F61C0D] to-red-600 text-white p-4 text-center"
        data-aos="fade-up"
      >
        <Link
          to="/contactform1"
          className="btn-hover bg-white text-black font-semibold px-4 py-2 rounded-full shadow-md text-lg mt-2"
        >
          Build My Store
        </Link>

        <h1 className="text-2xl font-semibold mt-4" data-aos="fade-right">
          Built your dream business
        </h1>
        <p className="text-lg font-medium mt-1" data-aos="fade-left">
          with
        </p>
        <h2 className="text-3xl font-bold mt-1" data-aos="fade-right">
          SUPRANS
        </h2>

        <div
          className="badge-hover bg-black px-3 py-1 rounded-full mt-4"
          data-aos="zoom-in"
        >
          <span className="text-white font-bold text-base">30% OFF</span>
        </div>

        <p
          className="uppercase text-base font-semibold tracking-wider mt-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Offer Ending In
        </p>

        <div
          className="flex flex-wrap justify-center gap-2 mt-3 font-bold"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div
              key={unit}
              className="bg-red-700 px-3 py-2 rounded-lg shadow-md text-center min-w-[60px]"
            >
              <div className="text-xl">
                {timeLeft[unit].toString().padStart(2, "0")}
              </div>
              <div className="text-xs mt-1 uppercase">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
