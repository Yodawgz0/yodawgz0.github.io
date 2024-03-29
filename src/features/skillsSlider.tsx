import Slider from "react-slick";
import "../Styles/SkillsPageStyles.scss";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import React from "react";

export default function SkillsSlider() {
  const data = [
    { skill: "ReactJS", percent: 90 },
    { skill: "JavaScript", percent: 90 },
    { skill: "TypeScript", percent: 80 },
    { skill: "React-Native", percent: 50 },
    { skill: "CSS3/SASS", percent: 90 },
    { skill: "Python", percent: 95 },
    { skill: "HTML5", percent: 100 },
    { skill: "Redux", percent: 80 },
    { skill: "Core Web Vitals", percent: 70 },
    { skill: "Unit Testing", percent: 65 },
    { skill: "Bootstrap", percent: 80 },
    { skill: "NodeJS", percent: 75 },
    { skill: "MongoDB", percent: 65 },
  ];
  const SliderSettings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="skillSlider">
      <Slider {...SliderSettings}>
        {data.map((element, i) => {
          return (
            <div key={i} className="skillSliderBarMain">
              <CircularProgressbarWithChildren
                className="progressBar"
                styles={buildStyles({
                  trailColor: "#000000",
                  pathColor: "#01FFFF",
                  //borderRadius: "10px",
                  strokeLinecap: "butt",
                })}
                strokeWidth={9}
                value={element.percent}
              >
                <div
                  style={{
                    fontSize: "2.2ch",
                    marginTop: -5,
                    color: "#fff",
                  }}
                >
                  {element.skill}
                </div>
              </CircularProgressbarWithChildren>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
