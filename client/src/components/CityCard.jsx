import React from "react";

export default function CityCard({ onClickHandler, img, cityName }) {
  return (
    <div
      onClick={onClickHandler}
      className="carousel-item hover:shadow-2xl border-4 hover:border-primary border-transparent rounded-2xl relative"
    >
      <img className="rounded-xl h-96 w-64 object-cover" src={img} alt="card" />
      <div className="h-96 w-64 absolute bottom-0 bg-gradient-to-b rounded-xl to-black from-transparent">
        <h1 className="absolute bottom-3 font-bold text-2xl ml-5">
          {cityName}
        </h1>
      </div>
    </div>
  );
}
