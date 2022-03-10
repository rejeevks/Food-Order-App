import { Fragment } from "react";
import mealsImage from "../../assets/img.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCartButton";
const Header = (props: any) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCardButton/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="image" />
      </div>
    </Fragment>
  );
};

export default Header;
