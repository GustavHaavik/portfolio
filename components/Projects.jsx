import React from "react";
import Image from "next/image";
import Project from "./Project";
import projects from "../public/data.json"

function Projects() {
  return (
    <div id="projects" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-lx tracking-widest uppercase text-orange-300">
          Projects and Technologies
        </p>
        <h2 className="py-4 text-white">Few examples of what I've made</h2>
        <div className="flex lg:flex-row md:flex-wrap flex-col gap-8">
          {projects.map((project) => (
            <Project key="project" {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
