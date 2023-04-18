import Image from "next/image";
import React from "react";
import gameImg from "../public/assests/bgb1.png";
import gameImg2 from "../public/assests/bgb2.png";
import gameImg3 from "../public/assests/bgb3.png";

function brewlog() {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh]  bg-black/90 flex p-16 items-end">
        <div>
          <h2 className="text-white">Game Review Site</h2>
          <p className="text-white">
            React.js | Node.js | PSQL | Express | Jest
          </p>
        </div>
      </div>
      <div className="p-16 max-w-[1240px] m-auto flex flex-col md:flex-row justify-center gap-16 ">
        <div className="flex min-w-[300px] flex-col order-2 md:order-1">
          <div className="shadow-xl shadow-gray-400 rounded-xl p-4 w-fit shrink">
            <Image className="max-h-[400px] w-auto" src={gameImg} alt="/" />
          </div>
          <div className="shadow-xl shadow-gray-400 rounded-xl p-4 w-fit shrink">
            <Image className="max-h-[400px] w-auto" src={gameImg2} alt="/" />
          </div>
          <div className="shadow-xl shadow-gray-400 rounded-xl p-4 w-fit shrink">
            <Image className="max-h-[400px] w-auto" src={gameImg3} alt="/" />
          </div>
        </div>
        <div className="order-1 md:order-2 flex flex-col gap-4">
          <h3>Idea</h3>
          <p className="text-gray-600   ">
            A review site where users can signin, search reviews, vote / comment
            on reviews.
          </p>
          <h3>Stack</h3>
          <p>
            The front end is a single page react app that allows users to browse
            game reviews, sorting by category, votes and date. users can then
            navigate to a review page where they can leave comments and up/down
            vote the review. The App makes use of client side routing and
            optimistic rendering to improve the user experience, and responsive
            custom styling. The back end was created using Node, PostgreSQL and
            Express using RESTful principles and adopting the MVC pattern. The
            app makes use of custom error handling middleware and integration
            testing was done using Jest.
          </p>
          <h3>Hurdles</h3>
          <p>
            Using a relational database such as PSQL was a steep learning curve,
            using TDD and extensive integration testing I ensured my API routes
            all worked as expected and errors were handled correctly.{" "}
          </p>
          <h3>Links</h3>
          <p>
            Front-end repo -
            <a
              className="text-blue-600"
              href="https://github.com/FisherTom/Game-Reviews-Frontend"
            >
              {" "}
              github.com/FisherTom/Game-Reviews-Frontend
            </a>
          </p>
          <p>
            Back-end repo -
            <a
              className="text-blue-600"
              href="https://github.com/FisherTom/Game-Reviews-API"
            >
              {" "}
              github.com/FisherTom/Game-Reviews-API
            </a>
          </p>
          <p>
            Live Demo -
            <a
              className="text-blue-600"
              href="https://board-game-buzz.netlify.app/"
            >
              {" "}
              board-game-buzz.netlify.app/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default brewlog;
