import React, { useState } from "react";

const BookingPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleOpenForm = () => {
    window.open("https://forms.gle/FADBVhwTRAkBHMGNA", "_blank"); // Paste your Form Link
    setSubmitted(true); 
  };

  const handleOpenGmail = () => {
    window.open("https://ruzopay.com", "_blank"); // Paste your Ruzopay link
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {!submitted ? (
        <div className="text-center">
          <p className="text-lg font-semibold mb-4">
            Please fill out the demo booking form by clicking the below button.
          </p>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleOpenForm}
          >
            Open Form
          </button>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-xl font-bold text-blue-500 mb-4">
            Thank you for submitting the form!
          </p>
          <p>Click the button below to proceed with the payment.</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleOpenGmail}
          >
            Open Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
