import React, { useState } from "react";
// import ClickableImage from "../ClickableImage";
import { AiFillGithub, AiOutlineEye } from "react-icons/ai";

// Projects pictures
import cookLenseImg from "../../assets/cooklense.png";
import mealPlanImg from "../../assets/mealplan.png";
import socioSynergyImg from "../../assets/sociosynergy.png";
import ttbImg from "../../assets/ttb.png";
import weatherImg from "../../assets/weather.png";
import oldPortfolioImg from "../../assets/old-portfolio.png";

const portfolioProjects = [
  {
    image: cookLenseImg,
    alt: "Cooklense - A recipe sharing platform",
    url: "https://cooklense-6466eecac055.herokuapp.com/",
    repo: "https://github.com/kristiyantefov/Cooklense",
  },
  {
    image: socioSynergyImg,
    alt: "SocioSynergy - A social media platform",
    url: "https://socio5ynergy.herokuapp.com/",
    repo: "https://github.com/Ze7Hu/SocioSynergy",
  },
  {
    image: mealPlanImg,
    alt: "Meal Plan App - Plan and manage your meals",
    url: "https://abstynent.github.io/project1-meal-plan-app/",
    repo: "https://github.com/Abstynent/project1-meal-plan-app",
  },
  {
    image: ttbImg,
    alt: "The Tech Blog - A platform for tech enthusiasts",
    url: "https://ttb-478af9121bfb.herokuapp.com/",
    repo: "https://github.com/Abstynent/the-tech-blog",
  },
  {
    image: oldPortfolioImg,
    alt: "Old Portfolio - My previous portfolio website",
    url: "https://abstynent.github.io/portfolio/",
    repo: "https://github.com/Abstynent/portfolio",
  },
  {
    image: weatherImg,
    alt: "5D Weather Forecast - Weather forecasting application",
    url: "https://abstynent.github.io/5d-weather-forecast/",
    repo: "https://github.com/Abstynent/5d-weather-forecast",
  },
];

const ClickableImage = ({ src, url, repo, alt, darkMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const imageContainerStyle = {
    width: "350px",
    height: "250px",
    transition: "transform 0.2s ease-in-out",
    transform: isHovered ? "translateY(-10px)" : "translateY(0)",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`relative cursor-pointer ${darkMode ? "grayscale" : ""}`}
      style={imageContainerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={src}
        alt={alt}
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

const ProjectsComponent = ({darkMode}) => {
  return (
    <section
      id="portfolio"
      className="min-h-screen bg-gradient-to-t from-indigo-500 to-indigo-100 dark:from-gray-500 dark:to-gray-300"
    >
      <h3 className="text-5xl py-2 px-5 lg:px-8 lg:pt-5 min-w-screen">
        My work
      </h3>

      <div className="flex flex-col items-center justify-center gap-10 py-10 lg:flex-row lg:flex-wrap">
        {portfolioProjects.map((project, index) => (
          <div key={index}>
            <ClickableImage darkMode={darkMode}
              alt={project.alt}
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
