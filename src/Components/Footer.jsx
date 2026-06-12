import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] text-gray-300">
      {/* Top CTA */}
      <div className="container max-w-7xl mx-auto px-6 py-16 border-b border-gray-800">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to modernize your IT?
          </h2>
          <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
            <input
              type="email"
              placeholder="Enter your work email..."
              className="w-full md:w-80 bg-[#111827] px-5 py-4 outline-none border border-gray-700 focus:border-[#1D9E75] transition"
            />
            <button className="w-full bg-[#1D9E75] hover:bg-white hover:text-black duration-500 px-6 py-4 font-semibold text-white md:w-auto">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="container max-w-7xl mx-auto px-6 py-14 border-b border-gray-800">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div />
          <div className="md:border-x border-gray-700">
            <h4 className="text-xl font-semibold text-white mb-2">Egypt</h4>
            <div className="flex gap-3 items-center justify-center">
              <p className="text-gray-400">Cairo, Egypt</p>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-[#1D9E75]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div />
        </div>
      </div>

      {/* Bottom */}
      <div className="container max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} className="w-10 rounded-full" alt="logo" />
            <span className="text-xl font-bold text-white">Divenore</span>
          </div>

          <ul className="grid w-full grid-cols-3 gap-4 text-center text-sm uppercase tracking-wide md:flex md:items-center md:gap-6">
            {["Home", "Services", "Solution", "Pricing", "Contact"].map(
              (item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="hover:text-[#1D9E75] transition"
                  >
                    {item}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          <div className="flex gap-3 justify-center md:justify-end">
            {[FaFacebookF, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 border border-[#1D9E75] flex items-center justify-center rounded-lg hover:bg-[#1D9E75] hover:text-black transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black text-sm text-gray-500 py-5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-4">
          <p>© 2025 Divenore. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">
              Terms & Conditions
            </span>
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
