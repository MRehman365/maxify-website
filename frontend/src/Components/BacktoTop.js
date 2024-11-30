import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai"; // Import the React Icon

const ScrollProgress = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const progressPath = document.querySelector(".progress-wrap path");
    const pathLength = progressPath.getTotalLength();

    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };

    const onScroll = () => {
      updateProgress();
      if (window.scrollY > 50) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="paginacontainer">
      <div
        className={`progress-wrap ${isActive ? "active-progress" : ""}`}
        onClick={scrollToTop}
      >
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
        {/* Set color using the icon's own property */}
        <div  className="progress-icon">
        <AiOutlineArrowUp color="blue" />
        </div>
      </div>
    </div>
  );
};

export default ScrollProgress;
