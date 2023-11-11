document.addEventListener('DOMContentLoaded', (event) => {
  const links = [
    {
      link: './m00_prework_study_guide/',
      label: 'Pre-Work Study Guide',
      deployment: 'github',
    },
    {
      link: './m01_horiseon_refactor/',
      label: 'Horiseon Refactor',
      deployment: 'github',
    },
    {
      link: './m02_my_portfolio/',
      label: 'My Portfulio (Portfolio v1)',
      deployment: 'github',
    },
    {
      link: './m03_password_generator/',
      label: 'Password Generator',
      deployment: 'github',
    },
    {
      link: './m04_coding_quiz/',
      label: 'Coding Quiz',
      deployment: 'github',
    },
    {
      link: './m05_workday_scheduler/',
      label: 'Workday Scheduler',
      deployment: 'github',
    },
    {
      link: './m06_weather_dashboard/',
      label: 'Weather Dashboard',
      deployment: 'github',
    },
    {
      link: 'https://youtu.be/GUlMvpk-Ono',
      label: 'README Generator',
      deployment: 'youtube',
    },
    {
      link: 'https://youtu.be/CGi1bugTEi8',
      label: 'SVG Logo Maker',
      deployment: 'youtube',
    },
    {
      link: 'https://young-wave-89443-5b166d2a064e.herokuapp.com/',
      label: 'Express.js Note Taker',
      deployment: 'heroku',
    },
    {
      link: 'https://youtu.be/dKM0UAyHzxY',
      label: 'MySQL Employee Tracker',
      deployment: 'youtube',
    },
    {
      link: 'https://youtu.be/t5qnrDMxy6Q',
      label: 'ORM E-Commerce Back End',
      deployment: 'youtube',
    },
    {
      link: 'https://obscure-badlands-14784-588733df30d2.herokuapp.com/',
      label: 'MVC Tech Blog',
      deployment: 'heroku',
    },
    {
      link: 'https://youtu.be/KsAnFe4RiYA',
      label: 'NoSQL Social Network API',
      deployment: 'youtube',
    },
    {
      link: 'https://secret-shore-93853-24e6565e7438.herokuapp.com/',
      label: 'PWA Text Editor',
      deployment: 'heroku',
    },
    {
      link: 'https://edward-vonschondorf.dev/',
      label: 'React Portfolio (Portfolio v2)',
      deployment: 'cloudflare',
    },
    {
      link: 'https://github.com/Torvec/bootcamp-challenges/tree/main/m21_mern_book_search_engine',
      label: 'MERN Book Search Engine',
      deployment: 'github',
    }, // UNDER DEVELOPMENT
    {
      link: 'https://github.com/Torvec/bootcamp-challenges/tree/main/m22_redux_store',
      label: 'Redux Store (Extra Credit)',
      deployment: 'github',
    }, // UNDER DEVELOPMENT
  ];
  const linklist = document.getElementById('link-list');
  links.forEach((link) => {
    const li = document.createElement('li');
    li.innerHTML = `
                <a href="${link.link}" target="_blank">
                    ${link.label}
                </a>
                <img src="./assets/img/${link.deployment}.svg" alt="${link.deployment}" />
            `;
    linklist.appendChild(li);
  });
});
