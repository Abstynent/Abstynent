import React, { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const NavbarComponent = ({ darkMode, toggleDarkMode }) => {
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
                  onClick={() => toggleDarkMode(!darkMode)}
                  className="cursor-pointer text-indigo-600 text-2xl"
                />
              ) : (
                <BsFillSunFill
                  onClick={() => toggleDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              )}
            </li>
            <li>
              <a
                href="#portfolio"
                className="bg-gradient-to-r from-indigo-500 to-indigo-400 text-white px-4 py-2 rounded-md ml-8 hover:to-indigo-500 dark:from-gray-600 dark:to-gray-500 dark:hover:bg-gray-700 dark:hover:to-gray-800"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#aboutMe"
                className="bg-gradient-to-r from-indigo-500 to-indigo-400 text-white px-4 py-2 rounded-md ml-8 hover:to-indigo-500 dark:from-gray-600 dark:to-gray-500 dark:hover:bg-gray-700 dark:hover:to-gray-800"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className="bg-gradient-to-r from-indigo-500 to-indigo-400 text-white px-4 py-2 rounded-md ml-8 hover:to-indigo-500 dark:from-gray-600 dark:to-gray-500 dark:hover:bg-gray-700 dark:hover:to-gray-800"
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
              className="bg-gradient-to-t from-indigo-500 to-indigo-400 text-white px-4 py-2 rounded-md ml-8 block text-2xl cursor-pointer dark:from-gray-600 dark:to-gray-500 dark:hover:bg-gray-700 dark:hover:to-gray-800"
            >
              ✖
            </button>
            <div className="flex flex-col mt-4">
              <a
                href="#home"
                onClick={toggleMobileMenu}
                className="text-indigo-700 py-2 px-4 dark:text-black"
              >
                Home
              </a>
              <a
                href="#portfolio"
                onClick={toggleMobileMenu}
                className="text-indigo-700 py-2 px-4 dark:text-black"
              >
                Portfolio
              </a>
              <a
                href="#aboutMe"
                onClick={toggleMobileMenu}
                className="text-indigo-700 py-2 px-4 dark:text-black"
              >
                About Me
              </a>
              <a
                href="#resume"
                onClick={toggleMobileMenu}
                className="text-indigo-700 py-2 px-4 dark:text-black"
              >
                Resume
              </a>
            </div>
          </div>
        )}

        {!mobileMenuOpen && (
          <div className="md:hidden flex items-center">
            {" "}
            {!darkMode ? (
              <BsFillMoonStarsFill
                onClick={() => toggleDarkMode(!darkMode)}
                className="cursor-pointer text-indigo-600 text-2xl"
              />
            ) : (
              <BsFillSunFill
                onClick={() => toggleDarkMode(!darkMode)}
                className="cursor-pointer text-2xl"
              />
            )}
            <button
              onClick={toggleMobileMenu}
              className="bg-gradient-to-b from-indigo-500 to-indigo-400 text-white px-4 py-2 rounded-md ml-4 block text-2xl cursor-pointer dark:from-gray-600 dark:to-gray-500 dark:hover:bg-gray-700 dark:hover:to-gray-800"
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
