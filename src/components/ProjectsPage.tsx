import React, { useEffect, useState } from "react";
import "../Styles/ProjectsStyles.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AppTab from "../features/AppTab";
import WorkExperienceTab from "../features/WorkExperienceTab";
import { Props } from "./IProps";

export default function ProjectsPage({ resumeRef, activeLinkValue }: Props) {
  const [activeTab, setActivetab] = useState<string | null>("");
  useEffect(() => {
    if (activeLinkValue === "Resume") {
      setActivetab("Work Experience");
      resumeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activeLinkValue, resumeRef]);

  return (
    <div
      className="mainProjectsPage"
      style={{
        background:
          activeTab === "App"
            ? "linear-gradient(180deg,rgb(180, 4, 255) 13%  ,rgba(0,16,47,0.8550770650056898) 41%)"
            : activeTab === "Work Experience"
            ? "linear-gradient(180deg, rgb(180, 4, 255) 13%, rgba(47,0,0,0.8550770650056898) 41%)"
            : activeTab === "University Projects"
            ? "linear-gradient(180deg, rgb(180, 4, 255) 13%, rgba(0,0,0,0.8550770650056898) 41%)"
            : "",
      }}
    >
      <h3 className="heading ">Tad bit more about me :)</h3>
      <p className="h1 mb-5 headingtext">
        I am currently enrolled in{" "}
        <span style={{ color: "#890707", fontWeight: "800" }}>
          Indiana University, Bloomington
        </span>
        <br />
        Pursuing Masters in{" "}
        <span style={{ color: "#890707", fontWeight: "800" }}>
          Intelligent Systems Engineering
        </span>
        , Spring 2023
        <br />
        <br />
        Specializing in the Cyber-Physical Systems and moreover application
        development for the burgeoning field of cloud & internet of things.
      </p>
      <div ref={resumeRef}>
        <Tabs
          defaultActiveKey={""}
          id="fill-tab-example"
          className="mb-3"
          fill
          onSelect={(e) => setActivetab(e)}
          activeKey={activeTab ? activeTab : "  "}
        >
          <Tab eventKey="App" className="tab__appTab" title="App Dev">
            <AppTab />
          </Tab>
          <Tab
            eventKey="Work Experience"
            className="tab__pythonTab"
            title="Work Experience"
          >
            <WorkExperienceTab />
          </Tab>
          <Tab
            eventKey="University Projects"
            className="tab__githubTab"
            title="University Projects"
          >
            Coming Soon...
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
