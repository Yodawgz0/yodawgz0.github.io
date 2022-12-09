import "../Styles/homePageStyle.scss";
import { Row, Col } from "react-bootstrap";
// @ts-ignore
import frontPagePic from "../assests/frontPagePic.png";
import React from "react";

export const HomePage = () => {
  return (
    <Row>
      <div className="wrapper">
        <Col>
          <div className="static-txt">Hi! I'm Ashley & I...</div>
          <ul className="dynamic-txts">
            <li>
              <span>Dote on Python</span>
            </li>
            <li>
              <span>Curate APIs</span>
            </li>
            <li>
              <span>Flex on TypeScript</span>
            </li>
            <li>
              <span>Tread Front-End</span>
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
