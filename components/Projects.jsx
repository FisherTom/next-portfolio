import React from "react";
import beerImg from "../public/assests/brew-log.png";
import mushImg from "../public/assests/mush6.jpg";
import boardImg from "../public/assests/bgb2.png";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div id="projects" className="w-full py-8">
      <div className="max-w-[1240px] mx-auto px-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Brew Log App"
            backgroundImg={beerImg}
            projectUrl="/brewlog"
          />
          <ProjectItem
            title="Brew Log App"
            backgroundImg={mushImg}
            projectUrl="/brewlog"
          />
          <ProjectItem
            title="Brew Log App"
            backgroundImg={boardImg}
            projectUrl="/brewlog"
          />
          <ProjectItem
            title="Brew Log App"
            backgroundImg={beerImg}
            projectUrl="/brewlog"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
