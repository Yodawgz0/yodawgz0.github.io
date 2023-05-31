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
            Using TypeScript, JavaScript and React to develop websites \&
            workflows
          </li>
          <li>
            Expertise in using various Node.js and Express.js tools such as NPM,
            Yarn, Express Generator, and Nodemon for efficient development and
            deployment processes.
          </li>
          <li>
            Strong understanding of RESTful API design principles and experience
            in building and consuming APIs using Express.js. using Socket.io or
            WebSockets to facilitate communication between clients and servers.
          </li>
          <li>
            Used MongoDB, ExpressJS, NodeJS for backend. Knowledge of BSON,
            JSON. Using CI/CD
          </li>
          <li>
            Used React libraries, Sharepoint 365, lifecycle hooks, and Redux
            Thunk. Used debouncing and lazy load for performance enhancement.
          </li>
          <li>
            Experience with test-driven development (TDD) using tools like
            Cypress, and Jest, ensuring code quality and reliability through
            comprehensive testing.
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
            Worked with ReactJS to develop test web applications and its
            components.
          </li>
          <li>
            Proven expertise in server and API development, with a strong focus
            on implementing efficient CI/CD pipelines to ensure seamless
            deployment and delivery of high-quality software solutions.
          </li>
          <li>
            Proficient in using TypeScript alongside modern tooling and
            development workflows, including bundlers like Webpack, task runners
            like Gulp, and testing frameworks like Jest.
          </li>
          <li>
            Development using Advanced Python in application & systems.
            Libraries like Collections, OOPS, Xlrd, Numpy, etc.
          </li>
          <li>
            Multiprocessing & Multithreading , logging & development of
            processing messages.
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
          <li>Developed python scripts for automating various workflows.</li>
          <li>Worked on automation, JIRA, Confluence, Bit-Bucket</li>
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
          React, React-Native, Sharepoint365, VueJS , Cypress, Bootstrap,
          Tailwind CSS, ExpressJS, Axios
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
          Redux-Thunk, React, Redux, Fluent-UI, FontAwesome, JSON, Xlrd, OS,
          Collections, Lodash, date-fns, Firebase, Firestore
        </span>
        <br />
      </p>
    </div>
  );
};

export default WorkExperienceTab;
