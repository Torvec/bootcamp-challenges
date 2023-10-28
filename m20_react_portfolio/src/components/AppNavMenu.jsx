// The Navigation Menu for the app

import { Link as RouterLink, NavLink } from "react-router-dom";

function AppNavMenu() {
  return (
    <nav className="flex justify-center">
      <ul className="flex items-center gap-4 py-4 font-sans text-sm font-semibold md:gap-20 md:text-lg">
        <li>
          <NavLink className="nav-link" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/portfolio">
            Portfolio
          </NavLink>
        </li>
        <li>
          <RouterLink
            to={"/home"}
            className="text-xl transition-all duration-500 ease-in-out hover:tracking-wider hover:text-darkgray md:text-3xl"
          >
            &#123;EV&#125;
          </RouterLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/resume">
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNavMenu;
