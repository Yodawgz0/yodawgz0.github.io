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
            Responsibility full stack web applications using React, Node.js,
            Express.js, and MongoDB, increasing UI performance by 40% and user
            satisfaction by 25%.
          </li>
          <li>
            Enhanced code quality and security by migrating to TypeScript and
            integrating JWT authentication; improved API performance by
            optimizing NoSQL queries, reducing response time by 80%.
          </li>
          <li>
            Applied test-driven development (TDD) using Cypress and Jest,
            ensuring code reliability and coverage. Automated additional 10-15%
            test cases, saving time and resources
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
            Created front-end of a test web application, enabling users to test
            web components, APIs, performance, and core web vitals. Reduced
            manual testing workload by 50%. Server as of nodejs.
          </li>
          <li>
            • Utilized JavaScript, ReactJS with hooks, JSON, and Webpack,
            integrating Redux and Thunk for state management; Gulp for task
            execution, decreasing deployment time by 20%
          </li>
          <li>
            Employed Webpack, ESLint, and Gulp for bundling and linting
            workflows, reducing client load by 30%. Leveraged libraries such as
            React Bootstrap, Material UI, and Chart.js for UI design and data
            visualization.
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
          GitHub, Linux, VS-Code, PyCharm, React Dev, Chome/Edge/Moz Dev,
          PostMan, Compass
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
