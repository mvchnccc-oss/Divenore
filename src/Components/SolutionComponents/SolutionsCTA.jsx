import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SolutionsCTA() {
  return (
    <section className="py-28 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gray-100 rounded-3xl shadow-xl p-14 text-center"
        >
          <span className="text-[#1D9E75] uppercase tracking-widest font-semibold">
            Ready to Get Started?
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-black mt-6">
            Let's Build Your IT <br /> Strategy Together
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Book a free consultation with Divenore and get a clear picture of
            what your business needs to modernize, secure, and scale.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-[#1D9E75] hover:bg-black hover:text-white transition duration-500 px-10 py-4 font-semibold rounded-xl text-white">
                Book Free Consultation
              </button>
            </Link>
            <Link to="/services">
              <button className="border border-gray-300 hover:border-[#1D9E75] hover:text-[#1D9E75] transition duration-500 px-10 py-4 font-semibold rounded-xl">
                Explore Services
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
