// The Footer component for the app

function AppFooter() {
  
  const handleClickToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("Clicked to top");
  };

  return (
    <footer className="px-5 py-10 text-center font-mono">
      <div className="mb-5 flex justify-center gap-5">
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
      <p className="mb-4">
        Created October 2023. A UC Berkley Full Stack Web Development Project.
      </p>
      <button
        onClick={handleClickToTop}
        type="button"
        className="w-max rounded-xl bg-black px-4 py-2 uppercase text-white transition duration-500 ease-in-out hover:bg-orange hover:text-black"
      >
        Top
      </button>
    </footer>
  );
}

export default AppFooter;
