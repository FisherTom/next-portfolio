import React from "react";

function Hero() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className=" max-w-[1240px] w-full h-full mx-auto p-2 flex items-center justify-center">
        <div className="flex flex-col gap-4 text-gray-800">
          <h1>Tom Fisher</h1>
          <h2>Full-stack web Developer</h2>
          <p>I am a somthing, please give me a job.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
