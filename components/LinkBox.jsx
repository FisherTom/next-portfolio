import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi";

function LinkBox() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex p-8 gap-8 items-center justify-center">
        <a
          className="hover:scale-110 ease-in duration-300"
          href="https://www.linkedin.com/in/thomas-fisher-098ab496/"
          target="_blank"
          aria-label="Link to LinkedIn profile"
        >
          <SiLinkedin size={30} />
        </a>
        <a
          className="hover:scale-110 ease-in duration-300"
          href="https://github.com/FisherTom"
          target="_blank"
          aria-label="Link github profile"
        >
          <SiGithub size={30} />
        </a>
        <a
          className="hover:scale-110 ease-in duration-300"
          href="https://www.instagram.com/end.shape/"
          target="_blank"
          aria-label="Link to instagram profile"
        >
          <SiInstagram size={30} />
        </a>
        <a
          className="hover:scale-110 ease-in duration-300"
          href="mailto:tfisher92@gmail.com"
          target="_blank"
          aria-label="Link to email"
        >
          <AiOutlineMail size={30} />
        </a>
      </div>
      <a
        href="https://fishertom.github.io/cv/"
        target="_blank"
        aria-label="link to CV"
      >
        <div className="hover:scale-110 ease-in duration-300 flex items-center justify-center gap-2 rounded-2xl  w-fit p-2">
          <HiDocumentText size={30} />
          <p className="font-bold">Link to CV</p>
        </div>
      </a>
    </div>
  );
}

export default LinkBox;
