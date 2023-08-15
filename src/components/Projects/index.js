import React, { useState } from "react";
// import ClickableImage from "../ClickableImage";
import { AiFillGithub, AiOutlineEye } from "react-icons/ai";

// Projects pictures
import cookLenseImg from "../../img/cooklense.png";
import mealPlanImg from "../../img/mealplan.png";
import socioSynergyImg from "../../img/sociosynergy.png";
import ttbImg from "../../img/ttb.png";
import weatherImg from "../../img/weather.png";
import oldPortfolioImg from "../../img/old-portfolio.png";

const portfolioProjects = [
  {
    image: cookLenseImg,
    url: "https://cooklense-6466eecac055.herokuapp.com/",
    repo: "https://github.com/kristiyantefov/Cooklense",
  },
  {
    image: socioSynergyImg,
    url: "https://socio5ynergy.herokuapp.com/",
    repo: "https://github.com/Ze7Hu/SocioSynergy",
  },
  {
    image: mealPlanImg,
    url: "https://abstynent.github.io/project1-meal-plan-app/",
    repo: "https://github.com/Abstynent/project1-meal-plan-app",
  },
  {
    image: ttbImg,
    url: "https://ttb-478af9121bfb.herokuapp.com/",
    repo: "https://github.com/Abstynent/the-tech-blog",
  },
  {
    image: oldPortfolioImg,
    url: "https://abstynent.github.io/portfolio/",
    repo: "https://github.com/Abstynent/portfolio",
  },
  {
    image: weatherImg,
    url: "https://abstynent.github.io/5d-weather-forecast/",
    repo: "https://github.com/Abstynent/5d-weather-forecast",
  },
];

const ClickableImage = ({ src, url, repo }) => {
  const [isHovered, setIsHovered] = useState(false);

  const imageContainerStyle = {
    width: "350px",
    height: "250px",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative cursor-pointer"
      style={imageContainerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={src}
        alt="Clickable Image"
        className="rounded-lg object-cover w-full h-full"
      />
      {isHovered && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 rounded-lg">
          <a href={repo}>
            <AiFillGithub className="text-5xl text-white mx-6 m-1" />
          </a>
          <a href={url}>
            <AiOutlineEye className="text-5xl text-white mx-6 m-1" />
          </a>
        </div>
      )}
    </div>
  );
};

const ProjectsComponent = () => {
  return (
    <section className="bg-teal-400">
      <h3 className="text-3xl py-1">Portfolio</h3>

      <div className="flex flex-col items-center justify-center gap-10 py-10 lg:flex-row lg:flex-wrap">
        {portfolioProjects.map((project, index) => (
          <div key={index}>
            <ClickableImage
              src={project.image}
              url={project.url}
              repo={project.repo}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsComponent;
