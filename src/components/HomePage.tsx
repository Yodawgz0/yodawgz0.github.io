import "../Styles/homePageStyle.scss";
import { Row, Col } from "react-bootstrap";
import frontPagePic from "../assests/frontPagePic.png";
import React, { useEffect } from "react";

interface IHomePage {
  homeRef: any;
  activeLinkValue: string;
}

export const HomePage = ({ homeRef, activeLinkValue }: IHomePage) => {
  useEffect(() => {
    if (activeLinkValue === "HomePage") {
      homeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeLinkValue, homeRef]);
  return (
    <Row>
      <div ref={homeRef} className="wrapper">
        <Col>
          <div className="static-txt">Hi! I'm Ashley & I...</div>
          <ul className="dynamic-txts">
            <li>
              <span>Dote on ReactJS</span>
            </li>
            <li>
              <span>Curate Native Apps</span>
            </li>
            <li>
              <span>Flex on TypeScript</span>
            </li>
            <li>
              <span>Tread APIs & Python</span>
            </li>
          </ul>
        </Col>
        <Col>
          <img className="mainPagepPic" src={frontPagePic} alt="mainPagepPic" />
        </Col>
      </div>
    </Row>
  );
};
