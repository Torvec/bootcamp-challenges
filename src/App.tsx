function App() {
  const challengeData = [
    {
      mod: 0,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m00_prework_study_guide",
      deployment:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m00_prework_study_guide",
      label: "Pre-Work Study Guide",
      deploymentIcon: "github",
      imgSrc: "m00_prework_study_guide.jpg",
    },
    {
      mod: 1,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m01_horiseon_refactor",
      deployment:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m01_horiseon_refactor",
      label: "Horiseon Refactor",
      deploymentIcon: "github",
      imgSrc: "m01_horiseon_refactor.jpg",
    },
    {
      mod: 2,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m02_my_portfolio",
      deployment:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m02_my_portfolio",
      label: "My Portfulio (Portfolio v1)",
      deploymentIcon: "github",
      imgSrc: "m02_my_portfolio.jpg",
    },
    {
      mod: 3,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m03_password_generator",
      deployment:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m03_password_generator",
      label: "Password Generator",
      deploymentIcon: "github",
      imgSrc: "m03_password_generator.jpg",
    },
    {
      mod: 4,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m04_coding_quiz",
      deployment:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m04_coding_quiz",
      label: "Coding Quiz",
      deploymentIcon: "github",
      imgSrc: "m04_coding_quiz.jpg",
    },
    {
      mod: 5,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m05_workday_scheduler",
      deployment:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m05_workday_scheduler",
      label: "Workday Scheduler",
      deploymentIcon: "github",
      imgSrc: "m05_workday_scheduler.jpg",
    },
    {
      mod: 6,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m06_weather_dashboard",
      deployment:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m06_weather_dashboard",
      label: "Weather Dashboard",
      deploymentIcon: "github",
      imgSrc: "m06_weather_dashboard.jpg",
    },
    {
      mod: 9,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m09_readme_generator",
      deployment: "https://youtu.be/GUlMvpk-Ono",
      label: "README Generator",
      deploymentIcon: "youtube",
      imgSrc: "m09_readme_generator.jpg",
    },
    {
      mod: 10,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m10_svg_logo_maker",
      deployment: "https://youtu.be/CGi1bugTEi8",
      label: "SVG Logo Maker",
      deploymentIcon: "youtube",
      imgSrc: "m10_svg_logo_maker.jpg",
    },
    {
      mod: 11,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m11_expressjs_note_taker",
      deployment: "https://young-wave-89443-5b166d2a064e.herokuapp.com/",
      label: "Express.js Note Taker",
      deploymentIcon: "heroku",
      imgSrc: "m11_expressjs_note_taker.jpg",
    },
    {
      mod: 12,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m12_mysql_employee_tracker",
      deployment: "https://youtu.be/dKM0UAyHzxY",
      label: "MySQL Employee Tracker",
      deploymentIcon: "youtube",
      imgSrc: "m12_mysql_employee_tracker.jpg",
    },
    {
      mod: 13,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m13_orm_ecommerce_backend",
      deployment: "https://youtu.be/t5qnrDMxy6Q",
      label: "ORM E-Commerce Back End",
      deploymentIcon: "youtube",
      imgSrc: "m13_orm_ecommerce_backend.jpg",
    },
    {
      mod: 14,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m14_mvc_tech_blog",
      deployment: "https://obscure-badlands-14784-588733df30d2.herokuapp.com/",
      label: "MVC Tech Blog",
      deploymentIcon: "heroku",
      imgSrc: "m14_mvc_tech_blog.jpg",
    },
    {
      mod: 18,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m18_nosql_social_network_api",
      deployment: "https://youtu.be/KsAnFe4RiYA",
      label: "NoSQL Social Network API",
      deploymentIcon: "youtube",
      imgSrc: "m18_nosql_social_network_api.jpg",
    },
    {
      mod: 19,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m19_pwa_text_editor",
      deployment: "https://secret-shore-93853-24e6565e7438.herokuapp.com/",
      label: "PWA Text Editor",
      deploymentIcon: "heroku",
      imgSrc: "m19_pwa_text_editor.jpg",
    },
    {
      mod: 20,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m20_react_portfolio",
      deployment:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m20_react_portfolio",
      label: "React Portfolio (Portfolio v2)",
      deploymentIcon: "cloudflare",
      imgSrc: "m20_react_portfolio.jpg",
    },
    {
      mod: 21,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m21_mern_book_search_engine",
      deployment: "https://immense-forest-49319-e45ef3352e1e.herokuapp.com/",
      label: "MERN Book Search Engine",
      deploymentIcon: "heroku",
      imgSrc: "m21_mern_book_search_engine.jpg",
    },
    {
      mod: 22,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m22_redux_store",
      deployment:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m22_redux_store",
      label: "Redux Store (Extra Credit)",
      deploymentIcon: "github",
      imgSrc: "22-state-homework-demo-01.gif",
    },
  ];

  const Header = () => {
    return (
      <header className="py-8 text-center">
        <h1 className="bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 bg-clip-text pb-4 text-6xl font-black text-transparent">
          UC Berkeley Bootcamp Challenges
        </h1>
      </header>
    );
  };

  type MainPropTypes = {
    children: React.ReactNode;
  };

  const Main = ({ children }: MainPropTypes) => {
    return <main>{children}</main>;
  };

  const Footer = () => {
    return (
      <footer className="bg-green-800 py-8 text-center">
        <p>&copy; 2023 Edward Vonschondorf</p>
        <p>
          <a
            href="https://edward-vonschondorf.dev/"
            target="_blank"
            rel="noreferrer noopener"
            className="font-bold text-teal-400 transition-all duration-300 ease-in-out hover:text-teal-200 active:scale-90"
          >
            edward-vonschondorf.dev
          </a>
        </p>
      </footer>
    );
  };

  type ChallengeItemPropTypes = {
    imgSrc: string;
    label: string;
    github: string;
    deployment: string;
    mod: number;
  };

  const ChallengeItem = ({
    imgSrc,
    label,
    github,
    deployment,
    mod,
  }: ChallengeItemPropTypes) => {
    return (
      <section className="grid min-h-[60vh] place-content-center  px-4 md:min-h-screen">
        <div className="container mx-auto space-y-8 rounded-lg bg-white/50 py-8">
          <img
            src={imgSrc}
            alt={label}
            className="w-full max-w-[1000px] border-y-2 border-black object-cover object-top"
          />
          <div className="flex flex-col justify-between gap-8 px-4 md:flex-row md:gap-0">
            <h2 className="text-2xl font-bold text-black">
              <span className="text-indigo-700">MOD {mod}:</span> {label}
            </h2>
            <div className="flex flex-col gap-4 md:flex-row md:gap-8">
              <a href={github} target="_blank" rel="noreferrer noopener">
                <button className="w-full rounded-lg border-2 border-black/50 px-4 py-1 font-bold hover:border-blue-700 hover:text-blue-700">
                  Repository
                </button>
              </a>
              <a href={deployment} target="_blank" rel="noreferrer noopener">
                <button className="w-full rounded-lg border-2 border-black/50 px-4 py-1 font-bold hover:border-blue-700 hover:text-blue-700">
                  Deployment
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const ChallengeList = () => {
    return (
      <>
        {challengeData.map((challenge, index) => (
          <ChallengeItem key={index} {...challenge} />
        ))}
      </>
    );
  };

  return (
    <div className="bg-gradient-to-b from-blue-950 via-sky-700 to-cyan-500">
      <Header />
      <Main>
        <ChallengeList />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
