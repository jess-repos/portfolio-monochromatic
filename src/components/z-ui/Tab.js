import classes from "./Tab.module.css";

const Tab = ({ tabs, active, onChange }) => {
  const tabChangeHandler = (tab) => {
    onChange(tab);
  };
  return (
    <>
      <ul className={classes.tab}>
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => tabChangeHandler(tab)}
            className={`${active === tab && classes.active}`}
          >
            {tab}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tab;
