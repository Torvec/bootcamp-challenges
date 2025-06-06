import { motion, useScroll, useTransform } from "framer-motion";
import { forwardRef, useRef, createRef } from "react";

function App() {
  const challengeData = [
    {
      mod: 0,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m00_prework_study_guide",
      // deployment: null,
      label: "Pre-Work Study Guide",
      srcType: "image",
      src: "/img/m00_prework_study_guide.jpg",
    },
    {
      mod: 1,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m01_horiseon_refactor",
      // deployment: null,
      label: "Horiseon Refactor",
      srcType: "image",
      src: "/img/m01_horiseon_refactor.jpg",
    },
    {
      mod: 2,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m02_my_portfolio",
      // deployment: null,
      label: "My Portfulio (Portfolio v1)",
      srcType: "image",
      src: "/img/m02_my_portfolio.jpg",
    },
    {
      mod: 3,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m03_password_generator",
      // deployment: null,
      label: "Password Generator",
      srcType: "image",
      src: "/img/m03_password_generator.jpg",
    },
    {
      mod: 4,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m04_coding_quiz",
      // deployment: null,
      label: "Coding Quiz",
      srcType: "image",
      src: "/img/m04_coding_quiz.jpg",
    },
    {
      mod: 5,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m05_workday_scheduler",
      // deployment: null,
      label: "Workday Scheduler",
      srcType: "image",
      src: "/img/m05_workday_scheduler.jpg",
    },
    {
      mod: 6,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m06_weather_dashboard",
      // deployment: null,
      label: "Weather Dashboard",
      srcType: "image",
      src: "/img/m06_weather_dashboard.jpg",
    },
    {
      mod: 9,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m09_readme_generator",
      // deployment: "https://youtu.be/GUlMvpk-Ono",
      label: "README Generator",
      srcType: "video",
      src: "https://www.youtube.com/embed/GUlMvpk-Ono?si=PNc8bGdrny7QRToR",
    },
    {
      mod: 10,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m10_svg_logo_maker",
      // deployment: "https://youtu.be/CGi1bugTEi8",
      label: "SVG Logo Maker",
      srcType: "video",
      src: "https://www.youtube.com/embed/CGi1bugTEi8?si=uC6Qr6IkbTh4cGC1",
    },
    {
      mod: 11,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m11_expressjs_note_taker",
      // deployment: "https://young-wave-89443-5b166d2a064e.herokuapp.com/",
      label: "Express.js Note Taker",
      srcType: "image",
      src: "/img/m11_expressjs_note_taker.jpg",
    },
    {
      mod: 12,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m12_mysql_employee_tracker",
      // deployment: "https://youtu.be/dKM0UAyHzxY",
      label: "MySQL Employee Tracker",
      srcType: "video",
      src: "https://www.youtube.com/embed/dKM0UAyHzxY?si=sDoQh9vlWxJpODMP",
    },
    {
      mod: 13,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m13_orm_ecommerce_backend",
      // deployment: "https://youtu.be/t5qnrDMxy6Q",
      label: "ORM E-Commerce Back End",
      srcType: "video",
      src: "https://www.youtube.com/embed/t5qnrDMxy6Q?si=L1hCtYN44Y_octp3",
    },
    {
      mod: 14,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m14_mvc_tech_blog",
      // deployment: "https://obscure-badlands-14784-588733df30d2.herokuapp.com/",
      label: "MVC Tech Blog",
      srcType: "image",
      src: "/img/m14_mvc_tech_blog.jpg",
    },
    {
      mod: 18,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m18_nosql_social_network_api",
      // deployment: "https://youtu.be/KsAnFe4RiYA",
      label: "NoSQL Social Network API",
      srcType: "video",
      src: "https://www.youtube.com/embed/KsAnFe4RiYA?si=aosTh7DfEcXUxPU2",
    },
    {
      mod: 19,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m19_pwa_text_editor",
      // deployment: "https://secret-shore-93853-24e6565e7438.herokuapp.com/",
      label: "PWA Text Editor",
      srcType: "image",
      src: "/img/m19_pwa_text_editor.jpg",
    },
    {
      mod: 20,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m20_react_portfolio",
      // deployment: null,
      label: "React Portfolio (Portfolio v2)",
      srcType: "image",
      src: "/img/m20_react_portfolio.jpg",
    },
    {
      mod: 21,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m21_mern_book_search_engine",
      // deployment: "https://immense-forest-49319-e45ef3352e1e.herokuapp.com/",
      label: "MERN Book Search Engine",
      srcType: "image",
      src: "/img/m21_mern_book_search_engine.jpg",
    },
    {
      mod: 22,
      github:
        "https://github.com/Torvec/bootcamp-challenges/tree/main/m22_redux_store",
      // deployment: null,
      label: "Redux Store (Extra Credit)",
      srcType: "image",
      src: "/img/22-state-homework-demo-01.gif",
    },
  ];

  const Header = () => {
    return (
      <header className="relative grid min-h-screen place-content-center gap-12 overflow-hidden py-8 text-center">
        <div className="absolute left-1/2 top-0 z-0 size-full -translate-x-1/2 bg-[radial-gradient(circle_at_top_center,_var(--tw-gradient-stops))] from-purple-950/75 to-50%" />
        <div className="absolute left-1/2 top-0 z-0 size-full -translate-x-1/2 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/25 to-50%" />
        <div className="absolute left-1/2 top-0 z-0 size-full -translate-x-1/2 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-500/25 to-50%" />
        <img
          src="/img/favicon.png"
          alt="Icon"
          className="mx-auto size-12 shadow-lg shadow-slate-200/50"
        />
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
    src: string;
    srcType: string;
    label: string;
    github: string;
    // deployment: string | null;
    mod: number;
    ref: React.RefObject<HTMLDivElement>;
  };

  const ChallengeItem = forwardRef((props: ChallengeItemPropTypes, ref) => {
    const { src, srcType, label, github, /*deployment,*/ mod } = props;

    const { scrollYProgress } = useScroll({
      target: ref as React.RefObject<HTMLElement>,
      offset: ["start end", "start center"], // [Div Viewport , Div Viewport]
    });
    const opacity = useTransform(scrollYProgress, [0.5, 1], [0.5, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

    return (
      <section className="px-4 py-32 md:py-64">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="container mx-auto rounded-xl border border-white/10 bg-white/5 shadow-xl shadow-slate-500/25 backdrop-blur"
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
          <main className="bg-black">
            {srcType === "video" && (
              <div className="w-full border-y-2 border-purple-500/90">
                <iframe
                  className="aspect-video h-full w-full"
                  src={src}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            {srcType === "image" && (
              <img
                src={src}
                alt={label}
                className="w-full border-y-2 border-purple-500/90 object-cover object-top opacity-90"
              />
            )}
          </main>
          <footer className="flex flex-col gap-4 p-8 text-slate-200 md:flex-row md:justify-center md:gap-8">
            <a href={github} target="_blank" rel="noreferrer noopener">
              <button className="w-full rounded-lg border border-slate-200/50 px-4 py-1 font-medium shadow-md shadow-slate-500/50 transition-all duration-300 ease-in-out hover:border-blue-500/50 hover:bg-white/10 hover:px-6 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/50 active:scale-90 active:shadow-none">
                Repository
              </button>
            </a>
            {/* {deployment && (
              <a href={deployment} target="_blank" rel="noreferrer noopener">
                <button className="w-full rounded-lg border border-slate-200/50 px-4 py-1 font-medium shadow-md shadow-slate-500/50 transition-all duration-300 ease-in-out hover:border-blue-500/50 hover:bg-white/10 hover:px-6 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/50 active:scale-90 active:shadow-none">
                  Deployment
                </button>
              </a>
            )} */}
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
      <section className="relative grid place-content-center border-b border-white/10 py-32 md:py-64">
        <div className="absolute bottom-0 left-1/2 z-0 size-full -translate-x-1/2 bg-[radial-gradient(circle_at_bottom_center,_var(--tw-gradient-stops))] from-orange-500/25 to-50%" />
        <button
          className="relative z-10 rounded-xl bg-gradient-to-t from-amber-400  via-yellow-500 to-orange-600 px-6 py-2 font-bold text-black shadow-lg shadow-orange-500/50 transition-all duration-300 ease-in-out hover:px-10 hover:text-black/75 hover:shadow-orange-500/75 active:scale-90"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to Top
        </button>
      </section>
    );
  };

  const ProgressBar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = scrollYProgress;
    const backgroundColor = useTransform(
      scrollYProgress,
      [0, 0.25, 0.5, 0.75, 1],
      ["#3b82f6", "#a855f7", "#ef4444", "#f97316", "#f59e0b"], // blue-500, purple-500, red-500, orange-500, yellow-500
    );
    return (
      <motion.div
        className="fixed inset-0 z-20 h-1 w-full opacity-75"
        style={{ scaleX, backgroundColor, transformOrigin: "left" }}
      />
    );
  };

  return (
    <div className="bg-slate-950 bg-dot-pattern">
      <ProgressBar />
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
