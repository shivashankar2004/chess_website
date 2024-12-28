import React from "react";
import logo from "../assests/logo.png";

function Header() {
  return (
    <>
      <div className="fixed w-full bg-transparent bg-[#93C572] ">
        <div className="container py-4 lg:mx-auto border-black">
          <div className="flex ">
            <div className="w-auto">
              <img className=" hover:cursor-pointer" src={logo}></img>
            </div>
            <div className="w-full  my-auto">
              <ul className="hidden md:block md:flex flex-wrap my-auto text-white ">
                <li className="ml-auto px-6 font-medium font-serif text-3xl hover:text-yellow-500 duration-300">
                  <a className=" hover:cursor-pointer">Home</a>
                </li>
                <li className="px-6 font-medium font-serif text-3xl hover:text-yellow-500 duration-300">
                  <a className=" hover:cursor-pointer">Sechudle</a>
                </li>
                <li className="block md:hidden lg:block px-6 font-medium font-serif text-3xl hover:text-yellow-500 duration-300">
                  <a className=" hover:cursor-pointer">Newsletter</a>
                </li>
                <li className="block md:hidden lg:block md:block px-6 font-medium font-serif text-3xl hover:text-yellow-500 duration-300">
                  <a className=" hover:cursor-pointer">About</a>
                </li>

                <li className="px-6 font-medium font-serif text-3xl hover:text-yellow-500 duration-300">
                  <a className=" hover:cursor-pointer">Book a Demo</a>
                </li>
              </ul>
            </div>
            <div className="block  lg:hidden pr-5">
              <div className="flex items">
                <img className=" hover:cursor-pointer" src={logo}></img>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="white"
                  className="w-10 h-10"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
