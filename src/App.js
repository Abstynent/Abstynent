import React, { useState } from "react";
import NavbarComponent from "./components/Navbar";
import HomeComponent from "./components/Home";
import AboutMeComponent from "./components/AboutMeComponent";
import ProjectsComponent from "./components/Projects";
import BackToTopButton from "./components/BackToTopBtn";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <main className={darkMode ? "dark" : ""}>
      <section className="min-h-screen bg-gradient-to-b from-indigo-300 to-indigo-100 px-10 md:px-20 lg:px-40 dark:from-gray-500 dark:to-gray-300">
        <NavbarComponent darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <HomeComponent />
      </section>
      <ProjectsComponent darkMode={darkMode} />
      <AboutMeComponent />
      <BackToTopButton />
    </main>
  );
}

export default App;
