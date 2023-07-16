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
            Full-stack web developer with proficiency in TypeScript, JavaScript,
            and React, as well as securing JWT authentication for web
            applications.
          </li>
          <li>
            Experienced in using Node.js and Express.js, Skilled in designing
            and consuming RESTful APIs using Express.js
          </li>
          <li>
            Used MongoDB, ExpressJS, and NodeJS for backend development, and
            CI/CD using Docker for deployment.
          </li>
          <li>
            Built user interfaces using React JS and ant design, and enhanced
            performance using Redux Thunk, debouncing, and lazy load.
          </li>
          <li>
            Implementing features such as routing, authentication,
            authorization, data fetching, and error handling. Practiced
            test-driven development (TDD) using Cypress and Jest, ensuring code
            quality and reliability through comprehensive testing
          </li>
          <li>
            Used Next.js to create fast and scalable web applications,
            leveraging both server-side rendering (SSR) and client-side
            rendering (CSR) techniques. Optimized web performance and user
            experience by measuring and improving Core Web Vitals, such as
            loading speed, interactivity, and visual stability.
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
            Developed test web applications and their components using ReactJS
            and various libraries such as ant design, bootstrap, and mui.
          </li>
          <li>
            Proficient in using JavaScript, JSON, and TypeScript along with
            modern tooling and development workflows, including bundlers like
            Webpack, task runners like Gulp, and testing frameworks like Jest.
          </li>
          <li>
            Experienced in using class components and ES6 features in ReactJS,
            such as arrow functions, destructuring, spread operator, and
            template literals.
          </li>
          <li>
            Skilled in creating and using custom hooks in ReactJS, such as
            useReducer, useEffect, and useState, to manage state and side
            effects in functional components.
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
            Developed Python scripts for automating various workflows.Worked on
            automation, JIRA, Confluence, Bit-Bucket
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
