/* eslint-disable react/prop-types */
// The Projects component that can be used to display a list of projects in ascending or descending order and limit the number of projects displayed

import projectsData from "../data/projectsData";

function Projects({ order = "reverse", limit = null, featured = false }) {

  let projectsToDisplay =
    order === "reverse" ? [...projectsData].reverse() : [...projectsData];

  if (limit !== null) {
    projectsToDisplay = projectsToDisplay.slice(0, limit);
  }

  if (featured) {
    projectsToDisplay = projectsToDisplay.filter(
      (project) => project.featured === true
    );
  }

  return (
    <section className="grid grid-cols-1 gap-6 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
      {projectsToDisplay.map((project, index) => (
        <div
          className="flex max-w-full flex-col rounded-lg border bg-lightbluegray shadow-lg transition-all duration-500 ease-in-out hover:bg-white hover:shadow-2xl"
          key={index}
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-96 w-full object-cover transition-all duration-500 ease-in-out hover:opacity-90"
          />
          {/* Project Title, Description, and Tech Stack section */}
          <div className="flex-grow p-4">
            <h4 className="text-xl font-semibold">{project.title}</h4>
            <h5 className="mb-4 text-sm text-darkgray">
              Completed: {project.dateCompleted}
            </h5>
            <p className="mb-4 font-mono">{project.description}</p>
            {project.techStack.map((tech, techIndex) => (
              <span
                className="mb-2 mr-2 inline-block rounded-full bg-orange px-3 py-1.5 font-mono text-sm text-white transition-all duration-500 ease-in-out hover:bg-lightbluegray hover:text-orange"
                key={techIndex}
              >
                {tech}
              </span>
            ))}
          </div>
          {/* Project Button Links */}
          <div className="mt-auto flex justify-around py-4">
            <button className="text-md rounded-2xl border-2 border-darkgray px-2 text-black transition-all duration-500 ease-in-out hover:border-orange hover:font-semibold hover:text-orange">
              <a href={project.repository}>GitHub Repo</a>
            </button>
            <button className="text-md rounded-2xl border-2 border-darkgray px-2 text-black transition-all duration-500 ease-in-out hover:border-orange hover:font-semibold hover:text-orange">
              <a href={project.deployment}>Deployment</a>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
