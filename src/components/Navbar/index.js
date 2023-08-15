import React from "react";
import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const NavbarComponent = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons">wookash</h1>
        <ul className="flex items-center">
          <li>
            {!darkMode ? (
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className=" cursor-pointer text-2xl"
              />
            ) : (
              <BsFillSunFill
                onClick={() => setDarkMode(!darkMode)}
                className=" cursor-pointer text-2xl"
              />
            )}
          </li>
          <li>
            <a href="" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">Resume</a>
          </li>
        </ul>
      </nav>
  );
};

export default NavbarComponent;
