import classes from "./Portfolio.module.css";

import Title from "../z-ui/Title";
import Project from "./Project";
import Tab from "../z-ui/Tab";

import { useState, useEffect } from "react";

const Portfolio = ({ projects }) => {
  const tabs = ["all", "development", "analytics"];

  const [activeTab, setActiveTab] = useState("all");
  const [selected, setSelected] = useState(projects);

  useEffect(() => {
    console.log(activeTab);
    if (activeTab === "all") {
      setSelected(projects);
    } else {
      setSelected(projects.filter((project) => project.type === activeTab));
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
