import React from "react";
import Project from "../Project";

function Portfolio() {
  const [projects] = userState([
    {
      name: "budget-tracker",
      description: "Express/service worker",
      link: "https://github.com/Cassiecatt/budget-tracker",
      repo: "https://github.com/Cassiecatt/",
    },
    {
      name: "job-listing",
      description: "MySQL/Express/Handlebars",
      link: "https://github.com/Cassiecatt/project-2",
      repo: "https://github.com/Cassiecatt/",
    },
    {
      name: "run-buddy",
      description: "HTML/CSS",
      link: "https://github.com/Cassiecatt/run-buddy",
      repo: "https://github.com/Cassiecatt/",
    },
    {
      name: "password-generator",
      description: "Javscript",
      link: "https://github.com/Cassiecatt/password-generator",
      repo: "https://github.com/Cassiecatt/",
    },
    {
      name: "social-network",
      description: "NoSQL/Express/MongoDB",
      link: "https://github.com/Cassiecatt/social-network",
      repo: "https://github.com/Cassiecatt/",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, i) => {
          <Project project={project} key={"project" + i} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
