import React, { useState } from "react";
import {
  FaHtml5,
  FaJs,
  FaCss3Alt,
  FaReact,
  FaDatabase,
  FaProjectDiagram,
  FaNodeJs,
  FaBootstrap,
  FaFeatherAlt,
  FaDownload,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const skillsData = [
  { name: "HTML", icon: FaHtml5 },
  { name: "JavaScript", icon: FaJs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "CSS", icon: FaCss3Alt },
  { name: "React", icon: FaReact },
  { name: "MongoDB", icon: FaDatabase },
  { name: "SQL", icon: FaDatabase },
  { name: "GraphQL", icon: FaProjectDiagram },
  { name: "Express", icon: SiExpress },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "Tailwind CSS", icon: FaFeatherAlt },
];

const AboutMeComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // form submit logic goes here
      console.log("Form data:", formData);
    }

    // clear state
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setFormErrors({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <section
      id="aboutMe"
      className="min-h-screen bg-gradient-to-b from-indigo-500 to-indigo-100 "
    >
      <h3 className=" text-5xl py-2 px-5 lg:px-8 lg:pt-5">About Me</h3>
      <div className="container mx-auto mt-8 md:flex md:flex-wrap">
        {/* Personal Info */}
        <div className="w-full md:w-1/3 pr-4">
          <h4 className="text-3xl py-5 px-5">Personal Info</h4>
          <ul className="leading-10 px-5">
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

        {/* Skills */}
        <div className="w-full md:w-2/3 mt-4 md:mt-0">
          <h4 className="text-left text-3xl py-5 px-5 lg:text-center">
            Skills
          </h4>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {skillsData.map((skill) => (
              <li
                key={skill.name}
                className="text-2xl flex items-center gap-4 py-2 px-5 hover:text-indigo-200 transition-colors duration-300"
              >
                {React.createElement(skill.icon, {
                  className: "mr-2 text-gray-700",
                })}
                {skill.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Download Resume Button */}
        <div id="resume" className="w-full md:w-1/3 pr-4">
          <h4 className="text-2xl py-5 px-5">Resume</h4>
          <div className="flex flex-col items-center justify-center h-full">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 w-48 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
              onClick={() => {
                // download button logic
              }}
            >
              <FaDownload className="mr-2 text-2xl lg:text-3xl" />
              <span>Download CV</span>
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-2/3 mt-4 md:mt-0">
          <h4 className="text-2xl py-5 px-5">Contact Form</h4>
          <form className="px-5" onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <input
                type="text"
                id="name"
                name="name"
                className="bg-indigo-100 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Your Name
              </label>
            </div>
            <div className="mb-4 relative">
              <input
                type="email"
                id="email"
                name="email"
                className="bg-indigo-100 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Your Email
              </label>
            </div>
            <div className="mb-4 relative">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="bg-indigo-100 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                value={formData.me}
                onChange={handleInputChange}
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Your Message
              </label>
            </div>
            <div className="flex items-center justify-center pt-5 pb-10 lg:pb-0">
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-700 w-48 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AboutMeComponent;
