import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

function TermsAndConditions() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="flex flex-col items-center justify-center pt-32 px-4 lg:px-32 bg-gray-100 min-h-screen">
        <h1
          className="text-4xl font-extrabold mb-8 text-center text-gray-800 border-b-4 border-blue-500 pb-4"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-mirror="false"
        >
          Terms and Conditions
        </h1>
        <div
          className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mb-10 leading-relaxed"
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-mirror="false"
        >
          <ol className="list-inside space-y-4">
            <li>
              <span className="font-bold text-blue-600">1.</span> Admission to
              <span className="text-gray-800 font-semibold">
                {" "}
                WISDOM HUB Chess Academy
              </span>
              is subject to the discretion and approval of the management.
            </li>
            <li>
              <span className="font-bold text-blue-600">2.</span> The full
              course fee must be settled prior to the commencement of classes.
            </li>
            <li>
              <span className="font-bold text-blue-600">3.</span> The course fee
              is non-refundable under any circumstances.
            </li>
            <li>
              <span className="font-bold text-blue-600">4.</span> Classes will
              continue on the next working day in lieu of scheduled holidays.
            </li>
            <li>
              <span className="font-bold text-blue-600">5.</span> Students
              missing classes for any reason will not receive additional
              sessions or compensation.
            </li>
            <li>
              <span className="font-bold text-blue-600">6.</span> If a class
              begins later than scheduled, the duration will be extended to
              cover the day’s curriculum.
            </li>
            <li>
              <span className="font-bold text-blue-600">7.</span> In the event
              of unavailability of preferred classes, applicants will be placed
              on a waiting list and notified once a new batch aligning with
              their preferred timing commences.
            </li>
            <li>
              <span className="font-bold text-blue-600">8.</span> There is no
              prescribed minimum age for admission, and classes may include
              students from various grades and standards.
            </li>
            <li>
              <span className="font-bold text-blue-600">9.</span> All
              photographs and videos captured during classes and tournaments are
              the intellectual property of The Mind Chess Academy. We reserve
              the right to share any game played during classes or tournaments.
            </li>
            <li>
              <span className="font-bold text-blue-600">10.</span>
              WisdomHub Chess Academy shall not be liable for any loss or
              damage, including indirect or consequential loss or damage,
              arising from attendance at our classes, sessions, special events,
              tournaments, the use of our website, or the purchase and
              utilization of our products.
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TermsAndConditions;
