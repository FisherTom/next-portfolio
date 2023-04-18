import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi";

function Contact() {
  return (
    <div id="contact" className="w-full py-24 ">
      <div className="max-w-[1240px] mx-auto px-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get in touch</h2>
      </div>
      <div className="flex flex-col items-center">
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
      </div>
    </div>
  );
}

export default Contact;
