import React from "react";
import avatar from "../../assets/avatar.png";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail
} from "react-icons/ai";

const HomeComponent = () => {
  return (
    <>
      <div id="home" className="text-center p-5">
        <h2 className="text-5xl py-2 text-indigo-600 font-medium md:text-6xl dark:text-gray-800">
          Lukasz Jurkiewicz
        </h2>
        <h3 className="text-2xl py-1 md:text-3xl">Full Stack Web Developer</h3>
        <p className="text-md py-5 leading-8 text-gray-600 sm:text-md sm:leading-6 md:text-xl  mx-auto dark:text-gray-700">
          Passionate and driven full-stack developer with a proven track record
          of expertise across a diverse spectrum of technologies. My primary
          objective is to craft extraordinary web applications that provide
          flawless user experiences. Through my comprehensive full-stack
          developer program at the University of Birmingham, I've honed hands-on
          proficiency with a wide array of cutting-edge technologies. I excel
          within collaborative team settings, leveraging my robust technical
          acumen to make impactful contributions to projects while consistently
          delivering innovative resolutions to intricate challenges.
        </p>
      </div>

      <div className="text-5xl flex justify-center gap-16 py-1 text-gray-600 lg:gap-32">
        <a href="https://github.com/Abstynent"><AiFillGithub className="hover:text-indigo-600 dark:hover:text-gray-500" /></a>
        <a href="https://www.linkedin.com/in/lukasz-j-117643259/"><AiFillLinkedin className="hover:text-indigo-600 dark:hover:text-gray-500" /></a>
        <a href="https://twitter.com/woo4ash"><AiFillTwitterCircle  className="hover:text-indigo-600 dark:hover:text-gray-500"/></a>
        <a href="mailto:luk.jur@outlook.com"><AiOutlineMail className="hover:text-indigo-600 dark:hover:text-gray-500" /></a>
      </div>

      <div className="relative mx-auto bg-gradient-to-b from-indigo-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96 dark:from-gray-500">
        <img src={avatar} alt="Emoji avatar waving."/>
      </div>
    </>
  );
};

export default HomeComponent;
