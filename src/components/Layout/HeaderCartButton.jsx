import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import { useContext, useEffect, useState } from "react";
import CartContext from '../../store/cart-context';

const HeaderCartButton = props => {
    const [btnHighlighted, setBtnHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;

    const noOfCartItmes = items.reduce((currentNumber, item) => currentNumber + item.amount, 0);

    const btnClasses = `${classes.button} ${btnHighlighted === true ? classes.bump : ''}`

    useEffect(() => {
        if(items.length === 0 ){
            return;
        }
        setBtnHighlighted(true);
        const timer = setTimeout(() => {
            setBtnHighlighted(false);
        },300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {noOfCartItmes}
        </span>
    </button>
}

export default HeaderCartButton;