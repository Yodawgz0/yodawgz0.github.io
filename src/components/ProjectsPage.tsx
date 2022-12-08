import React from "react";
import "../Styles/ProjectsStyles.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AppTab from "../features/AppTab";

export default function ProjectsPage() {
  return (
    <div className="mainProjectsPage">
      <h3 className="heading">Projects</h3>
      <p className="h1 mb-5 headingtext">
        Having learned various development tools and frameworks. I constantly
        create and work on various projects that not only keep me at speed with
        latest releases but also explore plethora of domains that can expand and
        add to my knowledge base.
      </p>
      <Tabs defaultActiveKey="App" id="fill-tab-example" className="mb-3" fill>
        <Tab eventKey="App" className="tab__appTab" title="App Dev">
          <AppTab />
        </Tab>
        <Tab eventKey="" className="tab__pythonTab" title="WebApp Dev">
          9
        </Tab>
        <Tab
          eventKey="University Pojects"
          className="tab__githubTab"
          title="GitHub Projects"
        >
          Coming Soon...
        </Tab>
      </Tabs>
    </div>
  );
}
