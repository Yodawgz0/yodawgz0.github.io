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
            Developed python scripts for automating various workflows.Worked
            with selenium, web scraping
          </li>
          <li>Performed execution of test cases and analysis of logs</li>
          <li>Worked on JIRA, Confluence</li>
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
            Used Class Components of ReactJS and performed state and ref update.
            Knowledge of componentDidUpdate,componentDidMOunt.
          </li>
          <li>
            Used drag n drop feature with redux for enhanced user experience.
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
            ReactJS with their design libraries like Ant Design, Fluent-UI,
            Markdown, Bootstrap. Using life-cycle hooks (useState,useEffect,
            useRef \& custom hooks)
          </li>
          <li>
            Usage of Redux, router, state management, props, and interact with
            API.
          </li>
          <li>
            Hoisting, Closure, HTML5, DOM BOM, Virtual DOM, Event Handling,
            Navigation Handling, Arrow Functions, JSON Parsing.
          </li>
          <li>
            Used React libraries, Sharepoint 365 , lifecycle hooks, and
            responsive props. Used debouncing and lazy load for performance
            enhancement.
          </li>
          <li>Cypress for unit testing and Using Axios for API Calls.</li>
        </ul>
      </div>
      <div className="WorkExpContainer__positionHeaderContainer mt-5">
        <h4>Technical Skills:</h4>
      </div>
      <p>
        <span className="subFontItalicsTitle"> Languages: </span>
        <span className="subFontItalicsSKills">
          JavaScript, Python, TypeScript, SASS, HTML5, LESS/CSS3
        </span>
        <br />
        <span className="subFontItalicsTitle">Frameworks: </span>
        <span className="subFontItalicsSKills">
          React, Sharepoint365, VueJS , Cypress
        </span>{" "}
        <br />
        <span className="subFontItalicsTitle">Developer Tools: </span>
        <span className="subFontItalicsSKills">
          Git, Linux, VS Code, PyCharm, React Dev, Chome/Edge/Moz
        </span>
        Dev, gulp <br />
        <span className="subFontItalicsTitle">Libraries: </span>
        <span className="subFontItalicsSKills">
          Pandas, React, Redux, Fluent-UI, Bootstrap, FontAwesome, JSON
        </span>
        <br />
      </p>
    </div>
  );
};

export default WorkExperienceTab;
