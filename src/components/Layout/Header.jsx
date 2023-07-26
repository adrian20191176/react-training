import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealFigure from "../../assets/meals.jpg"
import classes from './Header.module.css'

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Adrian Meals</h1>
            <HeaderCartButton onClick={props.onCartClicked}/>
        </header>
        <div className={classes["main-image"]}>
            <img src={mealFigure} alt='A table with foods'/>

        </div>

    </Fragment>
};

export default Header;