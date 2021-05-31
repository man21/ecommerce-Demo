
import {PRODUCT} from "./reducer"

import axios from "axios"
export const addProduct = ()=>{
    
    
}

export const fetchProducts = () => {
    return async (dispatch) => {
      try {
        const res = await axios({
          method: 'GET',
          url: 'https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US',
          headers: {
            "x-rapidapi-host": "asos2.p.rapidapi.com",
            "x-rapidapi-key":
              "1949ed3468msh573f2b5adccd778p14beffjsn12e69f0cac40",
          },
        })

        // const data = await res.json();
        // console.log(data.products," -----------&&&&&&&&&&&&&&&&&&&&&----------")

        dispatch({type: PRODUCT.ADD_PRODUCT, payload: res.data.products});
      } catch (err) {
        
      }
   }
  }

  export const setProducts = (products = null) => {
    if (products) {
      return {
        type: PRODUCT.ADD_PRODUCT,
        payload: products,
      };
    }
  
    return {
      type: PRODUCT.ADD_PRODUCT,
      payload: [],
    };
  };