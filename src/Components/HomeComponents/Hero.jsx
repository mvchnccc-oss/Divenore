import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/Images/hero1.avif";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const word = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 17, 32, 0.88), rgba(11, 17, 32, 0.88)), url(${hero})`,
      }}
    >
      <div className="container max-w-7xl mx-auto px-6 text-white relative z-10">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-6xl font-bold max-w-3xl leading-tight flex flex-wrap gap-x-3"
        >
          {"Smart IT Solutions for Digital Business".split(" ").map((w, i) => (
            <motion.span
              key={i}
              variants={word}
              className={`inline-block drop-shadow-lg ${
                w === "Smart" || w === "Digital" ? "text-[#1D9E75]" : ""
              }`}
            >
              {w}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-gray-300 mt-6 max-w-2xl drop-shadow-lg text-lg"
        >
          Divenore delivers end-to-end IT consulting and services — from
          infrastructure design to digital transformation — tailored for
          businesses in Egypt and beyond.
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/contact">
            <button className="bg-[#1D9E75] duration-400 hover:bg-white hover:text-black transition-colors cursor-pointer px-8 py-3 rounded-xl font-semibold">
              Get Free Consultation
            </button>
          </Link>
          <Link to="/services">
            <button className="border border-gray-500 duration-400 hover:text-[#1D9E75] hover:border-[#1D9E75] cursor-pointer transition px-8 py-3 rounded-xl">
              Explore Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
