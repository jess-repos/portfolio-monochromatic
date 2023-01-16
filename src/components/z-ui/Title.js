import classes from './Title.module.css';

const Title = ({children}) => {
  return (
    <p className={classes.title}>{children}</p>
  )
}

export default Title