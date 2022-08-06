import "../Styles/homePageStyle.scss";
import { Row, Col } from "react-bootstrap";

export const HomePage = () => {
  return (
    <Row>
      <Col>
        <div className="wrapper">
          <div className="static-txt">Hi! I'm Ashley, I</div>
          <ul className="dynamic-txts">
            <li>
              <span>Love Python</span>
            </li>
            <li>
              <span>develope Website</span>
            </li>
            <li>
              <span>Freelancer</span>
            </li>
          </ul>
        </div>
      </Col>
      <img src="../assests/frontPagePic.png" alt="mainPageLogo" />
    </Row>
  );
};
