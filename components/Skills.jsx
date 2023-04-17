import React from "react";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiJest,
  SiExpo,
} from "react-icons/si";

function Skills() {
  return (
    <div id="skills" className="w-full py-24 ">
      <div className="max-w-[1240px] mx-auto px-16">
        <div>
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Skills
          </p>
          <h2 className="py-4">What I can do</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between ">
          <p className="text-gray-600">
            HTML | CSS | JavaScript | Node.js | React.js | React Native |
            Next.js | Tailwind | Bootstrap | Firebase | Express | PSQL | MongoDB
            | Jest | Git
          </p>
          <div className="  grid grid-cols-3 gap-8 min-w-[260px]">
            <SiJavascript className="text-6xl hover:scale-105 ease-in duration-300" />
            <SiReact className="text-6xl hover:scale-105 ease-in duration-300" />
            <SiNextdotjs className="text-6xl hover:scale-105 ease-in duration-300" />
            <SiTailwindcss className="text-6xl hover:scale-105 ease-in duration-300" />
            <SiNodedotjs className="text-6xl hover:scale-105 ease-in duration-300" />
            <SiPostgresql className="text-6xl hover:scale-105 ease-in duration-300" />
            <SiMongodb className="text-6xl hover:scale-105 ease-in duration-300" />
            <SiExpress className="text-6xl hover:scale-105 ease-in duration-300" />
            <SiJest className="text-6xl hover:scale-105 ease-in duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
