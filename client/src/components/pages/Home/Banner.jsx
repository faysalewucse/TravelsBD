import cardImage from "../../../assets/Rectangle 1.png";
import cardImage2 from "../../../assets/Sreemongol.png";
import cardImage3 from "../../../assets/Sajek.png";
import cardImage4 from "../../../assets/sundorbon.png";
import CityCard from "../../CityCard";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import PrimaryButton from "../../PrimaryButton";
import { useRef, useState } from "react";
import SearchField from "../../SearchField";

export default function Banner() {
  const ref = useRef();

  const trandingCities = [
    {
      name: "Cox's Bazar",
      description:
        "Cox's Bazar is a city, fishing port, tourism centre and districtheadquarters in southeastern Bangladesh. It is famous mostly for itslong natural sandy beach, and it ...",
      image: cardImage,
    },
    {
      name: "Sreemongol",
      description:
        "Sreemongol is a city, fishing port, tourism centre and districtheadquarters in southeastern Bangladesh. It is famous mostly for itslong natural sandy beach, and it ...",
      image: cardImage2,
    },
    {
      name: "Sajek",
      description:
        "Sajek is a city, fishing port, tourism centre and districtheadquarters in southeastern Bangladesh. It is famous mostly for itslong natural sandy beach, and it ...",
      image: cardImage3,
    },
    {
      name: "Sundorbon",
      description:
        "Sundorbon is a city, fishing port, tourism centre and districtheadquarters in southeastern Bangladesh. It is famous mostly for itslong natural sandy beach, and it ...",
      image: cardImage4,
    },
  ];

  const [selectedCity, setSelectedCitiy] = useState({
    name: "Cox's Bazar",
    description:
      "Cox's Bazar is a city, fishing port, tourism centre and districtheadquarters in southeastern Bangladesh. It is famous mostly for itslong natural sandy beach, and it ...",
  });

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="text-white">
      <div className="max-w-screen-2xl mx-auto md:flex justify-between py-5 md:py-20">
        <div className="text-center md:text-left px-10 md:w-1/2">
          <h1 className="text-5xl md:text-8xl font-bold">
            {selectedCity.name}
          </h1>
          <p className="md:w-2/3 my-5">{selectedCity.description}</p>
          <PrimaryButton
            text={"Booking Now ->"}
            style={"md:w-2/3 lg:w-1/4 mb-5"}
          />

          <SearchField style={"md:hidden"} />
        </div>
        <div className="mt-5 p-5 md:p-0 md:mt-0 md:w-1/2">
          <div className="carousel carousel-center space-x-4" ref={ref}>
            {trandingCities.map((city) => (
              <CityCard
                onClickHandler={() =>
                  setSelectedCitiy({
                    name: city.name,
                    description: city.description,
                  })
                }
                img={city.image}
                cityName={city.name}
              />
            ))}
          </div>
          <div className="flex justify-center md:justify-start mt-5 gap-3">
            <SlArrowLeft
              onClick={() => scroll(-400)}
              className="bg-white p-2 rounded-full w-8 h-8 text-black"
            />
            <SlArrowRight
              onClick={() => scroll(400)}
              className="bg-white p-2 rounded-full w-8 h-8 text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
