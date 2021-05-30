/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import "./CartItem.css";
import CartItem from "./CartItem";

function Cart(props) {
  const { products , setProducts} = props;

  const handleIncreaseQuantity = (id) => {
    const index = products.findIndex((x) => x.id === id);
    var dummy = [...products];
    dummy[index] = {
      ...dummy[index],
      quantity: dummy[index].quantity + 1,
      amount: dummy[index].amount + 10,
    };
    setProducts(dummy);
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
      setProducts(dummy);
    }
  };

  const handleDeleteItem = (id) => {
    const newArr = products.filter((x) => x.id !== id);
    setProducts(newArr);
  };

  return (
    <div>
      {products.length !== 0 ? (
        products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={handleIncreaseQuantity}
              onDecreaseQuantity={handleDecreaseQuantity}
              onDeleteItem={handleDeleteItem}
            />
          );
        })
      ) : (
        <h1 style={{textAlign: 'center', margin: "100px, auto"}}>No Result Found</h1>
      )}
    </div>
  );
}

export default Cart;
