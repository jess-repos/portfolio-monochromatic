import classes from "./Portfolio.module.css";

import Title from "../z-ui/Title";
import Project from "./Project";
import Tab from "../z-ui/Tab";

import { useState, useEffect } from "react";

const Portfolio = ({ projects, projectsTabs }) => {
  const tabs = ["all", ...projectsTabs];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [selected, setSelected] = useState(projects);

  useEffect(() => {
    if (activeTab === "all") {
      setSelected(projects);
    } else {
      setSelected(
        projects.filter((project) => project.type.toLowerCase() === activeTab)
      );
    }
  }, [activeTab]);

  return (
    <section className={classes.portfolio} id={"portfolio"}>
      <header>
        <Title>Portfolio</Title>
        <Tab tabs={tabs} active={activeTab} onChange={setActiveTab} />
      </header>

      <div className={classes.projects}>
        {selected.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
