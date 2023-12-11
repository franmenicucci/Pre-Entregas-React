import React from 'react';
import { BiCart } from 'react-icons/bi';


const CartWidget = () => {
  const cartIconStyle = {
    fontSize: '3rem', 
    position: 'fixed', 
    top: '2px', 
    right: '15px', 
  };

  return (
    <div style={cartIconStyle}>
      <BiCart />
    </div>
  );
}

export default CartWidget;
