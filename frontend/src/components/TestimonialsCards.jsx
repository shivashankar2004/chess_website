import React from "react";

function TestimonialCard({ image, feedback, name, designation, rating }) {
  return (
    <div
      className="bg-white text-black py-10 px-6 flex flex-col items-center rounded-lg shadow-2xl max-w-sm transform transition-transform duration-300 hover:scale-100"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover rounded-t-lg border border-gray-300"
      />
      <div className="p-6 text-center">
        <p className="text-lg leading-relaxed italic text-gray-700 mb-4">
          "{feedback}"
        </p>
        <div className="mt-4">
          <span className="block text-xl font-bold text-black">{name}</span>
          <span className="block text-sm text-gray-500">{designation}</span>
        </div>
        <div className="flex mt-4 justify-center">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl font-bold mx-1">
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
