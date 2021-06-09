import React from 'react';

const Hero = () => {
  return (
    <div className="max-w-7xl mt-12 mx-auto items-center lg:flex">
      <div className=" max-w-3xl pb-20 text-center">
        <div className="px-4">
          <img src="images/hoggbanner.png" />
          <p className="mt-3 max-w-md mx-auto text-lg sm:text-xl md:mt-5 md:max-w-3xl">
            Coding, Tech and Video Production
          </p>
          <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="flex rounded-md shadow">
              <a
                href="#"
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Videos
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full lg:w-1/2">
        <img src="images/hogglogo.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
