import Image from "next/image";
import React from "react";
import mushImg from "../public/assests/mush1.jpg";
import mushImg2 from "../public/assests/mush2.jpg";
import mushImg3 from "../public/assests/mush3.jpg";
import mushImg4 from "../public/assests/mush6.jpg";

function brewlog() {
  return (
    <div className="w-full ">
      <div className="w-full h-[30vh]  bg-black/90 flex p-16 items-end">
        <div>
          <h2 className="text-white">
            Mushroom Forraging
            <br /> Mobile App
          </h2>
          <p className="text-white">
            React Native | Expo | Node.js | MongoDB | Express
          </p>
        </div>
      </div>
      <div className="p-16 max-w-[1240px] m-auto flex flex-col md:flex-row items-center justify-center gap-16 ">
        <div className="min-w-[350px] grid grid-cols-2 gap-4 order-2 md:order-1">
          <div className="shadow-xl shadow-gray-400 rounded-xl p-4 w-fit h-fit shrink">
            <Image className="max-h-[400px] w-auto" src={mushImg3} alt="/" />
          </div>
          <div className="shadow-xl shadow-gray-400 rounded-xl p-4 w-fit h-fit shrink">
            <Image className="max-h-[400px] w-auto" src={mushImg2} alt="/" />
          </div>
          <div className="shadow-xl shadow-gray-400 rounded-xl p-4 w-fit h-fit shrink">
            <Image className="max-h-[400px] w-auto" src={mushImg} alt="/" />
          </div>
          <div className="shadow-xl shadow-gray-400 rounded-xl p-4 w-fit h-fit shrink">
            <Image className="max-h-[400px] w-auto" src={mushImg4} alt="/" />
          </div>
        </div>
        <div className="order-1 md:order-2 flex flex-col gap-4">
          <h3>Idea</h3>
          <p className="text-gray-600   ">
            An App to help users find and identify wild mushrooms based on
            community generated data.
          </p>
          <h3>Stack</h3>
          <p>
            The front end was built using React Native and Expo. It uses built
            in functionality of React Native for user location, maps, taking /
            selecting images. Firebase is used for secure user authentication
            and cloud storage of user generated content.
            <br />
            <br />
            The database was made using MongoDB to store data about sightings
            and mushroom species info. HTTP requests are handled by Express,
            integration tests were written for all endpoints using Jest.
          </p>
          <h3>Hurdles</h3>
          <p></p>
          <h3>Links</h3>
          <p>
            Front-end repo -
            <a
              className="text-blue-600"
              href="https://github.com/FisherTom/portfolio-mushi-front-end"
            >
              {" "}
              github.com/FisherTom/portfolio-mushi-front-end
            </a>
          </p>
          <p>
            Back-end repo -
            <a
              className="text-blue-600"
              href="https://github.com/FisherTom/portfolio-mushi-api"
            >
              {" "}
              github.com/FisherTom/portfolio-mushi-api
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default brewlog;
