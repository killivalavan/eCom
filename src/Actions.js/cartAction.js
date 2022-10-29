// Adding item to cart
export const addToCart = (data) => (dispatch) => {
  dispatch({
    type: "ADDTOCART",
    payload: {
      id: data.id,
      title: data.title,
      description: data.description,
      image: data.image,
    },
  });
};

// To remove item from cart
export const RemoveItem = (id) => (dispatch) => {
  dispatch({
    type: "REMOVE_ITEM_FROM_CART",
    payload: id,
  });
};
