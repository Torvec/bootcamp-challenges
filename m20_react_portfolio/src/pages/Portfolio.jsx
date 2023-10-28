// The Portfolio page component

import PortfolioProjects from "../components/PortfolioProjects";

function Portfolio() {
  return (
    <section className="container m-auto px-5 pb-20 pt-32 text-black xl:px-0">
      <h1 className="mb-10 text-center text-5xl font-semibold uppercase md:text-8xl md:font-normal">
        My Portfolio
      </h1>
      <PortfolioProjects />
    </section>
  );
}

export default Portfolio;
