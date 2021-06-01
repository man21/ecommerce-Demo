/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

import "./ProductItem.css";

import { useSelector } from "react-redux";

import { Button } from "@material-ui/core";

function ProductItem(props) {
  const wishList = useSelector((state) => state.wishList);

  const cart = useSelector((state) => state.cart);

  const { id, name, imageUrl, price } = props.product;

  return (
    <div className="cart-item" style={{display: 'flex', flexGrow: 0,width: '48%',flexShrink: 1 }}>
      <div className="left-block">
        <img style={styles.image} src={`https://${imageUrl}`} />
      </div>

      <div className="right-block">
        <div style={{marginTop: "10px"}}>
          <b>Title:</b> {name}
        </div>
        <div>
          <b>Amount: </b>
          {price.current.text}
        </div>
        <div className="cart-item-actions">
         
          {/* <img
            className="action-icons"
            alt="addToCart"
            style={{
              height: "24px",
              padding: "5px 5px",
              backgroundColor: "#fff000",
            }}
            src="https://image.flaticon.com/icons/png/512/4379/4379578.png"
            onClick={() => props.addProductInCart(id)}
          /> */}

            <Button
              className="action-icons"
              style={{ margin: "15px 15px" }}
              variant="contained"
              color="primary"
              onClick={() => props.addProductInCart(id)}
              >
              Add to cart
            </Button>

          {wishList.data.filter((item) => item.id === id).length > 0 ? (
            <Button
              className="action-icons"
              style={{ margin: "15px 15px" }}
              variant="contained"
              color="secondary"
              onClick={() => props.whishList(id)}
            >
              {" "}
              Remove from WishList
            </Button>
          ) : (
            <Button
              className="action-icons"
              style={{ margin: "15px 15px" }}
              variant="contained"
              color="primary"
              onClick={() => props.whishList(id)}
            >
              Add To WishList
            </Button>
          )}
          {/* <img
            className="action-icons"
            alt="favourite"
            style={{height: '24px', padding: "5px 5px", color: "#fff000" }}
            src= {wishList.data.filter(item => item.id === id).length>0? "https://image.flaticon.com/icons/png/512/4379/4379680.png" : "https://image.flaticon.com/icons/png/512/4379/4379561.png"}
            onClick={() => props.whishList(id)}
          />  */}
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
    alignItems: "left",
    backgroundColor: " #ccc",
    margin: "5px auto",
    display: "block",
  },
};

export default ProductItem;
