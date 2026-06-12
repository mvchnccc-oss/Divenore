import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/logo.png";

const links = [
  { path: "/home", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/solution", label: "Solution" },
  { path: "/pricing", label: "Pricing" },
];

const cta = { path: "/contact", label: "Contact Us" };

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="shadow-2xl px-4 sm:px-0 py-4 bg-[#0b1120] fixed start-0 end-0 z-50">
      <div className="container max-w-7xl mx-auto text-slate-100 rounded-2xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} className="w-10 rounded-full" alt="Divenore logo" />
            <div>
              <h2 className="text-3xl font-bold">Divenore</h2>
              <p className="text-sm text-[#1D9E75]">
                Smart IT. Smarter Business.
              </p>
            </div>
          </div>

          {/* Desktop links */}
          <ul className="md:flex gap-8 text-white hidden bg-[#111827] py-3 lg:px-10 px-5 rounded-3xl items-center">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-colors duration-300 ${
                      isActive
                        ? "text-[#1D9E75] font-semibold"
                        : "text-white hover:text-[#1D9E75]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="md:block hidden">
            <NavLink
              to={cta.path}
              className="inline-flex items-center px-6 py-3 rounded-full border border-[#1D9E75] bg-[#1D9E75] text-white font-semibold transition hover:bg-white hover:text-black"
            >
              {cta.label}
            </NavLink>
          </div>

          {/* Mobile toggle */}
          <div className="flex justify-end md:hidden">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center rounded-full border border-gray-600 p-3 text-white"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <ul
          className={`text-white space-y-3 mt-3 overflow-hidden transition-all duration-700 ease-in-out ${
            open
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 translate-y-8"
          }`}
        >
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                onClick={() => setOpen(false)}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive
                      ? "text-[#1D9E75] font-semibold"
                      : "text-white hover:text-[#1D9E75]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              onClick={() => setOpen(false)}
              to={cta.path}
              className="block rounded-full border border-[#1D9E75] bg-[#1D9E75] px-4 py-3 text-center text-sm font-semibold text-black transition hover:bg-white hover:text-black"
            >
              {cta.label}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
