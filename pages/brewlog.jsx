import Image from "next/image";
import React from "react";
import beerImg from "../public/assests/brew-log.png";

function brewlog() {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh]  bg-black/90 flex p-16 items-end">
        <div>
          <h2 className="text-white">Brew Journal App</h2>
          <p className="text-white">React.js | Node.js | MongoDB | Express</p>
        </div>
      </div>
      <div className="p-16 flex flex-col md:flex-row justify-center gap-16 ">
        <div className="shadow-xl shadow-gray-400 rounded-xl p-4 w-fit shrink">
          <Image className="max-h-[400px] w-auto" src={beerImg} alt="/" />
        </div>
        <div>
          <h3>Idea</h3>
          <p className="text-gray-600   ">
            I like to make beer - and I like to code. So I made an app to keep
            track of brewing recipies.
          </p>
          <h3>Stack</h3>
          <h3>Hurdles</h3>
          <p></p>
          <h3>Links</h3>
        </div>
      </div>
    </div>
  );
}

export default brewlog;
