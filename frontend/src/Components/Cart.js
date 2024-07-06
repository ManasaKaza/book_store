import React from 'react';

const Cart = ({ cart, setCart, handleChange }) => {
  const handleRemove = (_id) => {
    const arr = cart.filter((item) => item._id !== _id);
    setCart(arr);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      {
        cart?.map((item) => (
          <div key={item._id}>
            <div>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </div>
            <div>
              <button onClick={() => handleChange(item, +1)}> + </button>
              <span>{item.quantity}</span>
              <button onClick={() => handleChange(item, -1)}> - </button>
            </div>
            <div>
              <span>{item.price * item.quantity}</span>
              <button onClick={() => handleRemove(item._id)}>Remove</button>
            </div>
          </div>
        ))
      }
      <div>
        <h2>Total Price: {getTotalPrice().toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;
