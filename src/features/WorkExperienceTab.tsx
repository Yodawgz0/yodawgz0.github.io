import "../Styles/WorkExpStyles.scss";
import React from "react";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// @ts-ignore
import AshleyResume from "../assests/AshleyResume.pdf";

const WorkExperienceTab = () => {
  return (
    <div className="WorkExpContainer">
      <a
        className="WorkExpContainer__GithubLink"
        href={AshleyResume}
        download={true}
      >
        <FontAwesomeIcon icon={faLink} />
        My Resume
      </a>
      {/* Sr Software Dev */}
      <div className="WorkExpContainer__positionHeaderContainer mt-5">
        <h2>Senior Software Developer</h2>
        <span className="subFontItalics">June 2020 – June 2022</span>
      </div>
      <div className="WorkExpContainer__positionHeaderContainer">
        <p>Wipro Technologies</p>
        <span className="subFontItalics">Pune, India</span>
      </div>
      <div>
        <ul>
          <li>
            Implemented React, Node.js, Express.js, and MongoDB to build
            high-performing full-stack web applications, driving a significant
            40\% enhancement in UI performance and elevating user satisfaction
            by 25\%
          </li>
          <li>
            Led a seamless transition from JavaScript to TypeScript, bolstering
            code quality and security; integrated JWT authentication for
            enhanced user data protection, leading to an impressive 80\%
            decrease in API response time
          </li>
          <li>
            Optimized code reliability and coverage through the implementation
            of test-driven development (TDD) methodology using Cypress and Jest
            frameworks. Increased automated test cases by 10-15\%
          </li>
          <li>
            Orchestrated the automation of 75\% of workflows through Python
            scripting
          </li>
        </ul>
      </div>

      {/* Python Dev */}
      <div className="WorkExpContainer__positionHeaderContainer mt-5">
        <h2>Software Developer</h2>
        <span className="subFontItalics">June 2019 – June 2020</span>
      </div>
      <div className="WorkExpContainer__positionHeaderContainer">
        <p>Wipro Technologies</p>
        <span className="subFontItalics">Pune, India</span>
      </div>
      <div>
        <ul>
          <li>
            Spearheaded the development and execution of a groundbreaking test
            web application, leveraging Node.js, to enable comprehensive
            evaluations of web components, APIs, performance, and core web
            vitals. Achieved a remarkable 50\% reduction in manual testing
            efforts
          </li>
          <li>
            Revamped website user interface using JavaScript, ReactJS with
            hooks, and JSON; integrated Redux and Thunk for efficient state
            management, resulting in a 20\% decrease in deployment time
          </li>
          <li>
            Implemented React Bootstrap, Ant-D, and Material UI libraries to
            craft visually captivating data visualizations, resulting in a 25\%
            increase in user engagement and a 15\% decrease in bounce rate.
          </li>
          <li>
            Streamlined collaboration across four cross-functional teams by
            implementing JIRA, Confluence, GitLab, and Bitbucket; achieved a
            remarkable 40\% reduction in project delivery time and boosted
            stakeholder satisfaction by 20\%
          </li>
        </ul>
      </div>
      <div className="WorkExpContainer__positionHeaderContainer">
        <h2>Internship</h2>
        <span className="subFontItalics">Jan 2019 – March 2019</span>
      </div>
      <div className="WorkExpContainer__positionHeaderContainer">
        <p>Wipro Technologies</p>
        <span className="subFontItalics">Pune, India</span>
      </div>
      <div>
        <ul>
          <li>
            Automated 75% of workflows using Python scripting, increasing
            efficiency and productivity
          </li>
          <li>
            Managed 2 projects, using JIRA, Confluence, GitLab, and Bitbucket,
            collaborating with team members and stakeholders.
          </li>
          <li>
            Portal for 120+ employees using VanillaJS, facilitating daily
            tracking and assignments.
          </li>
        </ul>
      </div>
      <div className="WorkExpContainer__positionHeaderContainer mt-5">
        <h4>Technical Skills:</h4>
      </div>
      <p>
        <span className="subFontItalicsTitle"> Languages: </span>
        <span className="subFontItalicsSKills">
          JavaScript, Python, TypeScript, SASS, HTML5, LESS/CSS3, NodeJS, NoSQL
        </span>
        <br />
        <span className="subFontItalicsTitle">Frameworks: </span>
        <span className="subFontItalicsSKills">
          React, React-Native Cypress, Bootstrap, Tailwind CSS, ExpressJS,
          Axios, NextJS
        </span>{" "}
        <br />
        <span className="subFontItalicsTitle">Developer Tools: </span>
        <span className="subFontItalicsSKills">
          GitHub, Figma, Chome/Edge/Moz Dev, gulp, ESLint, Android Studio,
          PostMan, Redis
        </span>
        , gulp, ESLint, webpack, Android Studio <br />
        <span className="subFontItalicsTitle">Libraries: </span>
        <span className="subFontItalicsSKills">
          Redux-Thunk, React, Redux, FontAwesome, JSON, Lodash, date-fns,
          Firebase, Firestore, bson, Math
        </span>
        <br />
      </p>
    </div>
  );
};

export default WorkExperienceTab;
