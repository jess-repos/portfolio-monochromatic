import Button from "../z-ui/Button";
import classes from "./Home.module.css";

const Home = () => {
  const clicker = () => console.log("Clicked");
  return (
    <section className={classes.home}>
      <div className={classes.intro}>
        <div className={classes.icon}></div>
        <h4>Hi, My name is Mark!</h4>
        <p>
          A web developer and data analyst, with a passion for creating visually
          appealing, responsive and functional websites, and proficiency in data
          analysis and visualization to assist businesses in making data-driven
          decisions.
        </p>
        <div className={classes.cta}>
          <Button link={"/#portfolio"}>Portfolio</Button>
          <Button link={"/#contact"} variant={"secondary"}>
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
