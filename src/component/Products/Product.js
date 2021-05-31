/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import "./ProductItem.css";
import ProductItem from "./ProductItem";

import { useSelector, useDispatch } from "react-redux";

function Cart(props) {
  const dispatch = useDispatch();

  const wishList = useSelector((state) => state.wishList);

  const cart = useSelector((state) => state.cart);

  var products = useSelector((state) => state.products);

  const handleIncreaseQuantity = (id) => {
    const index = products.findIndex((x) => x.id === id);
    var dummy = [...products];
    dummy[index] = {
      ...dummy[index],
      quantity: dummy[index].quantity + 1,
      amount: dummy[index].amount + 10,
    };
    // setProducts(dummy);
  };

  const handleDecreaseQuantity = (id) => {
    const index = products.findIndex((x) => x.id === id);
    var dummy = [...products];
    if (dummy[index].quantity === 1) return;
    else {
      dummy[index] = {
        ...dummy[index],
        quantity: dummy[index].quantity - 1,
        amount: dummy[index].amount - 10,
      };
      // setProducts(dummy);
    }
  };

  const handleDeleteItem = (id) => {
    const newArr = products.filter((x) => x.id !== id);
    // setProducts(newArr);
  };

  const handleAddProductInCart = (id) => {
    const newDATA = products.data.filter((x) => x.id === id);

    const checkProductInCart = cart.data.filter((x) => x.id === id);
    if (checkProductInCart.length > 0) {
      dispatch({
        type: "UPDATE_ONE_CART",
        payload: {
          ...checkProductInCart[0],
          quantity: checkProductInCart[0].quantity + 1,
        },
      });
    } else {
      // console.log({...newDATA[0], quantity: 1}, "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ")
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...newDATA[0], quantity: 1 },
      });
    }
  };

  const handleWishList = (id) => {
    var dataAvailble = wishList.data.findIndex((item) => item.id === id);

    if (dataAvailble === -1) {
      const newDATA = products.data.filter((x) => x.id === id);
      dispatch({ type: "ADD_WISHLIST", payload: newDATA[0] });
    } else {
      dispatch({ type: "DELETE_WISHLIST", payload: { id: id } });
    }
  };
  return (
    <div>
      {products.data.length !== 0 ? (
        products.data.map((product) => {
          return (
            <ProductItem
              product={product}
              key={product.id}
              addProductInCart={handleAddProductInCart}
              whishList={handleWishList}
            />
          );
        })
      ) : (
        <h1 style={{ textAlign: "center", margin: "100px, auto" }}>
          No Result Found
        </h1>
      )}
    </div>
  );
}

export default Cart;
