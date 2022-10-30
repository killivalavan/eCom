import React, { useState } from "react";
import "../Styles/product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../Actions.js/cartAction";

const Product = ({ product }) => {
  const [disable, setDisable] = useState(true);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product));
    setDisable(false);
  };

  return (
    <div>
      {product && (
        <div className="card">
          <div className="image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="content">
            <div className="top">
              <h4>{product.title}</h4>
              <p>{product.description}</p>
            </div>
            <div className="bottom">
              <div className="price">₹ {product.price}</div>
              <a
                className={`icon ${disable ? "" : "active"}`}
                onClick={addToCartHandler}
              >
                <FontAwesomeIcon className="" size="1x" icon={faCartPlus} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
