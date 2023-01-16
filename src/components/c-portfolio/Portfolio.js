import classes from "./Portfolio.module.css";

import Title from "../z-ui/Title";
import Project from "./Project";
import Tab from "../z-ui/Tab";

import { useState } from "react";

const Portfolio = ({ projects }) => {
  const tabs = ["Development", "Analytics", "Photography"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className={classes.portfolio} id={"portfolio"}>
      <header>
        <Title>Portfolio</Title>
        <Tab tabs={tabs} active={activeTab} onChange={setActiveTab} />
      </header>
      <h1>{activeTab}</h1>

      <div className={classes.projects}>
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
