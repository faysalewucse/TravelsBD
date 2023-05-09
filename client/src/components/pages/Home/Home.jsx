import React from "react";
import Banner from "./Banner";
import Navbar from "../../Navar";

export default function Home() {
  return (
    <div className="bg-hero-pattern bg-cover">
      <div className="w-full h-full backdrop-brightness-50">
        <Navbar />
        <Banner />
      </div>
    </div>
  );
}
