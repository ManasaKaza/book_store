import React, { useState, useContext } from 'react';
import { CartContext } from "../Features/ContextProvider";
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ item }) => {
  const { cart, dispatch } = useContext(CartContext);
  const [message, setMessage] = useState("");

  const handleAddToCart = () => {
    const isItemInCart = cart.some(cartItem => cartItem._id === item._id);
    if (isItemInCart) {
      setMessage("This item is already in your cart.");
    } else {
      dispatch({ type: "Add", product: item });
      setMessage("Item added to cart.");
    }

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <div className="col">
      <div className="card h-100">
        <img src={item.image} style={{ height: "220px" }} alt={item.title} />
        <div className="card-body">
          <h4 className="card-title">{item.title}</h4>
          <span>by {item.authors}</span>
          <h5>${item.price}</h5>
          <button
            className="btn btn-primary"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
          {message && <p style={{color:"red"}}>{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default Card;
