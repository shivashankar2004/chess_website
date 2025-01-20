import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { testimonials, programs, images } from "../assests/datas";
import Aos from "aos";
import "aos/dist/aos.css";
import DialogBox from "../components/DialogBox";
import Card from "../components/WhyWisdomCards";
import TestimonialCard from "../components/TestimonialsCards";
import Map from "../components/Map";
import { useNavigate } from "react-router-dom";

function HomePage() {


  const navigation = useNavigate();
  const [open, setOpen] = useState(false);
  const [showAllWhy, setShowAllWhy] = useState(false);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  const isMobile = window.innerWidth < 640;
  const visibleImages = showAllWhy || !isMobile ? images : images.slice(0, 2);
  const visibleTestimonials =
    showAllTestimonials || !isMobile ? testimonials : testimonials.slice(0, 2);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const renderShowMoreButton = (showAll, toggleShow) => {
    return (
      isMobile && (
        <div className="flex justify-center mt-8">
          <Button
            text={showAll ? "Show Less" : "Show More"}
            onClick={toggleShow}
            bgColor="bg-white"
            textColor="text-blue-500"
            hoverBgColor="hover:bg-blue-100"
            padding="px-6 py-2"
            borderColor="border-blue-400"
            hoverBorderColor="hover:border-blue-500"
            width="w-auto"
          />
        </div>
      )
    );
  };

  return (
    <div className="h-full bg-black ">
      <div className="overflow-x-hidden">
        <Header />

        {/* Hero Section */}
        <div
          className="h-screen flex flex-col justify-center items-center text-center px-4 py-16 text-rose-50 sm:py-20 md:py-28 bg-gradient-to-r from-blue-500 to-indigo-900"
          style={{
            backgroundImage: "url('./assests/Dashboard.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="font-serif text-blue-400 text-4xl md:text-6xl lg:text-8xl"
            data-aos="zoom-in"
          >
            <span className="hover:cursor-pointer">WisdomHub Chess</span>
          </div>
          <div
            className="pb-2 md:py-4 text-4xl font-serif text-blue-400 sm:text-6xl lg:text-8xl"
            data-aos="zoom-in"
          >
            <span className="hover:cursor-pointer">Academy</span>
          </div>
          <p
            className="mt-2 sm:text-base md:text-lg"
            data-aos="zoom-in"
            data-aos-offset="0"
          >
            The beauty of a move lies not in its appearance but in the thought
            behind it
          </p>
          <p
            className="py-3 sm:text-base md:text-lg"
            data-aos="zoom-in"
            data-aos-offset="0"
          >
            Every chess master was once a beginner
          </p>
          <div className="mt-8" data-aos="zoom-in">
            <Button
              borderColor="border-white"
              bgColor="bg-blue-500"
              textColor="text-white"
              hoverBgColor="hover:bg-white"
              hoverTextColor="hover:text-blue-500"
              onClick={() => navigation("/Payment")}
              text="Book a Free Demo"
              width="w-full sm:w-80"
              size="text-lg sm:text-xl"
            />
            <DialogBox open={open} setOpen={setOpen} />
          </div>
        </div>

        {/* Why WisdomHub Section */}
        <div className="bg-blue-400 text-black py-14">
          <h1
            className="text-3xl md:text-5xl font-extrabold font-serif text-white text-center mb-10"
            data-aos="fade-up"
          >
            Why Wisdomhub Academy?
          </h1>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10"
            data-aos="fade-up"
          >
            {visibleImages.map((image, index) => (
              <Card key={index} image={image} title={image.title} />
            ))}
          </div>
          {renderShowMoreButton(showAllWhy, () => setShowAllWhy(!showAllWhy))}
        </div>

        {/* About Us Section */}
        <div className="bg-white py-10">
          <h1
            className="text-3xl md:text-5xl font-bold py-8 font-serif text-center"
            data-aos="fade-down"
          >
            About Us
          </h1>
          <p
            className="px-16 md:px-20 text-lg md:text-xl text-justify md:text-center font-serif"
            data-aos="zoom-in"
          >
            Welcome to Wisdom Hub academy, where young minds discover the magic
            of Chess! With over 15 years of expertise in playing, teaching, and
            nurturing chess talent, we specialize in turning beginners into
            confident players and guiding enthusiasts to master the game.
          </p>
          <br />
          <p
            className="px-16 md:px-20 text-lg md:text-xl text-justify md:text-center font-serif"
            data-aos="zoom-in"
          >
            Led by passionate coaches with FIDE ratings and years of experience,
            we provide a fun, interactive, and engaging learning environment.
          </p>
          <br />
          <p
            className="px-16 md:px-20 text-lg md:text-xl text-justify md:text-center font-serif pb-8"
            data-aos="zoom-in"
          >
            Join us on this exciting journey, and let’s unlock the champion in
            your child.
          </p>
        </div>

        {/* Training Programs Section */}
        <div className="bg-black font-serif text-white py-10">
          <h1
            className="text-3xl md:text-5xl font-bold font-serif text-center mb-10"
            data-aos="fade-down"
          >
            Training Programs
          </h1>
          <div className="flex flex-wrap justify-center gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg shadow-lg w-80 p-6"
                data-aos="flip-left"
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
                <Button
                  text="Enroll Now"
                  size="text-sm"
                  padding="px-6 py-2"
                  bgColor="bg-blue-500"
                  textColor="text-white"
                  hoverBgColor="hover:bg-blue-600"
                  hoverTextColor="hover:text-white"
                  onClick={() => alert(`Enrolled in ${program.level} Program!`)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="font-serif bg-blue-400 py-14">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12  "
            data-aos="fade-down"
          >
            Testimonials
          </h1>
          <div className="flex flex-wrap justify-center gap-10 px-4 ">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          {renderShowMoreButton(showAllTestimonials, () =>
            setShowAllTestimonials(!showAllTestimonials)
          )}
        </div>

        {/* World Map Section */}
        <div className="bg-white text-black py-40 lg:pt-20 flex flex-col items-center justify-center px-4 md:px-8 relative">
          <h1
            className="text-3xl md:text-5xl font-extrabold font-serif text-center pb-2 sm:pb-4 md:pb-10"
            data-aos="fade-down"
          >
            Our Clients
          </h1>
          <div className="w-full flex justify-center mb-2 sm:mb-4 md:mb-10">
            <Map />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
