import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomeCTA() {
  return (
    <section className="py-28 bg-[#0b1120] text-white">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-[#111827] border border-gray-800 rounded-3xl p-16"
        >
          <span className="text-[#1D9E75] uppercase tracking-widest font-semibold">
            Free Consultation
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Start Your Digital Transformation Today
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            Divenore is ready to help your business build, secure, and scale its
            IT infrastructure. Book a free 30-minute consultation with our team
            — no commitment required.
          </p>

          <ul className="mt-10 space-y-3 text-gray-300 text-sm">
            <li>✔ Tailored IT strategy for your business</li>
            <li>✔ Expert team with hands-on experience</li>
            <li>✔ Transparent pricing, no hidden fees</li>
            <li>✔ Ongoing support after delivery</li>
          </ul>

          <div className="mt-12">
            <Link to="/contact">
              <button className="bg-[#1D9E75] hover:bg-white hover:text-black transition duration-500 px-12 py-4 font-semibold rounded-xl">
                Book Free Consultation
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
