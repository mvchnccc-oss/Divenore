import { motion } from "framer-motion";

const cases = [
  {
    industry: "SMEs & Startups",
    problem: "No dedicated IT team and limited budget for technology.",
    solution: "Flexible managed IT support that grows with the business.",
    result: "Reliable infrastructure without a full-time IT hire",
  },
  {
    industry: "Healthcare",
    problem: "Strict data compliance and 24/7 system availability requirements.",
    solution: "Secure cloud infrastructure with compliance-first architecture.",
    result: "HIPAA-ready environment with zero downtime target",
  },
  {
    industry: "Finance & Banking",
    problem: "High-value targets for cyberattacks and strict regulatory pressure.",
    solution: "Multi-layered cybersecurity and real-time threat monitoring.",
    result: "Reduced risk exposure and audit-ready security posture",
  },
  {
    industry: "Retail & E-commerce",
    problem: "Peak-season traffic spikes and slow legacy checkout systems.",
    solution: "Cloud migration and performance optimization.",
    result: "Scalable infrastructure that handles demand surges",
  },
];

export default function UseCases() {
  return (
    <section className="py-28 bg-[#0b1120] text-white">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#1D9E75] text-2xl uppercase tracking-widest">
            Use Cases
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Proven Across Industries
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Divenore adapts its IT expertise to the specific needs of each
            industry and business size.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#111827] border border-gray-800 rounded-2xl p-8 hover:border-[#1D9E75] transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{item.industry}</h3>
              <p className="text-gray-400 text-sm mb-3">
                <span className="text-white font-semibold">Problem: </span>
                {item.problem}
              </p>
              <p className="text-gray-400 text-sm mb-3">
                <span className="text-white font-semibold">Solution: </span>
                {item.solution}
              </p>
              <p className="text-[#1D9E75] font-semibold text-sm">
                Result: {item.result}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
