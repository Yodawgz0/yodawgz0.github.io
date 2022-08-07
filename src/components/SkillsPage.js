import "../Styles/SkillsPageStyles.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const SkillsPage = () => {
  const CarouselPercentage = [
    { skills: "Python", percent: 95 },
    { skills: "JavaScript", percent: 80 },
    { skills: "ReactNative", percent: 60 },
    { skills: "ReactJS", percent: 80 },
    { skills: "CSS3", percent: 85 },
    { skills: "Protocols", percent: 75 },
    { skills: "C", percent: 60 },
    { skills: "APIs", percent: 60 },
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          autoPlaySpeed={100}
          infinite={true}
          className="skillSlider"
        >
          {CarouselPercentage.map((element, index) => {
            return (
              <div key={index} className=" itemsofSkills">
                <CircularProgressbarWithChildren
                  className="progressBar"
                  styles={buildStyles({
                    trailColor: "#000000",
                    pathColor: "#01FFFF",
                  })}
                  strokeWidth={10}
                  value={element.percent}
                >
                  <div
                    style={{
                      fontSize: "2.5ch",
                      marginTop: -5,
                      color: "#fff",
                    }}
                  >
                    <strong></strong> {element.skills}
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
