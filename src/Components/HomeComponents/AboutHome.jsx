import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/Images/about.webp";

export default function AboutHome() {
  return (
    <section className="py-24 bg-white text-gray-700">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#1D9E75] font-semibold uppercase tracking-widest">
              About Divenore
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
              IT Expertise Built <br /> for Modern Business
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Divenore is a Cairo-based IT Services and Consulting firm helping
              businesses design, deploy, and manage their technology
              infrastructure. We bridge the gap between business strategy and
              technical execution.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              From cybersecurity and cloud migration to digital transformation
              consulting, we deliver solutions that are practical, scalable, and
              tailored to your needs.
            </p>

            <div className="mt-8 flex gap-4">
              <Link to="/services">
                <button className="bg-black text-white hover:bg-[#1D9E75] hover:text-white duration-500 transition px-6 py-3 font-semibold rounded-lg">
                  Our Services
                </button>
              </Link>
              <Link to="/solution">
                <button className="border border-gray-300 hover:border-[#1D9E75] hover:text-[#1D9E75] duration-500 px-6 py-3 rounded-lg">
                  How We Work
                </button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src={aboutImg}
              alt="Divenore IT Consulting"
              className="w-full rounded-3xl shadow-xl object-cover"
            />
            <div className="absolute -bottom-5 -right-5 bg-[#1D9E75] text-white px-6 py-4 rounded-xl shadow-lg">
              IT Services & Consulting
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
