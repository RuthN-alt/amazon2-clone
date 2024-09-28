// src/Checkout.js
import React from "react";
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from "./reducer";

function Checkout() {
  const [{ basket }] = useStateValue();
  
  return (
    <div className="checkout">
      <h2>Your Shopping Basket</h2>
      <p>Total: ${getBasketTotal(basket)}</p>
    </div>
  );
}

export default Checkout;
