import classes from "./Project.module.css";

const Project = ({ project }) => {
  return (
    <div className={classes.project}>
      <div className={classes.overlay}>
        <span>{project.title}</span>

        <p>{project.description}</p>
      </div>
      <img src={project.imageUrl} />
    </div>
  );
};

export default Project;
