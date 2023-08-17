import React, { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds a smooth scrolling effect
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 ${
        isVisible ? "visible" : "invisible"
      }`}
    >
      <BsFillArrowUpCircleFill className="text-5xl text-indigo-900 hover:text-indigo-950 dark:text-gray-600 dark:hover:text-gray-800"/>
    </button>
  );
};

export default BackToTopButton;
