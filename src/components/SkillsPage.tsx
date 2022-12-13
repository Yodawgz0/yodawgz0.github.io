import "../Styles/SkillsPageStyles.scss";
import SkillsSlider from "../features/skillsSlider";
import React from "react";
import { useEffect } from "react";

export const SkillsPage = ({ skillsRef, activeLinkValue }: Props) => {
  useEffect(() => {
    if (activeLinkValue === "Skills") {
      skillsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activeLinkValue, skillsRef]);
  return (
    <div className="mainContainer">
      <blockquote>
        <span>
          <p className="h1 mb-5 IntroText">
            Passionate about design and development of industry using Python
            plus Web Applications that are capable of creating basic to high
            performance advance workflows.
          </p>
        </span>
      </blockquote>

      <div className="d-flex align-items-center flex-column pt-5 skillsMainPanel">
        <div ref={skillsRef} className="skillsMain">
          <span className="h1 mt-2 skillsText">Skills</span>
          <span className="h5 mt-5 mx-5 px-5">
            Having learned various development tools and frameworks. I
            constantly create and work on various projects that not only keep me
            at speed with latest releases but also explore plethora of domains
            that can expand and add to my knowledge base.
            <br />
            <br />I am well versed in the skills, that I have gained during my
            work experience and self-learning. I enjoy grabbing new tech as fast
            as possible, sharing my knowledge on the go and unlearn/learn as new
            standards/technologies emerge.
          </span>
        </div>

        <SkillsSlider />
      </div>
    </div>
  );
};
