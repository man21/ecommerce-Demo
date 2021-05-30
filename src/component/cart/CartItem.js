/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

import "./CartItem.css";

function CartItem(props) {
  const { id, title, amount, quantity } = props.product;

  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src="https://picsum.photos/200/300"/>
      </div>

      <div className="right-block">
        <div><b>Title:</b> {title}</div>
        <div>
          <b>Rs.</b> {amount}
        </div>
        <div>
          <b>Qty:</b> {quantity}
        </div>
        <div className="cart-item-actions">
          <img
            className="action-icons"
            alt="increase"
            style={{height: '24px', width: '24px', padding: "5px 5px"}}
            src="https://image.flaticon.com/icons/png/512/992/992651.png"
            onClick={() => props.onIncreaseQuantity(id)}
          />
          <img
            className="action-icons"
            alt="decrease"
            style={{height: '24px', width: '24px', padding: "5px 5px"}}
            src="https://image.flaticon.com/icons/png/512/1828/1828906.png"
            onClick={() => props.onDecreaseQuantity(id)}
          />
          <img
            className="action-icons"
            alt="delete"
            style={{height: '24px', width: '24px', padding: "5px 5px"}}
            src="https://image.flaticon.com/icons/png/512/3096/3096687.png"
            onClick={() => props.onDeleteItem(id)}
          />
        </div>
      </div>
    </div>
  );
}
const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    alignItems: 'right',
    backgroundColor: " #ccc",
    margin: '5px auto',
    display: 'block',
  },
};

export default CartItem;
