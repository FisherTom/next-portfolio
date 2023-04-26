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
      <div className="p-16 max-w-[1240px] m-auto flex flex-col md:flex-row justify-center items-center gap-16 ">
        <div className="shadow-xl shadow-gray-400 rounded-xl p-4 w-fit h-fit shrink order-2 md:order-1">
          <Image className="min-w-[300px] w-auto" src={beerImg} alt="/" />
        </div>
        <div className="order-1 md:order-2 flex flex-col gap-4">
          <h3>Idea</h3>
          <p className="text-gray-600   ">
            I like to make beer - and I like to code. So I made an app to keep
            track of brewing recipes. - (WORK IN PROGRESS!)
          </p>
          <h3>Stack</h3>
          <p>
            The front-end is a single page react app created using functional
            components and made using Tailwind to create a comprehensible and
            responsive UI. Chart.js was used for data visualization - currently
            only for the ingredient lists but the plan is to extend this to
            other elements of the brew sheet. The Back-end uses MongoDB with
            Express and Mongoose handling HTTP requests and interacting with the
            DB. The back-end stores information on user recipes as well as
            ingredient lists that are used to create new recipes.
          </p>
          <h3>Hurdles</h3>
          <p>
            This was my first experience using Tailwind, Brewers recipes contain
            a lot of information so creating a clean responsive layout was a
            challenge.
          </p>
          <h3>Links</h3>
          <p>
            Front-end repo -
            <a
              className="text-blue-600"
              href="https://github.com/FisherTom/brew-log"
            >
              {" "}
              github.com/FisherTom/brew-log
            </a>
          </p>
          <p>
            Back-end repo -
            <a
              className="text-blue-600"
              href="https://github.com/FisherTom/brew-log-backend"
            >
              {" "}
              github.com/FisherTom/brew-log-backend
            </a>
          </p>
          <p>
            Live Demo -
            <a
              className="text-blue-600"
              href="https://brew-logger.netlify.app/"
            >
              {" "}
              brew-logger.netlify.app
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default brewlog;
