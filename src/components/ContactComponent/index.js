import React from "react";
import {
  FaHtml5,
  FaJs,
  FaNode,
  FaCss3Alt,
  FaReact,
  FaDatabase,
  FaProjectDiagram,
  FaNodeJs,
  FaBootstrap,
  FaFeatherAlt,
} from "react-icons/fa";

const skillsData = [
  { name: "HTML", icon: FaHtml5 },
  { name: "JavaScript", icon: FaJs },
  { name: "Node.js", icon: FaNode },
  { name: "CSS", icon: FaCss3Alt },
  { name: "React", icon: FaReact },
  { name: "MongoDB", icon: FaDatabase },
  { name: "SQL", icon: FaDatabase },
  { name: "GraphQL", icon: FaProjectDiagram },
  { name: "Express", icon: FaNodeJs },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "Tailwind CSS", icon: FaFeatherAlt },
];

const ContactComponent = () => {
  return (
    <section className="bg-green-200 min-h-screen">
      <h3 className="text-3xl py-2 px-5 lg:px-8 lg:pt-5">About Me</h3>
      <div className="container mx-auto mt-8 md:flex md:flex-wrap">
        <div className="w-full md:w-1/3 pr-4">
          <h4 className="text-2xl py-5 px-5">Personal Info</h4>
          <ul className="leading-10">
            <li className="flex">
              <span className="w-28 text-gray-700">Name:</span>
              <span>Lukasz Jurkiewicz</span>
            </li>
            <li className="flex">
              <span className="w-28 text-gray-700">Address:</span>
              <span>United Kingdom</span>
            </li>
            <li className="flex">
              <span className="w-28 text-gray-700">Email:</span>
              <span>luk.jur@outlook.com</span>
            </li>
            <li className="flex">
              <span className="w-28 text-gray-700">Phone:</span>
              <span>+447575747044</span>
            </li>
            <li className="flex">
              <span className="w-28 text-gray-700">Languages:</span>
              <span>English, Polish</span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-2/3 mt-4 md:mt-0">
          <h4 className="text-center text-2xl py-5 px-5">Skills</h4>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {skillsData.map((skill) => (
              <li key={skill.name} className="text-2xl flex items-center gap-4 py-2 px-5">
                {React.createElement(skill.icon, {
                  className: "mr-2 text-gray-700",
                })}
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
