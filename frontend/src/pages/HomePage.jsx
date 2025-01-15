import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { testimonials, programs, images } from "../assests/datas";
import Aos from "aos";
import "aos/dist/aos.css";
import DialogBox from "../components/DialogBox";

function HomePage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <div className="  h-screen bg-black sm:bg-black lg:bg-parallax lg:bg-cover bg-fixed">
      <div className="overflow-x-hidden">
        <Header />
        <div className=" h-screen flex flex-col justify-center items-center text-center px-4 py-16 text-rose-50 sm:py-20 md:py-28">
          <div
            className=" pt-4 font-serif text-blue-400 text-4xl md:text-6xl lg:text-8xl"
            data-aos="zoom-in"
            data-aos-once="true"
          >
            <span className="hover:cursor-pointer">WisdomHub Chess</span>
          </div>
          <div
            className="pb-2 md:py-4 text-4xl font-serif text-blue-400 sm:text-6xl md:text-6xl lg:text-8xl"
            data-aos="zoom-in"
            data-aos-once="true"
          >
            <span className="hover:cursor-pointer">Academy</span>
          </div>
          <div
            className=" sm:text-base md:text-lg"
            data-aos="zoom-in"
            data-aos-once="true"
          >
            <span className="hover:cursor-pointer">
              The beauty of a move lies not in its appearance but in the thought
              behind it
            </span>
          </div>
          <div
            className="py-3 sm:text-base md:text-lg"
            data-aos="zoom-in"
            data-aos-once="true"
          >
            <span className="hover:cursor-pointer">
              Every chess master was once a beginner
            </span>
          </div>
          <div
            className="mt-8"
            data-aos="zoom-in"
            data-aos-once="true"
            data-aos-duration="800"
            data-aos-offset="0"
          >
            <Button
              borderColor="border-white"
              bgColor="bg-blue-500"
              textColor="text-white"
              hoverBgColor="hover:bg-white"
              hoverTextColor="hover:text-blue-500"
              onClick={() => setOpen(true)}
              text="Book a Free Demo"
              width="w-full sm:w-80"
              size="text-lg sm:text-xl"
            />
            <DialogBox open={open} setOpen={setOpen} />
          </div>
        </div>
        <div className="bg-blue-400 text-black py-14">
          <div
            className="text-center mb-10"
            data-aos="fade-up"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h1 className="text-5xl font-extrabold font-serif">
              <span className="text-white">Why Wisdomhub Academy?</span>
            </h1>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 px-10"
            data-aos="fade-up"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="items-center bg-white rounded-lg shadow-lg p-5 transform transition-all duration-300 hover:scale-105"
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} // Alternate between fade-right and fade-left
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-offset="300"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-52 object-fill rounded-t-lg mb-4 border border-gray-300"
                />
                <p className="text-lg font-serif font-semibold text-center text-black">
                  {image.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className=" my-10">
          <h1
            className="text-5xl font-bold py-8 font-serif text-center"
            data-aos="fade-down"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-duration="800"
          >
            About Us
          </h1>
          <p
            className="px-20 text-xl font-serif"
            data-aos="zoom-in"
            data-aos-once="false"
            data-aos-mirror="true"
            data-aos-offset="300"
          >
            Welcome to Wisdom Hub academy, where young minds discover the magic
            of Chess! With over 15 years of expertise in playing, teaching, and
            nurturing chess talent, we specialize in turning beginners into
            confident players and guiding enthusiasts to master the game. Our
            online classes are tailored to spark curiosity, build critical
            thinking, and foster love for the game.
          </p>
          <br />
          <p
            className="px-20 text-xl font-serif"
            data-aos="zoom-in"
            data-aos-once="false"
            data-aos-mirror="true"
            data-aos-offset="300"
          >
            Led by passionate coaches with FIDE ratings and years of experience,
            we provide a fun, interactive, and engaging learning environment.
            Whether your child is taking their first steps into chess or aiming
            to refine their skills, we are here to help them succeed—on the
            board and beyond!
          </p>
          <br />
          <p
            className="px-20 text-xl font-serif pb-8"
            data-aos="zoom-in"
            data-aos-once="false"
            data-aos-mirror="true"
            data-aos-offset="300"
          >
            Join us on this exciting journey, and let’s unlock the champion in
            your child.
          </p>
        </div>
        <div className="bg-black font-serif text-white min-h-screen py-10">
          <h1
            className="text-5xl font-bold font-serif text-center mb-10"
            data-aos="fade-down"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-duration="800"
          >
            Training Programs
          </h1>
          <div className="flex flex-wrap justify-center gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg shadow-lg w-80 p-6"
                data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}
                data-aos-once="false"
                data-aos-delay="200"
                data-aos-offset="300"
              >
                <h2 className="text-2xl font-bold text-blue-500 mb-4 text-center">
                  {program.level}
                </h2>
                <p className="text-sm mb-4">{program.description}</p>
                <h3 className="text-lg font-semibold text-blue-500 mb-2">
                  Key Concepts:
                </h3>
                <ul className="list-disc list-inside text-sm mb-4">
                  {program.keyConcepts.map((concept, idx) => (
                    <li key={idx}>{concept}</li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold text-blue-500 mb-2">
                  What You Will Get:
                </h3>
                <ul className="list-disc list-inside  text-sm mb-4">
                  {program.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
                <p className="text-lg font-semibold text-blue-500 mb-4">
                  Fee Structure:
                  <span className="text-black text-sm">{program.fee}</span>
                </p>
                <Button
                  text="Enroll Now"
                  size="text-sm"
                  padding="px-6 py-2"
                  bgColor="bg-blue-500"
                  textColor="text-black"
                  hoverBgColor="hover:bg-blue-600"
                  hoverTextColor="hover:text-white"
                  onClick={() => alert(`Enrolled in ${program.level} Program!`)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="font-serif bg-blue-400 py-14">
          <div
            className="text-5xl font-extrabold text-white text-center mb-12"
            data-aos="fade-down"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-duration="800"
          >
            <h1>Testimonials</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-10 px-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white text-black py-10 px-6 flex flex-col items-center rounded-lg shadow-2xl max-w-sm transform transition-transform duration-300 hover:scale-105"
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} // Alternate between fade-right and fade-left
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-offset="300"
              >
                <img
                  src={testimonial.image}
                  alt={`Testimonial ${index}`}
                  className="w-72 h-56 rounded-t-lg object-fill border border-gray-300"
                />

                <div className="p-6 text-center">
                  <p className="text-lg leading-relaxed italic text-gray-700 mb-4">
                    "{testimonial.feedback}"
                  </p>
                  <div className="mt-4">
                    <span className="block text-xl font-bold text-black">
                      {testimonial.name}
                    </span>
                    <span className="block text-sm text-gray-500">
                      {testimonial.designation}
                    </span>
                  </div>
                  <div className="flex mt-4 justify-center">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-400  text-xl font-bold mx-1"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
