import React from "react";
import Hero from "../Components/HomeComponents/Hero";
import AboutHome from "../Components/HomeComponents/AboutHome";
import ServiceHome from "../Components/HomeComponents/ServiceHome";
import HomeCTA from "../Components/HomeComponents/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutHome />
      <ServiceHome />
      <HomeCTA />
    </>
  );
}
