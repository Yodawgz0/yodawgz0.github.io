import "././Styles/App.scss";
import { NavigationBar } from "./components/NavigationBar";
import { HomePage } from "./components/HomePage";
import { SkillsPage } from "./components/SkillsPage";
import ProjectsPage from "./components/ProjectsPage";
import React, { useState } from "react";
import { useRef } from "react";
const App = () => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const skillsRef = useRef();
  const resumeRef = useRef();
  const homeRef = useRef();

  return (
    <div className="App">
      <NavigationBar
        activeLinkSet={setActiveLink}
        activeLinkValue={activeLink}
      />
      <HomePage activeLinkValue={activeLink} homeRef={homeRef} />
      <SkillsPage
        skillsRef={skillsRef}
        activeLinkValue={activeLink}
        activeLinkSet={setActiveLink}
      />
      <ProjectsPage
        resumeRef={resumeRef}
        activeLinkValue={activeLink}
        activeLinkSet={setActiveLink}
      />
    </div>
  );
};

export default App;
