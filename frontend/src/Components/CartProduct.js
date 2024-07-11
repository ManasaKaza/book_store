import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const CartProduct = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);

  const Increase = (_id) => {
    const Index = cart.findIndex((p) => p._id === _id);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "Increase", _id });
    }
  };
  const Decrease = (_id) => {
    const Index = cart.findIndex((p) => p._id === _id);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "Decrease", _id });
    }
  };
  return (
    <div className="d-flex border mb-3">
      <img src={product.image} className="w-25 h-25" alt="" />
      <div className="detail ms-4">
        <h4>{product.title}</h4>
        <span>by {product.authors}</span>
        <h5>${product.price}</h5>
        <div className="buttons">
          <button
            className="rounded-circle px-2"
            onClick={() => Decrease(product._id)}
          >
            <b>-</b>
          </button>
          <button className="rounded">{product.quantity}</button>
          <button
            className="rounded-circle px-2"
            onClick={() => Increase(product._id)}
          >
            <b>+</b>
          </button>
        </div>
        <button
          className="btn btn-sm btn-warning" style={{ margin: "15px" }}
          onClick={() => dispatch({ type: "Remove", _id: product._id })}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;