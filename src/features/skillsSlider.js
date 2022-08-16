import Slider from "react-slick";
import "../Styles/SkillsPageStyles.scss";
import { ProgressBar } from "react-bootstrap";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

export default function SkillsSlider() {
  const data = [
    { skill: "ReactJS", percent: 80 },
    { skill: "JavaScript", percent: 80 },
    { skill: "React-Native", percent: 50 },
    { skill: "CSS3/SASS", percent: 75 },
    { skill: "TCP/UDP", percent: 50 },
    { skill: "Python", percent: 95 },
    { skill: "HTML5", percent: 80 },
    { skill: "APIs", percent: 60 },
  ];
  const SliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="skillSlider">
      <Slider {...SliderSettings}>
        {data.map((element, i) => {
          return (
            <div className="skillSliderBarMain">
              <CircularProgressbarWithChildren
                className="progressBar"
                styles={buildStyles({
                  trailColor: "#000000",
                  pathColor: "#01FFFF",

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
