import classes from "./MainHeader.module.css";
import Navigation from "../Navigation/Navigation";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>Workings hours</h1>
      <Navigation onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
