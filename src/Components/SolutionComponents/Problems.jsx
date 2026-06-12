import { motion } from "framer-motion";

const problems = [
  {
    title: "Outdated Infrastructure",
    desc: "Legacy systems slow your team down and increase security risk.",
  },
  {
    title: "Cybersecurity Gaps",
    desc: "Unprotected endpoints and weak policies leave your data exposed.",
  },
  {
    title: "No IT Strategy",
    desc: "Technology decisions made without a clear roadmap cost time and money.",
  },
  {
    title: "Reactive Support",
    desc: "Fixing problems after they happen — instead of preventing them.",
  },
];

export default function Problems() {
  return (
    <section className="py-28 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-[#1D9E75] text-3xl font-semibold uppercase tracking-widest">
            The Problem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Why Businesses Struggle with IT
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Most companies don't lack technology — they lack the right strategy
            and expertise to use it effectively.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#0b1120] border border-gray-800 p-8 rounded-2xl hover:border-[#1D9E75] hover:-translate-y-2 transition text-white"
            >
              <h3 className="text-xl text-[#1D9E75] font-semibold">
                {item.title}
              </h3>
              <p className="text-gray-400 mt-4 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
