import React from "react";
import MarqueeLib from "react-fast-marquee";
import playerone from "../assets/player/playerone.webp";
import playertwo from "../assets/player/playertwo.webp";
import playerthree from "../assets/player/playerthree.webp";
import playerfour from "../assets/player/playerfour.webp";
import playerfive from "../assets/player/playerfive.webp";
import playersix from "../assets/player/playersix.webp";
import playerseven from "../assets/player/playerseven.webp";
import playereight from "../assets/player/playereight.webp";
import playernine from "../assets/player/playernine.webp";

const data = [
  {
    id: 1,
    image: playerone,
  },
  {
    id: 2,
    image: playertwo,
  },
  {
    id: 3,
    image: playerthree,
  },
  {
    id: 4,
    image: playerfour,
  },
  {
    id: 5,
    image: playerfive,
  },
  {
    id: 6,
    image: playersix,
  },
  {
    id: 7,
    image: playerseven,
  },
  {
    id: 8,
    image: playereight,
  },
  {
    id: 9,
    image: playernine,
  },
];
const Imgmar = () => {
  const Marquee = MarqueeLib.default;
  return (
    <div>
      <div className="pb-20">
<div className="flex flex-col justify-center items-center p-3">
<p className="text-base font-semibold">Playing for the Nation</p>
<p className="text-2xl font-bold">Every jersey carries a story. Every player carries Nepal.
</p>
</div>
        <div className="border bg-[#bbbb] flex items-center h-162 border-green-800">
          <Marquee className="h-full overflow-hidden" speed={80} pauseOnHover>
            <span className="h-full flex">
              {data.map((value) => {
                return (
                  <div className="h-full w-84 ml-6" key={value.id}>
                    <img className="h-full w-full" src={value.image} alt="" />
                  </div>
                );
              })}
            </span>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Imgmar;
