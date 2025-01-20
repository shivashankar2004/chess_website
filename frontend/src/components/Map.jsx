import React, { useEffect } from "react";
import WorldMap from "react-svg-worldmap";
import Aos from "aos";
import "aos/dist/aos.css";

const Map = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const data = [
    { country: "cn", value: 1389618778 },
    { country: "in", value: 1311559204 },
    { country: "us", value: 331883986 },
    { country: "id", value: 264935824 },
    { country: "pk", value: 210797836 },
    { country: "br", value: 210301591 },
    { country: "ng", value: 208679114 },
    { country: "bd", value: 161062905 },
    { country: "ru", value: 141944641 },
    { country: "mx", value: 127318112 },
  ];

  const countryNames = {
    cn: "China",
    in: "India",
    us: "United States",
    id: "Indonesia",
    pk: "Pakistan",
    br: "Brazil",
    ng: "Nigeria",
    bd: "Bangladesh",
    ru: "Russia",
    mx: "Mexico",
  };

  return (
    <div className="container mx-auto flex flex-col items-center py-10 relative z-10">
      <WorldMap color="red" value-suffix=" people" size="xl" data={data} />
      <div
        className="mt-8 w-full max-w-5xl"
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-mirror="true"
        data-aos-offset="300"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Country Data</h2>
        <ul className=" grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {data.map((country, index) => (
            <li
              key={index}
              className="hover:cursor-pointer bg-gray-50 p-4 rounded-lg shadow-lg text-black border border-gray-200"
            >
              <p className="text-lg font-bold uppercase">
                {countryNames[country.country]}{" "}
              </p>
              <p className="text-sm text-gray-700">
                {country.value.toLocaleString()} people
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Map;
