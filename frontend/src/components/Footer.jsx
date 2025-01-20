import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, 
      offset: 200, 
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <footer className="text-white font-serif p-5 bg-gray-800">
        <div className="flex flex-wrap py-12">
          <div
            className="p-5 lg:p-10 w-full md:w-1/3"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-once="false"
            data-aos-mirror="true"
          >
            <h2 className="font-extrabold text-left text-2xl">
              Wisdomhub Academy
            </h2>
            <p className="text-gray-400 mt-3">
              Welcome to Wisdom Hub academy, where young minds discover the
              magic of Chess! . With over 15 years of expertise in playing,
              teaching, and nurturing chess talent, we specialize in turning
              beginners into confident players and guiding enthusiasts to master
              the game. Our online classes are tailored to spark curiosity,
              build critical thinking, and foster love for the game.
            </p>
            <p className="text-gray-400 mt-3">
              Join us on this exciting journey, and let’s unlock the champion in
              your child
            </p>
          </div>
          <div
            className="p-5 lg:p-10 w-full md:w-1/3"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-once="false"
            data-aos-mirror="true"
          >
            <h2 className="font-extrabold text-left text-xl">
              More Information
            </h2>
            <p className="text-gray-400 mt-3 hover:text-blue-400 hover:cursor-pointer">
              <a href="/Privacy">Privacy Policy</a>
            </p>
            <p className="text-gray-400 mt-3 hover:text-blue-400 hover:cursor-pointer ">
              <a href="/Terms">Terms and Conditions</a>
            </p>
          </div>
          <div
            className="p-5  lg:p-10 w-full md:w-1/3"
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-once="false"
            data-aos-mirror="true"
          >
            <h2 className="font-extrabold text-left text-xl">Inquiries</h2>
            <p className="text-gray-400 mt-3">
              <a href="tel:+916380677117">+91-6380677117</a>
              <br />
              <a href="tel:+918428164212">+91-8428164212</a>
            </p>
          </div>
        </div>
        <div
          className="text-center text-gray-500 border-t border-gray-500 pt-3"
          data-aos="flip-left"
          data-aos-offset="10"
          data-aos-once="false"
          data-aos-mirror="true"
          data-aos-delay="200"
        >
          Copyright © 2025 WisdomHubAcademy. All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
