import React, { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const NavbarComponent = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-3xl font-burtons">wookash</h1>
      <div className="flex items-center">
        {!mobileMenuOpen && (
          <ul className="hidden md:flex items-center">
            <li>
              {!darkMode ? (
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-indigo-600 text-2xl"
                />
              ) : (
                <BsFillSunFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              )}
            </li>
            <li>
              <a
                href="#portfolio"
                className="bg-gradient-to-r from-indigo-500 to-indigo-400 text-white px-4 py-2 rounded-md ml-8"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#aboutMe"
                className="bg-gradient-to-r from-indigo-500 to-indigo-400 text-white px-4 py-2 rounded-md ml-8"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className="bg-gradient-to-r from-indigo-500 to-indigo-400 text-white px-4 py-2 rounded-md ml-8"
              >
                Resume
              </a>
            </li>
          </ul>
        )}

        {mobileMenuOpen && (
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="bg-gradient-to-b from-indigo-500 to-indigo-400 text-white px-4 py-2 rounded-md ml-8 block text-2xl cursor-pointer"
            >
              ✖
            </button>
            <div className="flex flex-col mt-4">
              <a href="#home" onClick={toggleMobileMenu} className="text-indigo-700 py-2 px-4">
                Home
              </a>
              <a href="#portfolio" onClick={toggleMobileMenu} className="text-indigo-700 py-2 px-4">
                Portfolio
              </a>
              <a href="#aboutMe" onClick={toggleMobileMenu} className="text-indigo-700 py-2 px-4">
                About Me
              </a>
              <a href="#resume" onClick={toggleMobileMenu} className="text-indigo-700 py-2 px-4">
                Resume
              </a>
            </div>
          </div>
        )}

        {!mobileMenuOpen && (
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className=" bg-gradient-to-b from-indigo-500 to-indigo-400 text-white px-4 py-2 rounded-md ml-8 block text-2xl cursor-pointer"
            >
              {mobileMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarComponent;
