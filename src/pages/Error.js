import React from "react";

const Error = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-richblack-900 px-4 py-8">
      <div className="bg-richblack-800 hover:shadow-none hover:scale-95 transition-all duration-200 border-2 border-richblack-600 max-w-lg w-full px-6 py-8 rounded-lg shadow-lg text-center sm:max-w-md lg:max-w-lg xl:max-w-xl mx-4 sm:mx-8 md:mx-12 -mt-16">
        <h1 className="text-9xl font-bold text-richblack-25">404</h1>
        <p className="text-richblack-50 mt-4 text-lg sm:text-xl md:text-2xl">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-200 text-richblack-900 text-sm sm:text-base font-medium rounded-lg hover:bg-caribbeangreen-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:shadow-none hover:scale-95 transition-all duration-200"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default Error;
