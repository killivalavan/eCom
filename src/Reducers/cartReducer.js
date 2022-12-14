const cartReducer = (state = { cartItem: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Checking existing cart item
      const existItem = state.cartItem.filter(
        (item) => item.id === action.payload.id
      );

      // If existItem value is 0 add new product, else do nothing
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
