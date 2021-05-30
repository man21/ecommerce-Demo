import React, { useState, useEffect } from "react";

import NavBar from "../nav/NavBar";
import Cart from "../cart/Cart";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    var products1 = [
      {
        id: 1,
        title: "Mobile",
        amount: 100,
        quantity: 1,
      },
      {
        id: 2,
        title: "TV",
        amount: 1000,
        quantity: 1,
      },
      {
        id: 3,
        title: "Laptop",
        amount: 10000,
        quantity: 1,
      },
    ];

    setProducts(products1);

  }, []);


  return (
    <div className="App">
      
      <NavBar
      products={products}
      setProducts={setProducts}/>


      <Cart 
      products = {products}
      setProducts = {setProducts}
      />
    </div>
  );
}

export default Home;
