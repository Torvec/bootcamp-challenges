import { motion, useScroll, useTransform } from "framer-motion";
import { forwardRef, useRef, createRef } from "react";

function App() {
  const challengeData = [
    {
      mod: 0,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m00_prework_study_guide",
      deployment: null,
      label: "Pre-Work Study Guide",
      imgSrc: "/img/m00_prework_study_guide.jpg",
    },
    {
      mod: 1,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m01_horiseon_refactor",
      deployment: null,
      label: "Horiseon Refactor",
      imgSrc: "/img/m01_horiseon_refactor.jpg",
    },
    {
      mod: 2,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m02_my_portfolio",
      deployment: null,
      label: "My Portfulio (Portfolio v1)",
      imgSrc: "/img/m02_my_portfolio.jpg",
    },
    {
      mod: 3,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m03_password_generator",
      deployment: null,
      label: "Password Generator",
      imgSrc: "/img/m03_password_generator.jpg",
    },
    {
      mod: 4,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m04_coding_quiz",
      deployment: null,
      label: "Coding Quiz",
      imgSrc: "/img/m04_coding_quiz.jpg",
    },
    {
      mod: 5,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m05_workday_scheduler",
      deployment: null,
      label: "Workday Scheduler",
      imgSrc: "/img/m05_workday_scheduler.jpg",
    },
    {
      mod: 6,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m06_weather_dashboard",
      deployment: null,
      label: "Weather Dashboard",
      imgSrc: "/img/m06_weather_dashboard.jpg",
    },
    {
      mod: 9,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m09_readme_generator",
      deployment: "https://youtu.be/GUlMvpk-Ono",
      label: "README Generator",
      imgSrc: "/img/m09_readme_generator.jpg",
    },
    {
      mod: 10,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m10_svg_logo_maker",
      deployment: "https://youtu.be/CGi1bugTEi8",
      label: "SVG Logo Maker",
      imgSrc: "/img/m10_svg_logo_maker.jpg",
    },
    {
      mod: 11,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m11_expressjs_note_taker",
      deployment: "https://young-wave-89443-5b166d2a064e.herokuapp.com/",
      label: "Express.js Note Taker",
      imgSrc: "/img/m11_expressjs_note_taker.jpg",
    },
    {
      mod: 12,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m12_mysql_employee_tracker",
      deployment: "https://youtu.be/dKM0UAyHzxY",
      label: "MySQL Employee Tracker",
      imgSrc: "/img/m12_mysql_employee_tracker.jpg",
    },
    {
      mod: 13,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m13_orm_ecommerce_backend",
      deployment: "https://youtu.be/t5qnrDMxy6Q",
      label: "ORM E-Commerce Back End",
      imgSrc: "/img/m13_orm_ecommerce_backend.jpg",
    },
    {
      mod: 14,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m14_mvc_tech_blog",
      deployment: "https://obscure-badlands-14784-588733df30d2.herokuapp.com/",
      label: "MVC Tech Blog",
      imgSrc: "/img/m14_mvc_tech_blog.jpg",
    },
    {
      mod: 18,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m18_nosql_social_network_api",
      deployment: "https://youtu.be/KsAnFe4RiYA",
      label: "NoSQL Social Network API",
      imgSrc: "/img/m18_nosql_social_network_api.jpg",
    },
    {
      mod: 19,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m19_pwa_text_editor",
      deployment: "https://secret-shore-93853-24e6565e7438.herokuapp.com/",
      label: "PWA Text Editor",
      imgSrc: "/img/m19_pwa_text_editor.jpg",
    },
    {
      mod: 20,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m20_react_portfolio",
      deployment: null,
      label: "React Portfolio (Portfolio v2)",
      imgSrc: "/img/m20_react_portfolio.jpg",
    },
    {
      mod: 21,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m21_mern_book_search_engine",
      deployment: "https://immense-forest-49319-e45ef3352e1e.herokuapp.com/",
      label: "MERN Book Search Engine",
      imgSrc: "/img/m21_mern_book_search_engine.jpg",
    },
    {
      mod: 22,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m22_redux_store",
      deployment: null,
      label: "Redux Store (Extra Credit)",
      imgSrc: "/img/22-state-homework-demo-01.gif",
    },
  ];

  const Header = () => {
    return (
      <header className="relative grid min-h-screen place-content-center overflow-hidden py-8 text-center">
        <div className="absolute left-1/2 top-0 z-0 size-full -translate-x-1/2 bg-[radial-gradient(circle_at_top_center,_var(--tw-gradient-stops))] from-purple-950/75 to-50%" />
        <div className="absolute left-1/2 top-0 z-0 size-full -translate-x-1/2 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/25 to-50%" />
        <div className="absolute left-1/2 top-0 z-0 size-full -translate-x-1/2 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-500/25 to-50%" />
        <h1 className="relative z-10 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-500 bg-clip-text pb-8 text-5xl font-black uppercase text-transparent md:max-w-4xl md:text-9xl">
          UC Berkeley Bootcamp Challenges
        </h1>
        <h2 className="relative z-10 text-xl font-bold text-slate-500">
          By <br />
          Edward Vonschondorf
        </h2>
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
      <footer className="bg-slate-950 py-8 text-center">
        <p className="text-white">&copy; 2023 Edward Vonschondorf</p>
        <p>
          <a
            href="https://edward-vonschondorf.dev/"
            target="_blank"
            rel="noreferrer noopener"
            className="font-bold text-orange-500 transition-all duration-300 ease-in-out hover:text-orange-700 active:scale-90"
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
    deployment: string | null;
    mod: number;
    ref: React.RefObject<HTMLDivElement>;
  };

  const ChallengeItem = forwardRef((props: ChallengeItemPropTypes, ref) => {
    const { imgSrc, label, github, deployment, mod } = props;

    const { scrollYProgress } = useScroll({
      target: ref as React.RefObject<HTMLElement>,
      offset: ["start end", "start center"], // [Div Viewport , Div Viewport]
    });
    const opacity = useTransform(scrollYProgress, [0.5, 1], [0.5, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    return (
      <section className="grid place-content-center px-4 py-32 md:py-64">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="rounded-xl border border-white/10 bg-white/5 shadow-xl shadow-slate-500/25 backdrop-blur"
          style={{ opacity, scale }}
        >
          <header className="relative p-8">
            <span className="absolute -top-6 left-1/2 grid size-12 -translate-x-1/2 place-content-center rounded-full bg-purple-900/80 text-lg font-bold text-white shadow-lg shadow-purple-950">
              {mod}
            </span>
            <h2 className="text-xl font-bold text-slate-300 md:text-2xl">
              {label}
            </h2>
          </header>
          <main>
            <img
              src={imgSrc}
              alt={label}
              className="w-full border-y-2 border-purple-500/90 object-cover object-top opacity-80"
            />
          </main>
          <footer className="flex flex-col gap-4 p-8 text-slate-200 md:flex-row md:justify-center md:gap-8">
            <a href={github} target="_blank" rel="noreferrer noopener">
              <button className="w-full rounded-lg border border-slate-200/50 px-4 py-1 font-medium shadow-md shadow-slate-500/50 transition-all duration-300 ease-in-out hover:border-blue-500/50 hover:bg-white/10 hover:px-6 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/50 active:scale-90">
                Repository
              </button>
            </a>
            {deployment && (
              <a href={deployment} target="_blank" rel="noreferrer noopener">
                <button className="w-full rounded-lg border border-slate-200/50 px-4 py-1 font-medium shadow-md shadow-slate-500/50 transition-all duration-300 ease-in-out hover:border-blue-500/50 hover:bg-white/10 hover:px-6 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/50 active:scale-90">
                  Deployment
                </button>
              </a>
            )}
          </footer>
        </motion.div>
      </section>
    );
  });

  const ChallengeList = () => {
    const refs = useRef(challengeData.map(() => createRef<HTMLDivElement>()));
    return (
      <>
        {challengeData.map((challenge, index) => (
          <ChallengeItem key={index} ref={refs.current[index]} {...challenge} />
        ))}
      </>
    );
  };

  const End = () => {
    return (
      <section className="relative grid place-content-center py-32 md:py-64 border-b border-white/10">
        <div className="absolute left-1/2 bottom-0 z-0 size-full -translate-x-1/2 bg-[radial-gradient(circle_at_bottom_center,_var(--tw-gradient-stops))] from-orange-500/25 to-50%" />
        <h3
          className="relative z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
            from-amber-400  via-yellow-500 to-orange-600 bg-clip-text pb-8 text-5xl font-black uppercase text-transparent md:max-w-4xl md:text-9xl"
        >
          The End
        </h3>
      </section>
    );
  };

  return (
    <div className="bg-slate-950 bg-dot-pattern">
      <Header />
      <Main>
        <ChallengeList />
        <End />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
