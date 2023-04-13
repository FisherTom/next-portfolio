import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

function Hero() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className=" max-w-[1240px] w-full h-full mx-auto p-2 flex items-center justify-center">
        <div className="flex flex-col gap-4 text-gray-800">
          <h1>Tom Fisher</h1>
          <h2>Full-stack web Developer</h2>
          <p>
            Jounior Web developer currently seeking front-end and full stack job
            opportunities.
          </p>
          <div className="flex p-16 gap-16 items-center justify-center">
            <SiLinkedin size={40} />
            <SiGithub size={40} />
            <SiInstagram size={40} />
            <AiOutlineMail size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
