import "../Styles/WorkExpStyles.scss";
import React from "react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
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
        <FontAwesomeIcon icon={faDownload} />
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
            high-performing full-stack web applications, driving an enhancement
            in UI performance
          </li>
          <li>
            Led a seamless transition from JavaScript to TypeScript, bolstering
            code quality and security; integrated JWT authentication for
            enhanced user data protection
          </li>
          <li>
            Optimized code reliability and coverage through the implementation
            of test-driven development (TDD)methodology using Cypress and Jest
            frameworks
          </li>
          <li>
            Orchestrated the automation of 75\% of workflows through Python
            scripting
          </li>
        </ul>
      </div>
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
            Spearheaded the development and execution of test web application,
            leveraging Node.js, to enable comprehensive evaluations of web
            components, APIs, performance, and core web vitals.
          </li>
          <li>
            Revamped website user interface using JavaScript, ReactJS with
            hooks, and JSON; integrated Redux and Thunk for efficient state
            management, resulting in a decrease in deployment time
          </li>
          <li>
            Implemented multithreading and multiprocessing on the server side to
            enhance performance. Introduced asynchronous functions for handling
            multiple streams, optimizing concurrency in the system.
          </li>
          <li>
            Streamlined collaboration across cross-functional teams by
            implementing JIRA, Confluence, GitLab, and Bitbucket achieved a
            reduction in project delivery time and boosted stakeholder
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
        <h4>TLanguages:</h4>
      </div>
      <p>
        <span className="subFontItalicsTitle"> Languages: </span>
        <span className="subFontItalicsSKills">
          Go, TypeScript, JavaScript, Python, SASS, HTML5, LESS/CSS3, NoSQL,
          NodeJS, CQL
        </span>
        <br />
        <span className="subFontItalicsTitle">Frameworks: </span>
        <span className="subFontItalicsSKills">
          React, NextJS, SOAP, REST, Ant-Design, React-Native, VueJS, Cypress,
          Bootstrap, Tailwind CSS, ExpressJS, WebPack, Docker
        </span>{" "}
        <br />
        <span className="subFontItalicsTitle">Developer Tools: </span>
        <span className="subFontItalicsSKills">
          GitHub, Figma, Chome/Edge/Moz Dev, gulp, ESLint, Android Studio,
          PostMan
        </span>
        , gulp, ESLint, webpack <br />
        <span className="subFontItalicsTitle">Libraries: </span>
        <span className="subFontItalicsSKills">
          Redux-Thunk, React, Redux, Fluent-UI, FontAwesome, JSON, Lodash,
          date-fns, C\# (Unity)
        </span>
        <span className="subFontItalicsTitle">Databases: </span>
        <span className="subFontItalicsSKills">
          Redis, MongoDB, Cassandra, Sqlite3, Firebase, Firestore
        </span>
        <br />
      </p>
    </div>
  );
};

export default WorkExperienceTab;
