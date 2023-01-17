import Button from "../z-ui/Button";
import classes from "./Project.module.css";

const Project = ({ project }) => {
  return (
    <div className={classes.project}>
      <div className={classes.overlay}>
        <span>{project.title}</span>

        <p>{project.description}</p>
        <div className={classes.cta}>
          <Button link={project.liveUrl} newTab>
            Live
          </Button>
          <Button link={project.githubUrl} variant={"secondary"} newTab>
            Code
          </Button>
        </div>
      </div>
      <div className={classes.filter}></div>
      <img src={project.imageUrl} />
    </div>
  );
};

export default Project;
