import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const exist = state.items.findIndex(item => item.id === action.item.id);

        const existingCartItem = state.items[exist];
        let updatedItem;
        let updatedItems;

        if (existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[exist] = updatedItem;
        } else {
            updatedItem = { ...action.item }
            updatedItems = state.items.concat(updatedItem);
        }
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    } else if (action.type === "REMOVE") {
        const exist = state.items.findIndex(item => item.id === action.id);

        const existingCartItem = state.items[exist];

        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;
        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
            updatedItems = [...state.items]
            updatedItems[exist] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState
}

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({
            type: 'ADD', item: item
        });
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({
            type: 'REMOVE', id: id
        });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;