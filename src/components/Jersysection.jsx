import React from "react";

const Jersysection = () => {
  return (
    <div>
      <div className="bg-[#FFF4E6] w-full h-fill">
        <div className="flex-col md:flex md:flex-row gap-10 justify-center items-center min-h-screen mx-auto max-w-7xl ">
          <div className="w-full px-4 py-15 md:w-1/2 flex flex-col gap-3 ">
            <span className="border w-30 flex justify-center py-2 px-5 text-center text-[#ffff] bg-[#FD7E14] rounded-3xl font-bold text-sm tracking-wider">
              OFFICIAL
            </span>
            <div className="headings">
              <p className="text-5xl m-0 sm:text-7xl font-bold text-black leading-tight">
                Authentic Nepal Cricket Jersey
              </p>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed ">
              The Nepal National Team jersey tells a story of pride, passion,
              and relentless grit. Inspired by Nepal’s journey from humble
              beginnings to the world stage, the red, blue, and white , marked
              with "Chandra" and "Surya" on the shoulders symbolizes the weight
              of a nation carried by its players. Nepal at the center reflects
              the heartbeat of fans who cheer from the heart. Powered by T-10’s
              cutting-edge "Actiwick technology", this jersey isn’t just worn.
              It’s lived.
            </p>
            <p className="text-gray-600 text-sm tracking-wider">
              STARTING AT{" "}
              <span className="text-5xl font-bold text-[#fd7e14]">
                Rs.1,199
              </span>
            </p>
            <button className="w-full sm:w-full md:w-33 rounded-1 py-2.5 px-6 border bg-[#fd7e14] flex justify-center items-center text-white font-bold">
              Shop Now
            </button>
          </div>
          <div className="w-full h-110 px-4 flex items-center justify-center  md:w-1/2 relative">
            <div className="absolute top-2 flex items-center justify-center right-15 w-69 h-50 sm:absolute bg-[#FFF4E650] md:right-0  shadow-[0_0_20px_rgba(0.1,0.1,0.1,0.1)] sm:right-30 lg:right-15">
              <img className="h-full" src="jersy1.webp" alt="" />
            </div>
            <div className="absolute bottom-20 w-59 left-15 md:left-0 lg:left-15 z-1 sm:absolute bg-[#FFF4E610]  shadow-[0_0_20px_rgba(0.1,0.1,0.1,0.1)] sm:left-30">
              <img src="jersy2.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jersysection;
