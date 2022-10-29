import React from "react";
import "../Styles/header.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHouse,
  faCircleInfo,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";

const Header = () => {
  const { cartItem } = useSelector((state) => state.cart);

  return (
    <div className="nav">
      <div className="nav-items">
        <div className="nav-left">
          <div className="logo">
            <Link to="/">
              <h1>
                <img src="" alt="" />
                <FontAwesomeIcon className="icon" size="xs" icon={faShirt} />
                eCom
              </h1>
            </Link>
          </div>
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div>
          <ul>
            <li>
              <Link className="link" to="/">
                <FontAwesomeIcon className="icon" icon={faHouse} />
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="">
                <FontAwesomeIcon className="icon" icon={faCircleInfo} />
                About
              </Link>
            </li>
            <li className="nav-right">
              <Link className="link" to="/Cart">
                <img className="cart" src="" alt="" />
                <span className="badge">
                  <FontAwesomeIcon className="icon" icon={faCartShopping} />
                  Cart
                  {cartItem.length !== 0 && (
                    <span className="count">{cartItem.length}</span>
                  )}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
