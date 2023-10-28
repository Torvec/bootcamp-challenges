// The header component for the app

import AppNavMenu from "./AppNavMenu.jsx";

function AppHeader() {
  return (
    <header className="fixed top-0 bg-white z-50 bg-opacity-95 w-screen">
      <AppNavMenu />
    </header>
  );
}

export default AppHeader;
