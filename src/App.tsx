function App() {
  const challengeData = [
    {
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m00_prework_study_guide",
      deployment:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m00_prework_study_guide",
      label: "Pre-Work Study Guide",
      deploymentIcon: "github",
      imgSrc: "m00_prework_study_guide.jpg",
    },
    {
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m01_horiseon_refactor",
      deployment:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m01_horiseon_refactor",
      label: "Horiseon Refactor",
      deploymentIcon: "github",
      imgSrc: "m01_horiseon_refactor.jpg",
    },
    {
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m02_my_portfolio",
      deployment:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m02_my_portfolio",
      label: "My Portfulio (Portfolio v1)",
      deploymentIcon: "github",
      imgSrc: "m02_my_portfolio.jpg",
    },
    {
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m03_password_generator",
      deployment:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m03_password_generator",
      label: "Password Generator",
      deploymentIcon: "github",
      imgSrc: "m03_password_generator.jpg",
    },
    {
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m04_coding_quiz",
      deployment:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m04_coding_quiz",
      label: "Coding Quiz",
      deploymentIcon: "github",
      imgSrc: "m04_coding_quiz.jpg",
    },
    {
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m05_workday_scheduler",
      deployment:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m05_workday_scheduler",
      label: "Workday Scheduler",
      deploymentIcon: "github",
      imgSrc: "m05_workday_scheduler.jpg",
    },
    {
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m06_weather_dashboard",
      deployment:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m06_weather_dashboard",
      label: "Weather Dashboard",
      deploymentIcon: "github",
      imgSrc: "m06_weather_dashboard.jpg",
    },
    {
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m09_readme_generator",
      deployment: "https://youtu.be/GUlMvpk-Ono",
      label: "README Generator",
      deploymentIcon: "youtube",
      imgSrc: "m09_readme_generator.jpg",
    },
    {
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m10_svg_logo_maker",
      deployment: "https://youtu.be/CGi1bugTEi8",
      label: "SVG Logo Maker",
      deploymentIcon: "youtube",
      imgSrc: "m10_svg_logo_maker.jpg",
    },
    {
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m11_expressjs_note_taker",
      deployment: "https://young-wave-89443-5b166d2a064e.herokuapp.com/",
      label: "Express.js Note Taker",
      deploymentIcon: "heroku",
      imgSrc: "m11_expressjs_note_taker.jpg",
    },
    {
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m12_mysql_employee_tracker",
      deployment: "https://youtu.be/dKM0UAyHzxY",
      label: "MySQL Employee Tracker",
      deploymentIcon: "youtube",
      imgSrc: "m12_mysql_employee_tracker.jpg",
    },
    {
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m13_orm_ecommerce_backend",
      deployment: "https://youtu.be/t5qnrDMxy6Q",
      label: "ORM E-Commerce Back End",
      deploymentIcon: "youtube",
      imgSrc: "m13_orm_ecommerce_backend.jpg",
    },
    {
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m14_mvc_tech_blog",
      deployment: "https://obscure-badlands-14784-588733df30d2.herokuapp.com/",
      label: "MVC Tech Blog",
      deploymentIcon: "heroku",
      imgSrc: "m14_mvc_tech_blog.jpg",
    },
    {
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m18_nosql_social_network_api",
      deployment: "https://youtu.be/KsAnFe4RiYA",
      label: "NoSQL Social Network API",
      deploymentIcon: "youtube",
      imgSrc: "m18_nosql_social_network_api.jpg",
    },
    {
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m19_pwa_text_editor",
      deployment: "https://secret-shore-93853-24e6565e7438.herokuapp.com/",
      label: "PWA Text Editor",
      deploymentIcon: "heroku",
      imgSrc: "m19_pwa_text_editor.jpg",
    },
    {
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m20_react_portfolio",
      deployment:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m20_react_portfolio",
      label: "React Portfolio (Portfolio v2)",
      deploymentIcon: "cloudflare",
      imgSrc: "m20_react_portfolio.jpg",
    },
    {
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m21_mern_book_search_engine",
      deployment: "https://immense-forest-49319-e45ef3352e1e.herokuapp.com/",
      label: "MERN Book Search Engine",
      deploymentIcon: "heroku",
      imgSrc: "m21_mern_book_search_engine.jpg",
    },
    {
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
      <header className="bg-neutral-900 py-4 text-center">
        <h1 className="text-xl font-bold">UC Berkeley Bootcamp Challenges</h1>
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
      <footer className="py-8 text-center">
        <p>&copy; Edward Vonschondorf</p>
      </footer>
    );
  };

  type ChallengeItemPropTypes = {
    imgSrc: string;
    label: string;
    deployment: string;
  };

  const ChallengeItem = ({
    imgSrc,
    label,
    deployment,
  }: ChallengeItemPropTypes) => {
    return (
      <section className="grid min-h-screen place-content-center bg-gradient-to-tl from-blue-900 via-sky-700 to-cyan-800">
        <div className="container mx-auto">
          <a href={deployment}>
            <img
              src={imgSrc}
              alt={label}
              className="mx-auto rounded-3xl transition-all duration-300 ease-in-out hover:-translate-x-4 hover:-translate-y-4 active:scale-90"
            />
          </a>
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
    <div className="bg-black text-white">
      <Header />
      <Main>
        <ChallengeList />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
