import React, { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { RxDoubleArrowDown } from "react-icons/rx";
import { HiDocumentText } from "react-icons/hi";
function Hero() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className=" max-w-[1240px] w-full h-full mx-auto p-2 flex items-center justify-center">
        <div className="flex flex-col gap-4 w-full p-4 text-gray-800">
          <h1>Tom Fisher</h1>
          <h2>Full-stack web Developer</h2>
          <p>Creative developer currently seeking job opportunities.</p>
          <div className="flex flex-col items-center justify-center">
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
            <a href="https://fishertom.github.io/cv/" target="_blank">
              <div className="flex items-center justify-center gap-2 rounded-2xl border-4 border-gray-800  w-fit p-2">
                <HiDocumentText size={30} />
                <p className="font-bold">Link to CV</p>
              </div>
            </a>
            <div
              id="scroll"
              className={
                isAtTop
                  ? "text-gray-600 absolute bottom-20 flex flex-col items-center transition-scale ease-in duration-300"
                  : "text-gray-600 absolute  bottom-20 flex flex-col items-center scale-0 transition-scale ease-in duration-300"
              }
            >
              <RxDoubleArrowDown size={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
