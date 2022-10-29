const cartReducer = (state = { cartItem: [] }, action) => {
  switch (action.type) {
    case "ADDTOCART":
      // Checking existing cart item
      const existItem = state.cartItem.filter(
        (item) => item.id === action.payload.id
      );

      if (existItem < 1) {
        return {
          cartItem: [...state.cartItem, action.payload],
        };
      } else {
        return { ...state };
      }

    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        cartItem: state.cartItem.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
