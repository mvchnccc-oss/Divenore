import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    desc: "For small businesses getting started with IT",
    price: null,
    features: [
      "Up to 10 users",
      "Basic IT support",
      "Security assessment",
      "Email support",
    ],
  },
  {
    name: "Professional",
    desc: "For growing companies with ongoing IT needs",
    price: null,
    highlight: true,
    features: [
      "Up to 50 users",
      "Managed IT support",
      "Cloud migration assistance",
      "Cybersecurity monitoring",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    desc: "For large organizations with complex infrastructure",
    price: null,
    features: [
      "Unlimited users",
      "Custom IT strategy",
      "Dedicated account manager",
      "On-site support",
      "SLA guarantee",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-32 bg-[#0b1120] text-white">
      <div className="container max-w-7xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#1D9E75] text-3xl uppercase tracking-widest font-semibold"
        >
          Pricing
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mt-4"
        >
          Transparent Plans for Every Business
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-6 text-gray-400 max-w-2xl mx-auto"
        >
          All plans include an initial free consultation. Pricing is customized
          based on your specific requirements.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mt-20 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`flex h-full flex-col justify-between rounded-3xl p-10 border ${
                plan.highlight
                  ? "bg-[#111827] border-[#1D9E75]"
                  : "bg-[#0f1629] border-gray-800"
              }`}
            >
              {plan.highlight && (
                <div className="mb-4">
                  <span className="bg-[#1D9E75] text-white text-xs px-4 py-1 rounded-full font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-gray-400 text-sm">{plan.desc}</p>

              <div className="mt-6 text-3xl font-bold text-gray-500 italic text-sm">
                Custom pricing
              </div>

              <ul className="mt-8 space-y-4 text-sm text-gray-300">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1D9E75] rounded-full"></span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <button
                  className={`mt-10 w-full px-6 py-4 rounded-xl font-semibold transition ${
                    plan.highlight
                      ? "bg-[#1D9E75] hover:bg-white hover:text-black"
                      : "border border-gray-700 hover:border-[#1D9E75] hover:text-[#1D9E75]"
                  }`}
                >
                  {plan.highlight ? "Get Started" : "Contact Sales"}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-gray-500 text-sm"
        >
          * All pricing is customized based on company size, scope, and
          specific IT requirements. Contact us for a free quote.
        </motion.p>
      </div>
    </section>
  );
}
