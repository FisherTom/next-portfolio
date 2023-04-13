import Image from "next/image";
import React from "react";
import headshot from "../public/assests/headshot.png";

function About() {
  return (
    <div id="about" className="w-full flex flex-col items-center py-8">
      <div className="max-w-[1240px] mx-auto px-16 md:grid grid-cols-3 gap-8">
        <div className="col-span-2 ">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>

          <p className="py-2 text-gray-600">
            I am a junior developer currently seeking front-end and full-stack
            job opportunities. I have recently completed an intensive full-stack
            software development boot camp with Northcoders and have been
            self-teaching web technologies for roughly a year.
          </p>
          <p className="py-2 text-gray-600">
            My time at Northcoders has given me a strong foundation in
            JavaScript (ES6), HTML, and CSS as well as experience in writing
            end-to-end web and mobile applications using technologies including
            Node.js, React / React Native, PSQL, MongoDB, and more.
          </p>
          <p className="py-2 text-gray-600">
            The course put a strong emphasis on best practices including
            Test-Driven Development, agile methodology, and Git Flow. I have
            loved the experience of learning to code so far and I'm now excited
            to find opportunities that will allow me to continue to grow my
            skill set.
          </p>
          <p className="py-2 text-gray-600">
            I come from a design / engineering background and have strong
            communication and creative problem-solving skills. I am committed to
            making a career change into tech and welcome approaches from
            recruiters and hiring partners.
          </p>
        </div>
        <div className="w-full max-w-[400px] h-auto m-auto shadow-xl rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-full" src={headshot} />
        </div>
      </div>
    </div>
  );
}

export default About;
