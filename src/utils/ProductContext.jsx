import axios from '../utils/Axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductContextData = createContext(null);
function ProductContext(props) {

    useEffect(()=>{
        getProducts();
    },[]);

    const [products , setProducts] = useState([]);

    const getProducts = async ()=>{
        try{
            const {data} = await axios('/products');
            setProducts(data);
        }
        catch(error){
            console.error(error);
        }
    }
  return (
    <ProductContextData.Provider value={[products, setProducts]}>{props.children}</ProductContextData.Provider>
  )
}

export default ProductContext