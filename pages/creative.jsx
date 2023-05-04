import React from "react";

function brewlog() {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh]  bg-black/90 flex p-16 items-end">
        <div>
          <h2 className="text-white">Creative Coding</h2>
          <p className="text-white">JavaScript | P5.js</p>
        </div>
      </div>
      <div className="p-16 max-w-[1240px] m-auto flex flex-col  justify-center gap-16 ">
        <div className="flex justify-center items-center">
          {/* <Blocks /> */}
          <iframe
            src="https://bloooob.netlify.app/"
            className="w-[450px] h-[450px] rounded-full"
            scrolling="no"
          ></iframe>
        </div>
        <div className=" flex flex-col gap-4">
          <p className="text-gray-600   ">
            I first became interested in coding learning about P5.js, a
            Javascript library for drawing graphics using the HTML canvas API.
            It proved a useful tool in learning fundamental principles such as
            object oriented programing and recursion. I used a pen plotter to
            turn some of these &apos;code sketches&apos; into physical prints
            which can be found on my{" "}
            <a
              href="https://www.instagram.com/end.shape/"
              className="text-blue-600"
            >
              Instagram
            </a>
            . Live versions of some of these sketches can be viewed by following
            the link below.
          </p>

          <h3>Links</h3>
          <p>
            Live Demo -
            <a
              className="text-blue-600"
              href="https://fishertom.github.io/P5_sketches/"
            >
              {" "}
              fishertom.github.io/P5_sketches/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default brewlog;
