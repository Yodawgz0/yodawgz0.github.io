import "../Styles/homePageStyle.scss";
import { Row, Col } from "react-bootstrap";
import frontPagePic from "../assests/frontPagePic.png";
export const HomePage = () => {
  return (
    <Row>
      <div className="wrapper">
        <Col>
          <div className="static-txt">Hi! I'm Ashley & I...</div>
          <ul className="dynamic-txts">
            <li>
              <span>Code Python</span>
            </li>
            <li>
              <span>Curate APIs</span>
            </li>
            <li>
              <span>Craft Protocols</span>
            </li>
            <li>
              <span>Develop Front-End</span>
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
