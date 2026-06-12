import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We assess your current IT environment, business goals, and pain points.",
  },
  {
    step: "02",
    title: "Strategy",
    desc: "We build a clear technology roadmap aligned with your objectives.",
  },
  {
    step: "03",
    title: "Implementation",
    desc: "Our team executes with minimal disruption to your operations.",
  },
  {
    step: "04",
    title: "Support & Scale",
    desc: "Ongoing monitoring, optimization, and support as your business grows.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#1D9E75] text-3xl font-semibold uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            From Consultation to Delivery
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl border border-gray-300 hover:shadow-xl transition duration-300"
            >
              <div className="text-[#1D9E75] text-5xl font-bold absolute -top-6 right-6 opacity-70">
                {item.step}
              </div>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
