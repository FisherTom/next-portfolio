import React from "react";
import LinkBox from "./LinkBox";

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
        <LinkBox />
      </div>
    </div>
  );
}

export default Contact;
