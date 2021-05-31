import React, { useState, useEffect } from "react";

import NavBar from "../nav/NavBar";
import Product from "../Products/Product";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../thunk/Product/action";


function Home() {


  const dispatch = useDispatch()


  const products = useSelector(state =>state.products)


  // const [products, setProducts] = useState([]);

  useEffect(() => {
    // var products1 = [
    //   {
    //     id: 1,
    //     title: "Mobile",
    //     amount: 100,
    //     quantity: 1,
    //   },
    //   {
    //     id: 2,
    //     title: "TV",
    //     amount: 1000,
    //     quantity: 1,
    //   },
    //   {
    //     id: 3,
    //     title: "Laptop",
    //     amount: 10000,
    //     quantity: 1,
    //   },
    // ];

    // setProducts(products1);


   dispatch(fetchProducts())


  }, []);


  return (
    <div className="App">
      
      <NavBar
      products={products.data}
      // setProducts={setProducts}
      />


      <Product 
      products = {products.data}
      // setProducts = {setProducts}
      />
    </div>
  );
}

export default Home;
