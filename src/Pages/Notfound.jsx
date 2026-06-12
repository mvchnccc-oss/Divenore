import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <section className="min-h-screen bg-[#0b1120] flex items-center justify-center text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-xl"
      >
        <h1 className="text-[120px] font-extrabold text-[#1D9E75] leading-none">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-6">Page Not Found</h2>
        <p className="text-gray-400 mt-4">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-[#1D9E75] hover:bg-white hover:text-black transition duration-500 px-8 py-4 font-semibold rounded-xl"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="border border-gray-700 hover:border-[#1D9E75] hover:text-[#1D9E75] transition duration-500 px-8 py-4 font-semibold rounded-xl"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
