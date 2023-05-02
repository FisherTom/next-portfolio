import Image from "next/image";
import React from "react";
import portfolioImg from "../public/assests/portfolio.png";

function brewlog() {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh]  bg-black/90 flex p-16 items-end">
        <div>
          <h2 className="text-white">Portfolio site</h2>
          <p className="text-white">Next.js | Tailwind</p>
        </div>
      </div>
      <div className="p-16 max-w-[1240px] m-auto flex flex-col md:flex-row justify-center gap-16 ">
        <div className="shadow-xl shadow-gray-400 rounded-xl p-4 w-fit h-fit shrink order-2 md:order-1">
          <Image className="min-w-[300px] w-auto" src={portfolioImg} alt="/" />
        </div>
        <div className="order-1 md:order-2 flex flex-col gap-4">
          <h3>Idea</h3>
          <p className="text-gray-600   ">
            A place to show off my work and (hopefully) get hired!
          </p>
          <h3>Stack</h3>
          <p>
            I wanted to learn a meta-framework so I chose Next.js to build my
            portfolio. This site takes advantage of Next.js’ lazy image loading
            to improve response time and boost SEO. Next.js has other features
            including server side rendering which I hope to make use of in my
            next project. I also took this as an opportunity to improve my
            Tailwind skills to make a site that is visually appealing and fully
            responsive.
          </p>

          <h3>Links</h3>
          <p>You are already here!</p>
        </div>
      </div>
    </div>
  );
}

export default brewlog;
