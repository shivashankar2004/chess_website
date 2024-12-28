import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";

function HomePage() {
  return (
    <div className="h-screen bg-fixed bg-parallax bg-cover">
      <div >
        <Header />
        <div className="h-screen py-28 text-center text-7xl text-rose-50 ">
          <div className="py-10 text-8xl font-serif text-yellow-500">
            <span className=" hover:cursor-pointer">WISDOMHUB CHESS</span>
          </div>
          <div className="pb-10 text-8xl font-serif text-yellow-500">
            <span className=" hover:cursor-pointer">ACADEMY</span>
          </div>
          <div className="text-xl">
            <span className=" hover:cursor-pointer">The beauty of a move lies not in its appearance but in the thought
            behind it</span>
          </div>

          <div className="py-6 text-xl"><span className=" hover:cursor-pointer">Every chess master was once a beginner</span></div>
          <Button text="Book a Free Demo" />
        </div>
        <div className="bg-green-300 text-center">
cbwk
        </div>
      </div>
    </div>
  );
}

export default HomePage;
