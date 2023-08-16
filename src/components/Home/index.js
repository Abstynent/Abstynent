import React from "react";
import avatar from "../../img/avatar.png";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail
} from "react-icons/ai";

const HomeComponent = () => {
  return (
    <>
      <div className="text-center p-5">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          Lukasz Jurkiewicz
        </h2>
        <h3 className="text-2xl py-1 md:text-3xl">Full Stack Web Developer</h3>
        <p className="text-md py-5 leading-8 text-gray-600 sm:text-md sm:leading-6 md:text-xl  mx-auto">
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
        <AiFillGithub />
        <AiFillLinkedin />
        <AiFillTwitterCircle />
        <AiOutlineMail />
      </div>

      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 my-10 overflow-hidden md:h-96 md:w-96">
        <img src={avatar} />
      </div>
    </>
  );
};

export default HomeComponent;
