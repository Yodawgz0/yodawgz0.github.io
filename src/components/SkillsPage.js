import "../Styles/SkillsPageStyles.scss";
import SkillsSlider from "../features/skillsSlider";
export const SkillsPage = () => {
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

      <div className="  d-flex align-items-center flex-column pt-5 skillsMainPanel">
        <div className="skillsMain">
          <span className="h1 mt-2 skillsText">Skills</span>
          <span className="h5 mt-5 mx-5 px-5">
            I am well versed in the skills, that I have gained during my work
            experience and self-learning. I enjoy grabbing new tech as fast as
            possible, sharing my knowledge on the go and unlearn/learn as new
            standards/technologies emerge.
          </span>
        </div>

        <SkillsSlider />
      </div>
    </div>
  );
};
