import { useReducer } from "react";
import CartContext from "./cart-context";

    const defaultCartState={
        items:[],
        totalAmount:0
    };
      
    // const cartReducer = (state,action)=>{
      // if(action.type === 'ADD'){
      //   const updatedTotalAmount=state.totalAmount+action.item.price*action.item.amount;
      
      //   const existingcartItemIndex=state.items.findIndex(item=>item.id===action.item.id)
      
      //  const existingCartItem = state.items[existingcartItemIndex];
      
      //   let updatedItems:
      
      
      //   if (existingCartItem) {
      //    const updatedItem={
      //       ...existingCartItem,
      //       amount:existingCartItem.amount + action.item.amount
      //     };
      //     updatedItems=[...state.items];
      //     updatedItems[existingcartItemIndex]=updatedItem;
      //   } else{
      //     updatedItems= state.items.concat(action.item);
      //   }
      
      
      
      //   return {
      //     items:updatedItems,
      //     totalAmount:updatedTotalAmount
      //   }
      // }
      
      // return  defaultCartState;
      // };
      
    const cartReducer = (state, action) => {
        if (action.type === 'ADD') {
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      
            const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
      
            const existingCartItem = state.items[existingCartItemIndex];
      
            let updatedItems;
      
            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } 
            else {
                updatedItems = state.items.concat(action.item);
            }
      
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };
        }
      
        return defaultCartState;
    };
      
    //const items=[];
    const CartProvider = (props) => {

        const [cartState , dispatchCartAction] =useReducer(cartReducer, defaultCartState);

        //to update the cart by state it render the function
        //const [items,updateItems]=useState([]);
        const addItemToCartHandler=(item)=>{
            dispatchCartAction({type:'ADD',item: item});
            // updateItems([...items,item]);
            //items.push(item)
            // console.log(cartContext);
        };

        const removeItemFromCartHandler=(id)=>{
            dispatchCartAction({type:'REMOVE',id:id});
        };

        const cartContext={
            items:cartState.items, //items before change
            totalAmount:cartState.totalAmount,
            addItem:addItemToCartHandler,
            removeItem:removeItemFromCartHandler,
        }

        return (
            <CartContext.Provider value={cartContext}>
                {props.children}
            </CartContext.Provider>
        );
    };

export default CartProvider;