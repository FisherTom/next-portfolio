import Image from "next/image";
import React, { useState, useRef } from "react";
import point from "../public/assests/tap.png";

function countdown() {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh]  bg-black/90 flex p-16 items-end">
        <div>
          <h2 className="text-white">Countdown React Game</h2>
          <p className="text-white">React.js | Tailwind</p>
        </div>
      </div>
      <div className="p-16 max-w-[1240px] m-auto flex flex-col md:flex-row justify-center items-center gap-16 ">
        <div className="relative transform scale-75 shadow-xl shadow-gray-400 rounded-xl p-4 w-fit h-fit shrink order-2 md:order-1">
          <div className="p-2 absolute right-4 top-5 animate-pulse">
            <Image className="w-16 h-16" src={point} alt="/" />
          </div>

          <iframe
            src="https://count-down-game.netlify.app/"
            className="w-[420px] h-[900px] "
          ></iframe>
        </div>
        <div className="order-1 md:order-2 flex flex-col gap-4">
          <h3>Idea</h3>
          <p className="text-gray-600   ">
            A browser version of the game Countdown made using React.js. <br />
            <br /> I completed this project to deepen my understanding of React
            functional components, complex state management, conditional
            rendering, and animation. I used Tailwind to create a fully
            responsive interface. All UI components are made with CSS and
            Tailwind classes.
            <br />
            <br />I tried to replicate a game of Countdown as accurately as
            possible. The interface adapts during different phases of the game,
            and players&apos; words are checked by querying a free dictionary
            API.
          </p>
          <h3>Hurdles</h3>
          <p>
            Managing the different game phases, pieces in play, and the timer
            using state was challenging. I used various methods to modify the
            DOM, including CSS and Tailwind class injection, as well as
            conditional rendering of components with React.
          </p>
          <h3>Links</h3>
          <p>
            Front-end repo -
            <a
              className="text-blue-600"
              href="https://github.com/FisherTom/countdown"
            >
              {" "}
              github.com/FisherTom/countdown
            </a>
          </p>
          <p>
            Live Demo -
            <a
              className="text-blue-600"
              href="https://count-down-game.netlify.app/"
            >
              {" "}
              count-down-game.netlify.app/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default countdown;
