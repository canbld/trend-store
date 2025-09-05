import { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      let updatedItems = [...state.items];
      if (existingCartItemIndex !== -1) {
        updatedItems[existingCartItemIndex] = {
          ...state.items[existingCartItemIndex],
          amount:
            state.items[existingCartItemIndex].amount + action.item.amount,
        };
      } else {
        updatedItems = [...state.items, action.item];
      }

      return {
        items: updatedItems,
        totalAmount: state.totalAmount + action.item.price * action.item.amount,
      };
    }
    case "remove": {
      const filteredItems = state.items.filter((item) => item.id !== action.id);
      const itemToRemove = state.items.find((item) => item.id === action.id);
      return {
        items: filteredItems,
        totalAmount:
          state.totalAmount - itemToRemove.price * itemToRemove.amount,
      };
    }
    case "clear":
      return initalState;
    default:
      return state;
  }
};

const initalState = {
  items: [],
  totalAmount: 0,
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initalState);

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (item) => {
      dispatchCartAction({ type: "add", item });
    },
    removeItem: (id) => {
      dispatchCartAction({ type: "remove", id });
    },
    clearItems: () => {
      dispatchCartAction({ type: "clear" });
    },
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
export default CartProvider;
