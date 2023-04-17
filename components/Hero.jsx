import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

function Hero() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className=" max-w-[1240px] w-full h-full mx-auto p-2 flex items-center justify-center">
        <div className="flex flex-col gap-4 w-full p-4 text-gray-800">
          <h1>Tom Fisher</h1>
          <h2>Full-stack web Developer</h2>
          <p>
            Jounior Web developer currently seeking front-end and full stack job
            opportunities.
          </p>
          <div className="flex p-16 gap-10 items-center justify-center">
            <a
              href="https://www.linkedin.com/in/thomas-fisher-098ab496/"
              target="_blank"
            >
              <SiLinkedin size={40} />
            </a>
            <a href="https://github.com/FisherTom" target="_blank">
              <SiGithub size={40} />
            </a>
            <a href="https://www.instagram.com/end.shape/" target="_blank">
              <SiInstagram size={40} />
            </a>
            <a href="mailto:tfisher92@gmail.com" target="_blank">
              <AiOutlineMail size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
