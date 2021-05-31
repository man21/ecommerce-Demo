/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

import "./ProductItem.css";

import { useSelector } from "react-redux";


function ProductItem(props) {

  const wishList = useSelector(state => state.wishList)
  const { id, name,imageUrl, price,} = props.product;

  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={`https://${imageUrl}`}/>
      </div>

      <div className="right-block">
        <div><b>Title:</b> {name}</div>
        <div>
          <b>Amount: </b>{price.current.text}
        </div>
        {/* <div>
          <b>Qty:</b> {quantity}
        </div> */}
        <div className="cart-item-actions">
          {/* <img
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
          /> */}
          <img
            className="action-icons"
            alt="addToCart"
            style={{height: '24px', padding: "5px 5px",backgroundColor: "#fff000" }}
            src="https://image.flaticon.com/icons/png/512/4379/4379578.png"
            onClick={() => props.addProductInCart(id)}
          /> 

            <img
            className="action-icons"
            alt="favourite"
            style={{height: '24px', padding: "5px 5px", color: "#fff000" }}
            src= {wishList.data.filter(item => item.id === id).length>0? "https://image.flaticon.com/icons/png/512/4379/4379680.png" : "https://image.flaticon.com/icons/png/512/4379/4379561.png"}
            onClick={() => props.whishList(id)}
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

export default ProductItem;
