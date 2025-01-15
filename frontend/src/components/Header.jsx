import React, { useState } from "react";
import logo from "../assests/logo.png";
import { Link, useLocation } from "react-router-dom";
import DialogBox from "./DialogBox";

function Header() {
  const [open, setOpen] = useState(false);
  const [dialog, setdialog] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className="fixed w-full z-50">
        <div
          className="mx-auto py-4 px-6 lg:px-10 backdrop-blur-md transition-all duration-300 ease-in-out"
          style={{
            background: "rgba(0, 0, 0, 0.2)",
            color: "white",
          }}
        >
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center">
              <img className="hover:cursor-pointer" src={logo} alt="Logo" />
            </div>
            <ul className="flex space-x-8">
              <li
                className={`text-2xl font-medium font-serif ${
                  location.pathname === "/"
                    ? "text-blue-400"
                    : "hover:text-blue-400"
                } transition duration-200`}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={`text-2xl font-medium font-serif ${
                  location.pathname === "/Schedule"
                    ? "text-blue-400"
                    : "hover:text-blue-400"
                } transition duration-200`}
              >
                <Link to="/Schedule">Schedule</Link>
              </li>
              <li
                className={`text-2xl font-medium font-serif ${
                  location.pathname === "/About"
                    ? "text-blue-400"
                    : "hover:text-blue-400"
                } transition duration-200`}
              >
                <Link to="/About">About</Link>
              </li>
              <li className="text-2xl font-medium font-serif hover:text-blue-400 transition duration-200">
                <a href="#" onClick={() => setdialog(true)}>
                  Book a Demo
                </a>
              </li>
            </ul>
          </div>

          <div className="flex md:hidden items-center justify-between w-full h-20">
            <div className="flex justify-center w-full">
              <img
                className="hover:cursor-pointer w-64 h-20"
                src={logo}
                alt="Logo"
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="white"
              className="w-8 h-8"
              onClick={() => setOpen(!open)}
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </div>
        </div>
      </div>
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-blue-500 text-white shadow-lg transform transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "#1a202c" }} 
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-xl font-semibold">Menu</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
            onClick={() => setOpen(false)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <ul className="p-4 space-y-6 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Schedule" className="hover:text-blue-400">
              Schedule
            </Link>
          </li>
          <li>
            <Link to="/About" className="hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-400"
              onClick={() => setdialog(!dialog)}
            >
              Book a Demo
            </a>
          </li>
        </ul>
      </aside>
      <DialogBox open={dialog} setOpen={setdialog} />
    </>
  );
}

export default Header;
