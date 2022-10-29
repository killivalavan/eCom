import React from "react";
import "../../Styles/cart.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RemoveItem } from "../../Actions.js/cartAction";

// Font
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart);

  const removeHandler = (item) => {
    dispatch(RemoveItem(item));
  };

  return (
    <div className="container">
      <h1>Your Cart</h1>
      {cartItem === "" ? (
        <div className="NoItem">
          <div>Your shopping cart is empty.</div>
          <Link to="/">
            <button>Shop Now</button>
          </Link>
        </div>
      ) : (
        ""
      )}
      <div className="card-container">
        {cartItem.map((item) => (
          <div className="cart-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="content">
              <div>
                <h4>{item.title}</h4>
                <small>{item.description}</small>
              </div>
              <button onClick={() => removeHandler(item)}>
                <FontAwesomeIcon
                  className="icon"
                  icon={faTrashCan}
                ></FontAwesomeIcon>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
