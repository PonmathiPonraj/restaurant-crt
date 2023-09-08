// import classes from './HeaderCartButton.module.css';
import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const CartCtx = useContext(CartContext);
    const numberOfCartItems = CartCtx.items.reduce((currentNum, item) => {
        return currentNum + Number(item.amount);
    }, 0);
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;