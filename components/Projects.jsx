import React from "react";
import beerImg from "../public/assests/brew-log.png";
import mushImg from "../public/assests/mush6.jpg";
import boardImg from "../public/assests/bgb2.png";
import portfolioImg from "../public/assests/portfolio.png";
import sketchImg from "../public/assests/sketch2.png";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div id="projects" className="w-full py-24">
      <div className="max-w-[1240px] mx-auto px-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Brew Log App"
            backgroundImg={beerImg}
            stack={["React.js", "Tailwind", "Node.js", "MongoDB", "Express"]}
            projectUrl="/brewlog"
          />
          <ProjectItem
            title="Mushroom Forraging App"
            backgroundImg={mushImg}
            stack={["React Native", "Expo", "Node.js", "MongoDB", "Express"]}
            projectUrl="/mushi"
          />
          <ProjectItem
            title="Review Site"
            backgroundImg={boardImg}
            stack={["React.js", "PSQL", "Express", "Jest"]}
            projectUrl="/games"
          />
          <ProjectItem
            title="Portfolio Site"
            backgroundImg={portfolioImg}
            stack={["Next.js", "Tailwind"]}
            projectUrl="/portfolio"
          />
          <ProjectItem
            title="Creative Coding"
            backgroundImg={sketchImg}
            stack={["JavaScript", "P5.js", "🛠"]}
            projectUrl="/creative"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
