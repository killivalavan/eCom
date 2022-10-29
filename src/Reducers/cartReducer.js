const cartReducer = (state = { cartItem: [] }, action) => {
  switch (action.type) {
    case "ADDTOCART":
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload],
      };
    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        cartItem: state.cartItem.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    // case "DISABLEICON":
    //   return {
    //     ...state,
    //     icon: action.payload,
    //   };

    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
