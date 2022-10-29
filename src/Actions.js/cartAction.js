import { products } from "../utils/card-data";

export const addToCart = (data) => (dispatch) => {
  const cartItem = [];

  cartItem.push(data);

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

export const RemoveItem = (id) => (dispatch) => {
  // const DeleteItem = .filter((item) => item.id === id);

  dispatch({
    type: "REMOVE_ITEM_FROM_CART",
    payload: id,
  });
};

// export const disableIcon = (id) => (dispatch) => {
//   dispatch({
//     type: "DISABLEICON",
//     payload: false,
//   });
// };
