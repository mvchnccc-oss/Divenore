import { motion } from "framer-motion";
import {
  FaServer,
  FaShieldAlt,
  FaCloud,
  FaChartLine,
  FaLaptopCode,
  FaHeadset,
} from "react-icons/fa";

const services = [
  {
    icon: <FaServer size={40} />,
    title: "IT Infrastructure",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla vitae est vehicula, nec pellentesque nulla gravida.",
  },
  {
    icon: <FaLaptopCode size={40} />,
    title: "IT Consulting",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla vitae est vehicula, nec pellentesque nulla gravida.",
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Cybersecurity",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla vitae est vehicula, nec pellentesque nulla gravida.",
  },
  {
    icon: <FaCloud size={40} />,
    title: "Cloud Migration",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla vitae est vehicula, nec pellentesque nulla gravida.",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Digital Transformation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla vitae est vehicula, nec pellentesque nulla gravida.",
  },
  {
    icon: <FaHeadset size={40} />,
    title: "Managed IT Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla vitae est vehicula, nec pellentesque nulla gravida.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-28 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#1D9E75] text-2xl font-semibold uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Everything Your Business Needs
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Divenore covers every layer of your technology stack — from
            strategy to ongoing support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-2xl p-8 hover:border-[#1D9E75] hover:-translate-y-2 transition duration-300"
            >
              <div className="text-[#1D9E75] mb-5">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
