// src/components/Cart.js
import React from 'react';

function Cart() {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="/cart"><i style={{fontSize: "20px", marginRight: "20px"}} class="shopping cart icon"></i></a>
      </li>
    </ul>
  );
}

export default Cart;
