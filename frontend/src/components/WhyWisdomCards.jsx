import React from "react";

function Card({ image, title }) {
  return (
    <div
      className="items-center bg-white rounded-lg shadow-lg p-5 transform transition-all duration-300 hover:scale-105"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <img
        src={image.src}
        alt={image.title}
        className="w-full h-52 object-cover rounded-t-lg mb-4 border border-gray-300"
      />
      <p className="text-lg font-serif font-semibold text-center text-black">
        {title}
      </p>
    </div>
  );
}

export default Card;
