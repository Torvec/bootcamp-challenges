// The home page with and about me section and a list of my latest projects

import { Link as RouterLink } from "react-router-dom";
import PortfolioProjects from "../components/PortfolioProjects";

function Home() {
  return (
    <>
      <section className="flex flex-col items-center bg-lightbluegray pt-32 pb-20">
        <h1 className="transform-all mb-10 text-6xl font-black uppercase text-black duration-500 ease-in-out hover:tracking-widest md:text-7xl lg:text-9xl">
          Edward
          <br />
          <span className="ml-20 md:ml-40">Von</span>
          <br />
          Schondorf
        </h1>
        <h2 className="transform-all bg-orange px-4 py-2 font-mono text-2xl font-bold uppercase text-white duration-500 ease-in-out hover:bg-white hover:tracking-widest hover:text-orange md:text-4xl lg:text-6xl">
          Full Stack Developer
        </h2>
      </section>

      <section className="m-auto py-20 sm:container md:w-3/4">
        <div className="flex flex-col gap-10  lg:flex-row">
          <img
            src="./assets/img/me.png"
            alt="Edward Von Schondorf"
            className="m-auto mb-10 h-96 w-96 rounded-2xl shadow-2xl"
          />
          <div>
            <h2 className="mb-5 text-center text-6xl uppercase md:text-left">
              About Me
            </h2>
            <p className="mb-5 px-5 font-mono text-lg md:text-2xl md:px-0">
              I am currently working in the field of automation controls
              engineering and have accumulated 12 years of experience as a
              technician from my time at Tesla and the United states Navy. Prior
              to that, I spent around 4 years specializing in front-end website
              design and development. Now, I am eager to re-enter the world of
              web development and surpass my previous accomplishments.
            </p>
            <div className="mb-5 flex items-center gap-5 px-5">
              <p className="text-xl font-semibold">Socials:</p>
              <a
                href="https://www.linkedin.com/in/edward-von/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./assets/img/linkedin_rect_logo.svg"
                  className="h-10 w-full transition-all duration-500 ease-in-out hover:scale-125 hover:shadow-lg"
                  alt="LinkedIn Logo"
                />
              </a>
              <a
                href="https://github.com/Torvec"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./assets/img/github_square_logo.svg"
                  className="h-10 w-full transition-all duration-500 ease-in-out hover:scale-125 hover:shadow-lg"
                  alt="GitHub Logo"
                />
              </a>
              <a
                href="https://dev.to/torvec"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./assets/img/devto_logo.svg"
                  className="h-10 w-full transition-all duration-500 ease-in-out hover:scale-125 hover:shadow-lg"
                  alt="Dev.to Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center bg-orange py-20">
        <h2 className="mb-10 text-4xl font-semibold uppercase md:text-6xl md:font-normal">
          Latest Projects
        </h2>
        <div className="container m-auto mb-10 px-5 xl:px-0">
          <PortfolioProjects limit={3} />
        </div>
        <button className="rounded-2xl border-2 border-black bg-black px-4 py-1.5 text-lg uppercase text-white transition-all duration-500 ease-in-out hover:border-white hover:font-semibold">
          <RouterLink to={"/portfolio"}>. . . All Projects</RouterLink>
        </button>
      </section>
    </>
  );
}

export default Home;
