import React from "react";
import "../Styles/ProjectsStyles.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AppTab from "../features/AppTab";
import WorkExperienceTab from "../features/WorkExperienceTab";
import { useState } from "react";

export default function ProjectsPage() {
  const [activeTab, setActivetab] = useState<string | null>("");

  return (
    <div
      className="mainProjectsPage"
      style={{
        background:
          activeTab === "App"
            ? "linear-gradient(180deg,rgb(180, 4, 255) 13%  ,rgba(0,16,47,0.8550770650056898) 41%)"
            : activeTab === "Work Experience"
            ? "linear-gradient(180deg, rgb(180, 4, 255) 13%, rgba(47,0,0,0.8550770650056898) 41%)"
            : activeTab === "University Pojects"
            ? "linear-gradient(180deg, rgb(180, 4, 255) 13%, rgba(0,0,0,0.8550770650056898) 41%)"
            : "",
      }}
    >
      <h3 className="heading">Tad bit more about me :)</h3>
      <p className="h1 mb-5 headingtext">
        Having learned various development tools and frameworks. I constantly
        create and work on various projects that not only keep me at speed with
        latest releases but also explore plethora of domains that can expand and
        add to my knowledge base.
      </p>
      <Tabs
        defaultActiveKey=""
        id="fill-tab-example"
        className="mb-3"
        fill
        onSelect={(e) => setActivetab(e)}
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
          eventKey="University Pojects"
          className="tab__githubTab"
          title="University Pojects"
        >
          Coming Soon...
        </Tab>
      </Tabs>
    </div>
  );
}
