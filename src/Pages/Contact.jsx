import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-32 bg-[#0b1120] text-white">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-[#1D9E75] text-2xl uppercase tracking-widest font-semibold">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Let's Build Your IT Strategy
          </h1>
          <p className="mt-6 text-gray-400">
            Tell us about your business and technology challenges. Our team will
            get back to you with a tailored solution within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mt-20 items-start">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#111827] border border-gray-800 rounded-3xl p-10 space-y-3"
          >
            <div>
              <label className="text-sm text-gray-400">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-2 px-4 py-4 bg-[#0b1120] border border-gray-700 rounded-xl outline-none focus:border-[#1D9E75] transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Work Email</label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full mt-2 px-4 py-4 bg-[#0b1120] border border-gray-700 rounded-xl outline-none focus:border-[#1D9E75] transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Company Name</label>
              <input
                type="text"
                placeholder="Your Company"
                className="w-full mt-2 px-4 py-4 bg-[#0b1120] border border-gray-700 rounded-xl outline-none focus:border-[#1D9E75] transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                rows="5"
                placeholder="Tell us about your IT needs or challenges..."
                className="w-full mt-2 px-4 py-4 bg-[#0b1120] border border-gray-700 rounded-xl outline-none focus:border-[#1D9E75] transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1D9E75] hover:bg-white hover:text-black transition duration-500 py-4 rounded-xl font-semibold"
            >
              Send Message
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Why Contact Divenore?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We don't sell off-the-shelf packages. Every engagement starts
                with understanding your business — then we design the right IT
                solution for your size, industry, and goals.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#1D9E75] text-xl" />
                <span className="text-gray-300">contact@divenore.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#1D9E75] text-xl" />
                <span className="text-gray-300">+20 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#1D9E75] text-xl" />
                <span className="text-gray-300">Cairo, Egypt</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-500 text-sm mt-20"
        >
          We usually respond within 24 hours.
        </motion.p>
      </div>
    </section>
  );
}
