import { Link } from "react-router-dom";
import hero from "../../assets/Images/about.webp";

export default function SolutionsHero() {
  return (
    <section
      className="relative h-[90vh] flex items-center"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/75"></div>
      <div className="relative container max-w-7xl mx-auto px-6 text-center text-white">
        <span className="text-[#1D9E75] uppercase tracking-widest font-semibold text-lg">
          How We Work
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mt-4">
          A Clear Path to Digital Success
        </h1>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          We follow a proven engagement model so you always know what's
          happening — from the first consultation to long-term support.
        </p>
        <Link to="/contact">
          <button className="mt-8 bg-[#1D9E75] hover:bg-white hover:text-black transition duration-500 cursor-pointer px-8 py-4 font-semibold rounded-lg">
            Start a Project
          </button>
        </Link>
      </div>
    </section>
  );
}
