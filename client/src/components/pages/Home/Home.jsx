import React from "react";
import Banner from "./Banner";
import Navbar from "../../Navar";

export default function Home() {
  return (
    <div className="bg-hero-pattern">
      <div class="w-full h-full backdrop-brightness-50">
        <Navbar />
        <Banner />
      </div>
    </div>
  );
}
