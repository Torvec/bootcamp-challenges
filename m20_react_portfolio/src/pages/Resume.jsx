// The my resume page component

import PortfolioProjects from "../components/PortfolioProjects";
import resumeData from "../data/resumeData";
import { Link as RouterLink } from "react-router-dom";

function Resume() {
  return (
    <>
      <section className="pb-20 pt-32 text-center">
        <h1 className="text-6xl font-semibold uppercase md:text-8xl md:font-normal">
          My Resume
        </h1>
      </section>

      <section className="container m-auto flex flex-col bg-lightbluegray md:flex-row md:gap-2">
        {/* Professional Experience Section */}
        <div className="flex w-full flex-col bg-white pl-10 pr-10 md:w-1/2 md:pl-0">
          {resumeData.experience.map((experience, index) => (
            <div key={index}>
              <h3 className="text-3xl">{experience.company}</h3>
              <p>{experience.dates}</p>
              <h4 className="text-2xl font-semibold">{experience.title}</h4>
              <p className="mb-4">{experience.location}</p>
              <ul className="mb-4 ml-10 font-mono">
                {experience.accomplishments.map((description, index) => (
                  <li className="mb-2 list-disc" key={index}>
                    {description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Education and Training Section */}
        <div className="flex w-full flex-col bg-white px-5 md:w-1/2 md:pl-10 md:pr-0">
          {resumeData.education.map((education, index) => (
            <div key={index}>
              <h3 className="text-3xl">{education.institution}</h3>
              <p>{education.dates}</p>
              <h4 className="mb-4 text-2xl font-semibold">
                {education.program}
              </h4>
              <ul className="mb-4 ml-10 font-mono">
                {education.details.map((details, index) => (
                  <li className="mb-2 list-disc" key={index}>
                    {details}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Skills and Software Section */}
      </section>
      <section className="bg-lightbluegray px-5 py-20 xl:px-0">
        <h2 className="mb-10 text-center text-5xl font-semibold uppercase">
          Skills &amp; Software
        </h2>
        <div className="container m-auto flex flex-col gap-6 md:flex-row">
          <div className="w-full md:w-1/4">
            <h3 className="mb-4 text-xl font-semibold">General</h3>
            {resumeData.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="mb-3 mr-3 inline-block rounded-full bg-darkgray px-2.5 py-1.5 font-mono text-sm text-white transition-all duration-500 ease-in-out hover:bg-black hover:text-lightbluegray"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="mb-4 text-xl font-semibold">Software</h3>
            {resumeData.software.map((software, softwareIndex) => (
              <span
                key={softwareIndex}
                className="mb-3 mr-3 inline-block rounded-full bg-darkgray px-2.5 py-1.5 font-mono text-sm text-white transition-all duration-500 ease-in-out hover:bg-black hover:text-lightbluegray"
              >
                {software}
              </span>
            ))}
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="mb-4 text-xl font-semibold">Programming</h3>
            {resumeData.programming.map((programming, programmingIndex) => (
              <span
                key={programmingIndex}
                className="mb-3 mr-3 inline-block rounded-full bg-darkgray px-2.5 py-1.5 font-mono text-sm text-white transition-all duration-500 ease-in-out hover:bg-black hover:text-lightbluegray"
              >
                {programming}
              </span>
            ))}
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="mb-4 text-xl font-semibold">Technician</h3>
            {resumeData.technician.map((technician, technicianIndex) => (
              <span
                key={technicianIndex}
                className="mb-3 mr-3 inline-block rounded-full bg-darkgray px-2.5 py-1.5 font-mono text-sm text-white transition-all duration-500 ease-in-out hover:bg-black hover:text-lightbluegray"
              >
                {technician}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center bg-orange py-20">
        <h2 className="mb-10 text-4xl font-semibold uppercase md:text-6xl md:font-normal">
          Featured Projects
        </h2>
        <div className="container m-auto mb-10 px-5 xl:px-0">
          <PortfolioProjects featured />
        </div>
        <button className="rounded-2xl border-2 border-black bg-black px-4 py-1.5 text-lg uppercase text-white transition-all duration-500 ease-in-out hover:border-white hover:font-semibold">
          <RouterLink to={"/portfolio"}>. . . All Projects</RouterLink>
        </button>
      </section>
    </>
  );
}

export default Resume;
