import { useContext, useState } from "react";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const [cartQty, setCartQty] = useState("1");
    const inputChangeHandler = (event) => {
        setCartQty(event.target.value);
    };
    const CartCtx = useContext(CartContext);
    const addToCart = (event) => {
        event.preventDefault();
        CartCtx.addItem({
            ...props.item,
            amount: cartQty,
        });
    };

    return (
        <form className={classes.form}>
            <div>
                <Input
                    label="Amount"
                    input={{
                        id: "amount_" + props.id,
                        type: "number",
                        min: "1",
                        max: "5",
                        step: "1",
                        defaultValue: "1",
                    }}
                    onChange={inputChangeHandler}
                />
                <button onClick={addToCart}>+ Add</button>
            </div>
        </form>
    );
};

export default MealItemForm;