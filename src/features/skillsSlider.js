import Slider from "react-slick";
import "../Styles/SkillsPageStyles.scss";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

export default function SkillsSlider() {
  const data = [
    { skill: "ReactJS", percent: 80 },
    { skill: "JavaScript", percent: 80 },
    { skill: "React-Native", percent: 50 },
    { skill: "CSS3/SASS", percent: 90 },
    { skill: "TCP/UDP", percent: 50 },
    { skill: "Python", percent: 95 },
    { skill: "HTML5", percent: 80 },
    { skill: "Redux", percent: 80 },
  ];
  const SliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
                  borderRadius: "10px",
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
