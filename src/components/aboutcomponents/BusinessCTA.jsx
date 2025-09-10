
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const BusinessCTA = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="bg-red-600 text-white py-12 px-6 sm:px-8 md:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
        {/* Left Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug">
          Start, Run and Grow <br /> your Business
        </h2>

        {/* Right Content */}
        <div className="max-w-full md:max-w-md text-sm sm:text-base md:text-xl">
          <p className="mb-4">
            Get your U.S. company today. With our expert support at every step,
            we make it easy to get your company online and running smoothly.
          </p>
          <Link
            to="/contactform1"
            className="bg-white text-red-600 font-semibold px-5 py-2 rounded-full shadow 
             hover:bg-red-100 hover:scale-105 hover:shadow-lg 
             transition-transform duration-300 inline-block w-full md:w-auto text-center"
          >
            Start Your Business →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BusinessCTA;
